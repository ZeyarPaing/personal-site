import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import React from 'react';
import { projects } from 'data/info';
import ProjectCardWithMedia from 'components/project/ProjectCardWithMedia';
import PatternBackground from 'components/shared/PatternBackground';

const Projects: NextPage = () => {
  return (
    <Layout title="Projects | Zeyar Paing">
      <h1 className="mb-2 mt-12 text-center text-3xl font-black text-white md:mb-10 md:mt-24 md:text-5xl">
        Projects
      </h1>
      <ul className="grid grid-cols-1 gap-x-1 gap-y-8 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCardWithMedia key={idx} project={project} />
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;
