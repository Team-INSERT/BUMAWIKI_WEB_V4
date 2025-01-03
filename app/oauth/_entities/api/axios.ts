import { http, refreshTokenHeader } from '@/modules/services';

export const requestLogin = async (authCode: string) => {
  const { data } = await http.post('/auth/oauth/bsm', {}, { headers: { authCode } });
  return data;
};

export const requestLogout = async () => {
  const { data } = await http.delete('/auth/bsm/logout', refreshTokenHeader());
  return data;
};
