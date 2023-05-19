import '@/styles/globals.css';
import React from 'react';
import { Plus_Jakarta_Sans } from '@next/font/google';
import { Header } from 'src/components/comon/template/header';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin','cyrillic-ext','vietnamese'],
  style: ['italic','normal'], 
  weight: ["200",'300','400','500','600','700','800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Aldcejam</title>
      </head>
      <body className={plus_jakarta_sans.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
