import { Project } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Project.module.css';
import { FC } from 'react';

const ProjectCard: FC<{
  project: Project;
  showDots?: boolean;
  vertical?: boolean;
}> = (props) => {
  const { project, showDots, vertical } = props;
  return (
    <Link
      style={{ color: project.color }}
      className={(showDots ? styles.projectCard : '') + ' group'}
      href={project.demoUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className={`relative h-full bg-gray-900 bg-opacity-40 transition-colors group-hover:bg-opacity-50 group-hover:bg-gray-800 rounded-2xl px-7 py-6 z-[1] backdrop-blur-md`}
      >
        <div
          className={`flex gap-4 flex-wrap ${
            vertical ? 'flex-col items-center' : ''
          }`}
        >
          <Image src={project.logo} width={50} height={50} alt={project.name} />
          <div className={vertical ? 'text-center' : ''}>
            <h3 className="font-bold text-lg">{project.name}</h3>
            <p className="text-gray-400 text-sm">{project.type}</p>
          </div>
        </div>
        <p className="text-gray-300 mt-3 text-sm">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
