import {} from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
  /**
   * Find events that are public or visible to the current profile, directly or through roles (visibleToRoles)
   */
  const events = await prisma.event.findMany({
    where: {
      OR: [
        // generally public
        {
          public: true,
        },
        // published and visible to roles in common with current profile
        {
          visibleToRoles: {
            some: {
              profiles: {
                some: {
                  id: locals.user?.profileId,
                },
              },
            },
          },
          publishedAt: {
            not: null,
          },
        },
        // visible to profiles
        {
          visibleToProfiles: {
            some: {
              id: locals.user?.profileId,
            },
          },
        },
        // editable (and therefore visible) to roles in common with current profile
        {
          organizer: {
            profiles: {
              some: {
                id: locals.user?.profileId,
              },
            },
          },
        },
      ],
    },
    select: {
      id: true,
      title: true,
      description: true,
      thumbnailUrl: true,
      startsAt: true,
      location: true,
      publishedAt: true,
    },
    orderBy: {
      startsAt: {
        sort: 'desc',
      },
    },
  });

  return { events: events };
};
