import type { Metadata } from "next";
import { Sen } from "next/font/google";
import { Inter } from 'next/font/google'

import { ViewWrapper } from '@/lib';
import './global.css';

const sen = Sen({ style: 'normal', subsets: ['latin'], variable: '--font-family' });
const inter = Inter({ subsets: ['latin'], variable: '--font-family' })

export const metadata: Metadata = {
  title: "Nava's web",
  description: "NextJS app with @UiReact library set up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ViewWrapper>
            {children}
          </ViewWrapper>
      </body>
    </html>
  );
}
