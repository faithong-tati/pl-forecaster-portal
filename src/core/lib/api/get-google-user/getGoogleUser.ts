import type { GetGoogleUserParams, GetGoogleUserResponse } from './types';

export async function getGoogleUser({
  token,
}: GetGoogleUserParams): Promise<GetGoogleUserResponse> {
  const url = 'https://www.googleapis.com/oauth2/v3/userinfo';
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
}
