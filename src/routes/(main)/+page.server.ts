import {} from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
  /**
   * Find profile or null
   */
  const profile = locals.user
    ? await prisma.profile.findUnique({
        where: {
          id: locals.user.profileId,
        },
        select: {
          id: true,
          roles: true,
        },
      })
    : null;

  /**
   * Find events that the user is allowed to see
   */
  const events = await prisma.event.findMany({
    where: {
      OR: [
        // Published events, visible ...
        {
          publishedAt: { not: null },
          OR: [
            // without logging in
            {
              public: true,
            },
            // to user
            {
              visibleToProfiles: {
                some: {
                  id: locals.user?.id,
                },
              },
            },
            // to role
            {
              visibleToRoles: (() => (profile ? { hasSome: profile.roles } : undefined))(),
            },
          ],
        },
      ],
    },
  });

  return { profile, events };
};
