import { Technology } from '../../types';
import Image from 'next/image';

const TechnologyCard = ({ technology }: { technology: Technology }) => {
  return (
    <div
      className="group flex-auto border-current text-gray-400 px-[1px] py-[1px] rounded-3xl"
      style={{
        background: `linear-gradient(to bottom right, ${technology.color}AA , #00000000)`,
      }}
      title={technology.name}
    >
      <div
        className={`px-10 pt-8 pb-4 ${
          technology.name == 'Flutter' ? 'pl-7' : ''
        } backdrop-blur-md rounded-3xl w-full grid place-items-center ${
          technology.specialized ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-900'
        }`}
      >
        <Image
          className={'group-hover:scale-75 transition-transform'}
          width={100}
          height={100}
          src={technology.icon}
          alt={technology.name}
        />
        <p className="group-hover:opacity-100 group-hover:scale-100 scale-0 opacity-0 transition-all">
          {technology.name}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
