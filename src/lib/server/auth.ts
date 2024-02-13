import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import prisma from '$lib/server/prisma';
import { dev } from '$app/environment';
import { OAuth2Client } from 'oslo/oauth2';
import {
  OAUTH_CLIENT_ID,
  OAUTH_AUTHORIZE_URL,
  OAUTH_TOKEN_URL,
  BASE_URL,
} from '$env/static/private';

const adapter = new PrismaAdapter(prisma.luciaSession, prisma.luciaUser);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: !dev,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      oAuthId: attributes.oAuthId,
      profileId: attributes.profileId,
    };
  },
});

// Custom OAuth Client
export const oAuthClient = new OAuth2Client(OAUTH_CLIENT_ID, OAUTH_AUTHORIZE_URL, OAUTH_TOKEN_URL, {
  redirectURI: `${BASE_URL}/login/oauth/callback`,
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  oAuthId: string;
  profileId: string;
}
