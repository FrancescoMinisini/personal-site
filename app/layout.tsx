import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Francesco Giuseppe Minisini",
    template: "%s | Francesco Giuseppe Minisini",
  },
  description:
    'Co-founder & CTO building LLM security tools. Previously VP Engineering, YC alum, Stanford ICME.',
  keywords: [
    "Francesco Giuseppe Minisini",
    'LLM security',
    'machine learning',
    'CTO',
    'startup founder',
    'YC',
  ],
  authors: [{ name: "Francesco Giuseppe Minisini" }],
  creator: "Francesco Giuseppe Minisini",
  metadataBase: new URL('https://francescominisini.github.io/personal-site/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://francescominisini.github.io/personal-site/',
    siteName: "Francesco Giuseppe Minisini",
    title: "Francesco Giuseppe Minisini",
    description:
      'Researcher on Quantum Machine Learning.',
    images: [
      {
        url: './images/me.jpg',
        width: 1200,
        height: 630,
        alt: "Francesco Giuseppe Minisini",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
