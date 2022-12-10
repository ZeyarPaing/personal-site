import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { hostDomain, previewImage } from '../../data/app-data';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const Layout = ({
  children,
  title = 'Zeyar Paing | Frontend Web Developer',
  description = 'A creative & passionate Front-End Web Developer delivering efficient & optimized solutions, skilled in designing, developing and refactoring multiple web-based applications incorporating a range of technologies.',
  keywords = 'frontend developer,frontend,developer, zeyar, zeyarpaing, web developer',
  url = '',
  image,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
        <meta name="author" content="Zeyar Paing" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeyar.dev" />
        <meta
          property="og:site_name"
          content="Zeyar Paing | Frontend developer"
        />

        <link rel="icon" href="/logo-mono.svg" />

        <link rel="canonical" href={hostDomain + url} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={hostDomain + url} />
        <meta property="og:site_name" content="Rezeve" />
        <meta property="og:image" content={image || previewImage} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={hostDomain + url} />
        <meta name="twitter:image" content={image || previewImage} />
      </Head>
      <Navbar />
      <main style={{ marginTop: '70px' }} className="m-layout min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
