'use client';

import { MoonLoader } from 'react-spinners';
import { withAuthentication } from '../lib/withAuthentication';

export const AuthenticationPage = withAuthentication(() => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <MoonLoader size={40} color="#274168" />
      <span className="text-label-medium font-semibold">로그인 중...</span>
    </main>
  );
});
