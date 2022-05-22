import { Project } from '../../types';
import Image from 'next/image';

const projectCard = (props: { project: Project }) => {
  const project = props.project;
  return (
    <div className="relative">
      <div className="bg-gray-800 bg-opacity-40 rounded-2xl px-7 py-6 z-[3] backdrop-blur-md">
        <div className="flex gap-4 flex-wrap">
          <Image src={project.logo} width={50} height={50} alt={project.name} />
          <div>
            <h4 className="font-bold text-lg">{project.name}</h4>
            <p className="text-gray-400 text-sm">{project.type}</p>
          </div>
        </div>
        <p className="text-gray-300 mt-3 text-sm">{project.description}</p>
      </div>
      <div
        className="absolute top-4 left-4  rounded-full w-8 h-8 blur-xl"
        style={{ backgroundColor: project.color, zIndex: 1 }}
      ></div>
    </div>
  );
};

export default projectCard;
