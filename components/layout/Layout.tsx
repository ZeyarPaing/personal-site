import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Zeyar Paing | Frontend Web Developer</title>
        <meta
          name="description"
          content="A creative & passionate Front-End Web Developer delivering efficient &
          optimized solutions, skilled in designing, developing and refactoring
          multiple web-based applications incorporating a range of technologies."
        />
        <meta
          name="keyword"
          content="frontend developer,frontend,developer, zeyar, zeyarpaing, web developer"
        />
        <link rel="icon" href="/logo-mono.svg" />
      </Head>
      <Navbar />
      <main style={{ marginTop: '70px' }} className="m-layout">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
