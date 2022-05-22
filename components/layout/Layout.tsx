import Head from 'next/head';
import { NextPage } from 'next';
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
        <title>Zeyar Paing | Personal Site</title>
        <meta
          name="description"
          content="This website is a personal portfoilo website of Zeyar Paing"
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
