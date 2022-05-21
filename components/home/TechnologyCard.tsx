import { Technology } from '../../types';
import Image from 'next/image';

const TechnologyCard = ({ technology }: { technology: Technology }) => {
  return (
    <div
      className="flex-auto border-current text-gray-400 px-[1px] py-[1px] rounded-3xl"
      style={{
        background: `linear-gradient(to bottom right, ${technology.color}AA , #00000000)`,
      }}
    >
      <div
        className={`px-10 py-8  backdrop-blur-md rounded-3xl w-full grid place-items-center ${
          technology.specialized ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-900'
        }`}
      >
        <Image width={100} height={100} src={technology.icon} />
      </div>
    </div>
  );
};

export default TechnologyCard;
