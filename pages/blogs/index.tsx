import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import { projects } from '../../data/info';
import ProjectCard from '../../components/project/ProjectCard';
import React from 'react';

const Blogs: NextPage = () => {
  return (
    <Layout
      title="Blogs by Zeyar Paing"
      description="Articles and blogs related to software development, web development and frontend development"
    >
      <h1 className="text-white font-black text-center mt-12 mb-2 md:mt-24 md:mb-10 text-3xl md:text-5xl">
        Blogs
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {[...projects, ...projects, ...projects].map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blogs;
