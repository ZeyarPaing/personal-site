import { Technology } from '../../types';
import Image from 'next/image';

const TechnologyCard = ({ technology }: { technology: Technology }) => {
  return (
    <div
      className="group flex-auto border-current text-gray-400 px-[1px] py-[1px] rounded-3xl relative"
      style={{
        background: `linear-gradient(to bottom right, ${technology.color}${
          technology.specialized ? 'BB' : '45'
        } , #00000000)`,
      }}
      title={technology.name}
    >
      <div
        style={{ height: '100%' }}
        className={`px-5 md:px-10 py-4 md:py-6 backdrop-blur-md rounded-3xl w-full grid place-items-center bg-darkblue bg-opacity-80 `}
      >
        <div
          className={`group-hover:scale-75 group-hover:-translate-y-4 ${
            !technology.specialized ? 'scale-75' : 'scale-90'
          } md:scale-100 transition-transform flex justify-center items-center`}
          style={{
            height: '120px',
            width: technology.name == 'Next.js' ? 120 : 80,
          }}
        >
          <Image
            className={`object-contain`}
            width={9999}
            height={9999}
            src={technology.icon}
            alt={technology.name}
          />
        </div>

        <p className="group-hover:opacity-100 group-hover:scale-100 scale-0 opacity-0 transition-all absolute bottom-6">
          {technology.name}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
