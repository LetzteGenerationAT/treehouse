import { lucia, oAuthClient } from '$lib/server/auth';
import { OAuth2RequestError } from 'oslo/oauth2';
import { OAUTH_CLIENT_SECRET, OAUTH_USERINFO_URL } from '$env/static/private';

import type { RequestEvent } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export async function GET(event: RequestEvent): Promise<Response> {
  const code = event.url.searchParams.get('code');
  const state = event.url.searchParams.get('state');
  const storedState = event.cookies.get('oauth_state') ?? null;
  const storedCodeVerifier = event.cookies.get('code_verifier') ?? null;
  if (!code || !state || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await oAuthClient.validateAuthorizationCode(code, {
      authenticateWith: 'request_body',
      credentials: OAUTH_CLIENT_SECRET,
      codeVerifier: storedCodeVerifier,
    });

    // Fetch userinfo (see `../+server.ts` for scopes)
    const userinfoResponse = await fetch(OAUTH_USERINFO_URL, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    }).then();
    const userinfo = await userinfoResponse.json();

    // Check if user exists
    const existingUser = await prisma.luciaUser.findUnique({
      where: {
        oAuthId: userinfo.sub,
      },
    });

    if (existingUser) {
      // Create session
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      event.cookies.set(sessionCookie.name, sessionCookie.value, {
        path: '.',
        ...sessionCookie.attributes,
      });
    } else {
      // Create user
      const user = await prisma.luciaUser.create({
        data: {
          oAuthId: userinfo['sub'],
          profile: {
            create: {
              displayName: userinfo['name'] || userinfo['preferred_username'],
              signupSource: 'app',
              contactOptions: {
                createMany: {
                  data: [
                    {
                      type: 'email',
                      value: userinfo['email'] ?? '',
                      verified: userinfo['emailVerified'] ?? undefined,
                    },
                  ],
                },
              },
            },
          },
        },
        select: {
          id: true,
        },
      });
      // Create session
      const session = await lucia.createSession(user.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      event.cookies.set(sessionCookie.name, sessionCookie.value, {
        path: '.',
        ...sessionCookie.attributes,
      });
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}
