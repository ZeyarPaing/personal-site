import { Technology } from '../../types';
import Image from 'next/image';

const TechnologyCard = ({ technology }: { technology: Technology }) => {
  return (
    <div
      className="group flex-auto border-current text-gray-400 px-[1px] py-[1px] rounded-3xl"
      style={{
        background: `linear-gradient(to bottom right, ${technology.color}${
          technology.specialized ? 'BB' : '45'
        } , #00000000)`,
      }}
      title={technology.name}
    >
      <div
        className={`px-5 md:px-10 pt-6 md:pt-8 pb-2 md:pb-4 ${
          technology.name == 'Flutter'
            ? 'pl-4 pr-6'
            : technology.name == 'Next.js'
            ? 'px-10'
            : ''
        } backdrop-blur-md rounded-3xl w-full grid place-items-center bg-darkblue bg-opacity-80 `}
      >
        <Image
          className={`group-hover:scale-75 ${
            !technology.specialized ? 'scale-75' : 'scale-90'
          } md:scale-100 transition-transform`}
          width={technology.name == 'Next.js' ? 120 : 90}
          height={90}
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
