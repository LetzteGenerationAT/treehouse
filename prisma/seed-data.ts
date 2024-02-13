import { $Enums, Prisma } from '@prisma/client';
import { createKeyId } from 'lucia';
import { generateLuciaPasswordHash, generateRandomString } from 'lucia/utils';

const ids = [generateRandomString(15)];

const profiles: Prisma.ProfileCreateInput[] = [
  {
    authUser: {
      create: {
        id: ids[0],
        email: 'admin@example.com',
        key: {
          create: {
            id: createKeyId('admin@example.com', ids[0]),
            hashed_password: await generateLuciaPasswordHash('1234'),
          },
        },
      },
    },
    name: 'Admin',
    pronouns: 'any/all',
    bio: '🤖 Not so new around here',
    contact: {
      create: {
        type: $Enums.ContactType.Email,
        value: 'admin@example.com',
      },
    },
  },
];

export { profiles };
