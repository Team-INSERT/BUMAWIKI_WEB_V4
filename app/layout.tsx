import type { Metadata } from 'next';
import './globals.css';
import classNames from 'classnames';
import { pretendard } from '@/styles/fonts';

export const metadata: Metadata = {
  title: '역사의 고서',
  description: '우리의 손으로 써내려 나가는 역사의 고서, 부마위키',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(pretendard.variable, 'max-w-screen h-screen')}>{children}</body>
    </html>
  );
}
