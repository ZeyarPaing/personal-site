import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import React from 'react';
import { projects } from 'data/info';
import ProjectCard from 'components/project/ProjectCard';

const Projects: NextPage = () => {
  return (
    <Layout title="Projects | Zeyar Paing">
      <h1 className="text-white font-black text-center mt-12 mb-2 md:mt-24 md:mb-10 text-3xl md:text-5xl">
        Projects
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;
