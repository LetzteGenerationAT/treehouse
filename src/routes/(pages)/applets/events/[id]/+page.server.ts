import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const trailingSlash = 'always';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { event, canEdit } = await prisma.event
    .findUniqueOrThrow({
      where: {
        id: params.id,
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
      include: {
        organizer: {
          select: {
            name: true,
          },
        },
      },
    })
    .then(async (event) => {
      const canEdit = (await prisma.profile.findUnique({
        where: {
          id: locals.user?.profileId,
          roles: {
            some: {
              id: event.organizerId,
            },
          },
        },
        select: {
          id: true,
        },
      }))
        ? true
        : false;

      return { event, canEdit };
    })
    .catch((reason) => {
      error(403, String(reason));
    });

  return { event, canEdit };
};
