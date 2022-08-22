import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  seoTitle?: string;
}

export default function Layout({ children, seoTitle }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{seoTitle} | Cheeze Burger</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}
