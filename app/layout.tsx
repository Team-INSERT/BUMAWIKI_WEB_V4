import type { Metadata } from 'next';
import './globals.css';
import classNames from 'classnames';
import { pretendard } from '@/styles/fonts';
import TanstackQueryProvider from '@/providers/TanstackQueryProvider';

export const metadata: Metadata = {
  title: '부마위키 | 역사의 고서',
  description: '우리의 손으로 써내려 나가는 역사의 고서, 부마위키',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(pretendard.variable, 'max-w-screen h-screen')}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
