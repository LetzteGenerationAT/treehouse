import { oAuthClient } from '$lib/server/auth';
import { generateCodeVerifier, generateState } from 'oslo/oauth2';
import { redirect } from '@sveltejs/kit';

import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await oAuthClient.createAuthorizationURL({
    state,
    codeVerifier,
    scopes: ['email', 'openid', 'profile'],
  });

  event.cookies.set('oauth_state', state, {
    path: '/',
    secure: import.meta.env.PROD,
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax',
  });
  event.cookies.set('code_verifier', codeVerifier, {
    path: '/',
    secure: import.meta.env.PROD,
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax',
  });

  redirect(302, url.toString());
}
