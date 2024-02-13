import { redirect } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  if (!event.locals.user) redirect(302, '/signup');

  const profileId = event.locals.user.profileId;

  // Get rotating id
  let rotatingId = await prisma.rotatingId.findFirst({
    where: {
      profileId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      createdAt: true,
    },
  });

  // Create new rotating id if it doesn't exist or is older than 12 hours
  if (!rotatingId || rotatingId.createdAt.getTime() < Date.now() - 1000 * 60 * 60 * 12) {
    rotatingId = await prisma.rotatingId.create({
      data: {
        profileId,
      },
      select: {
        id: true,
      },
    });
  }

  return {
    profile: await prisma.profile.findUnique({
      where: {
        id: event.locals.user.profileId,
      },
      select: {
        displayName: true,
        pictureUrl: true,
        pronouns: true,
        bio: true,
        roles: true,
      },
    }),
    rotatingId: rotatingId?.id,
  };
};
