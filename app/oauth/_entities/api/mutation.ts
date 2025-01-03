import { useMutation } from '@tanstack/react-query';
import { requestLogin, requestLogout } from './axios';
import { Storage } from '@/modules/services';
import { Bumawiki } from '@/modules/constants';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: requestLogin,
    onSuccess: ({ accessToken, refreshToken }) => {
      Storage.setItem(Bumawiki.token.access, accessToken);
      Storage.setItem(Bumawiki.token.refresh, refreshToken);
      window.history.go(-2);
    },
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: requestLogout,
    onSuccess: window.location.reload,
    onSettled: () => {
      Storage.delItem(Bumawiki.token.access);
      Storage.delItem(Bumawiki.token.refresh);
    },
  });
};
