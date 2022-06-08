import { NextPage } from 'next';
import Layout from '../../components/layout/Layout';
import React from 'react';

const Projects: NextPage = () => {
  return (
    <Layout>
      <section className="mx-2 mt-18">
        <h1 className="text-white font-black text-center mt-12 text-6xl hover:text-3xl hover:w-0 hover:mt-4 w-full transition-all duration-500">
          Projects
        </h1>
      </section>
    </Layout>
  );
};

export default Projects;
