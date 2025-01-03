import { Suspense } from 'react';
import { AuthenticationPage } from './_features';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: '부마위키 | 로그인',
  description: '로그인 후 부마위키 문서에 직접 기여해보세요.',
};

const Page: NextPage = () => {
  return (
    <Suspense>
      <AuthenticationPage />
    </Suspense>
  );
};

export default Page;
