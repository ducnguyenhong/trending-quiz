import { Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const font = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Trending Quiz',
  description: 'Trending Quiz'
};

export default function RootLayout({
  children,
  sidebar,
  header
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={font.className}>
        <Providers>
          <Flex>
            <div>{sidebar}</div>
            <Flex direction="column" flex={1}>
              {header}
              <Flex direction="column" flex={1} px={7} py={5}>
                {children}
              </Flex>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
