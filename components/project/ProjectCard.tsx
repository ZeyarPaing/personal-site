import { Project } from '../../types';
import Image from 'next/image';

const projectCard = (props: { project: Project; showDots?: boolean }) => {
  const { project, showDots } = props;
  return (
    <div className="relative">
      <div
        className={`${
          showDots ? 'absolute' : ''
        } bg-gray-800 bg-opacity-40 rounded-2xl px-7 py-6 z-[3] backdrop-blur-md`}
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
      {showDots ? (
        <div
          className="absolute -top-1.5 -left-1.5 rounded-full w-8 h-8 "
          style={{ backgroundColor: project.color }}
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default projectCard;
