import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import '@fontsource-variable/m-plus-2';

import { Author } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });

const author: Author = {
  name: "Xavi Ramon Nicolau",
  url: "https://www.xavirn.com/",
};  

export const metadata: Metadata = {
  title: "Bento Grid Generator 🍱",
  description: "A web tool that generates layouts in bento grid format and allows you to copy it as native HTML+CSS or HTML+Tailwind to your clipboard.",
  authors: [author],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <title>{metadata.title && metadata.title.toString()}</title>
        <meta name="description" content={metadata.description || ""} />
        <meta name="author" content={metadata.authors ? metadata.authors.toString() : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.xavirn.com/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}