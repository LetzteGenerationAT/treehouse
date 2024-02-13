import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import prisma from '$lib/server/prisma';

import type { Actions, PageServerLoad } from './$types';
import type { Prisma } from '@prisma/client';

/*
 * Redirect authenticated users to profile
 */
// export const load: PageServerLoad = async ({ locals }) => {
//   const session = await locals.auth.validate();
//   if (session) redirect(302, '/');
//   return {
//     orgName: env.ORG_NAME,
//   };
// };

/*
 * Signup via POST
 */
export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    let email = formData.get('email');
    const password = formData.get('password');
    let name = formData.get('name');
    const zip = formData.get('zip');

    // Basic form validation
    if (typeof email !== 'string' || email.length < 4 || email.length > 31) {
      return fail(400, {
        message: 'Invalid email',
      });
    }
    if (typeof password !== 'string' || password.length < 4 || password.length > 255) {
      return fail(400, {
        message: 'Invalid password',
      });
    }
    if (typeof name !== 'string' || name.length < 1 || name.length > 255) {
      return fail(400, {
        message: 'Invalid name',
      });
    }
    if (typeof zip !== 'string' || zip.length < 1 || zip.length > 255) {
      return fail(400, {
        message: 'Invalid ZIP code',
      });
    }

    /**
     * Format data
     *
     *
     */
    email = email.trim().toLowerCase();
    name = name.trim();
    const zipCodeObjects = ((zipCodes) => {
      const z: Prisma.ContactCreateManyProfileInput[] = [];
      for (const zipCode of zipCodes) {
        z.push({
          type: 'ZipCode',
          value: zipCode,
        });
      }
      return z;
    })(zip.split(/[\s,;]+/));

    try {
      // Create user
      const user = await auth.createUser({
        key: {
          providerId: 'email', // Auth method
          providerUserId: email,
          password, // Hashed by Lucia
        },
        attributes: {
          email: email,
        },
      });

      // Create profile
      const profile = await prisma.profile.create({
        data: {
          name: name,
          authUserId: user.userId,
          contact: {
            createMany: {
              data: [
                {
                  type: 'Email',
                  value: email,
                },
                ...zipCodeObjects,
              ],
            },
          },
        },
      });

      // // Link profile to user
      // await prisma.luciaUser.update({
      //   where: {
      //     id: user
      //   }
      // })

      // Create session
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {},
      });
      locals.auth.setSession(session); // set session cookie
    } catch (e) {
      // // this part depends on the database you're using
      // // check for unique constraint error in user table
      // if (e instanceof SomeDatabaseError && e.message === USER_TABLE_UNIQUE_CONSTRAINT_ERROR) {
      //   return fail(400, {
      //     message: 'email already taken',
      //   });
      // }
      console.log(e);
      return fail(500, {
        message: 'An unknown error occurred',
      });
    }
    // redirect to
    // make sure you don't throw inside a try/catch block!
    redirect(302, '/');
  },
};
