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
  title: "Bento Grid Generator 🍱 - Create Custom Bento Grids Easily",
  description: "Generate custom layouts in bento grid format and copy them as HTML+CSS or HTML+Tailwind. Perfect for web developers and designers.",
  authors: [{ name: "Xavi Ramon Nicolau", url: "https://www.xavirn.com/" }],
  keywords: ["Bento Grid", "Grid Generator", "HTML CSS", "Tailwind CSS", "Web Development"],
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
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": metadata.title,
            "description": metadata.description,
            "author": {
              "@type": "Person",
              "name": Array.isArray(metadata.authors) ? metadata.authors[0].name : author.name,
              "url": Array.isArray(metadata.authors) ? metadata.authors[0].url : author.url,
            },
          })}
        </script>

      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}