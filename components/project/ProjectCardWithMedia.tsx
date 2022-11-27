import { Project } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from 'styles/Project.module.css';

const ProjectCard: FC<{
  project: Project;
  showDots?: boolean;
  vertical?: boolean;
}> = (props) => {
  const { project, showDots, vertical } = props;
  return (
    <Link
      className={'group'}
      href={project.demoUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        style={{
          backgroundImage: `url(${project.media})`,
          backgroundColor: `#2d2d2d`,
        }}
        className={`${styles.projectMedia} relative h-[364px] overflow-hidden rounded-2xl z-[1]`}
      >
        {/*<Image*/}
        {/*  className="w-full h-full object-cover group-hover:scale-110 transition-transform"*/}
        {/*  src={project.media!}*/}
        {/*  alt={project.name}*/}
        {/*  width={2000}*/}
        {/*  height={1800}*/}
        {/*/>*/}
        <div className={`absolute inset-0`}></div>
        <div
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 max-w-[80%] w-full flex gap-4 flex-wrap p-4 rounded-2xl ${
            vertical ? 'flex-col items-center' : ''
          } bg-darkblue bg-opacity-50 backdrop-blur-md border border-gray-300 border-opacity-50`}
        >
          <Image src={project.logo} width={50} height={50} alt={project.name} />
          <div className={vertical ? 'text-center' : ''}>
            <h3 className="font-bold text-lg">{project.name}</h3>
            <p className="text-gray-200 text-sm">{project.type}</p>
          </div>
        </div>
        {/*<p className="text-gray-300 mt-3 text-sm">{project.description}</p>*/}
      </div>
    </Link>
  );
};

export default ProjectCard;
