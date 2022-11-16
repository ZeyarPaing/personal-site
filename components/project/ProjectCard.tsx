import { Project } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Project.module.css';

const projectCard = (props: { project: Project; showDots?: boolean }) => {
  const { project, showDots } = props;
  return (
    <Link
      style={{ color: project.color }}
      className={styles.projectCard + ' group'}
      href={project.demoUrl}
    >
      <div
        className={`relative bg-gray-900 bg-opacity-40 transition-all group-hover:bg-opacity-50 rounded-2xl px-7 py-6 z-[1] backdrop-blur-md`}
      >
        <div className="flex gap-4 flex-wrap">
          <Image src={project.logo} width={50} height={50} alt={project.name} />
          <div>
            <h4 className="font-bold text-lg">{project.name}</h4>
            <p className="text-gray-400 text-sm">{project.type}</p>
          </div>
        </div>
        <p className="text-gray-300 mt-3 text-sm">{project.description}</p>
      </div>
    </Link>
  );
};

export default projectCard;
