import { Technology } from 'types';
import Image from 'next/image';

const TechnologyCard = ({ technology }: { technology: Technology }) => {
  return (
    <div
      className="group relative rounded-2xl border-current px-[1px] py-[1px] text-gray-400"
      style={{
        background: `linear-gradient(to bottom right, ${technology.color}${
          technology.specialized ? '55' : '22'
        } , #00000000)`,
      }}
      title={technology.name}
    >
      <div
        style={{ height: '100%' }}
        className="grid w-full place-items-center rounded-2xl bg-zinc-900/80 bg-opacity-80 px-5 py-4 md:px-10 md:py-6"
      >
        <div
          className={` ${
            !technology.specialized ? 'scale-75' : 'scale-90'
          } flex items-center justify-center transition-transform md:scale-100`}
          style={{
            height: '30px',
            width: technology.name == 'Next.js' ? 50 : 30,
          }}
        >
          <Image
            className={'object-contain'}
            width={100}
            height={100}
            src={technology.icon}
            alt={technology.name}
          />
        </div>

        {/* <h3 className="absolute bottom-6 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
          {technology.name}
        </h3> */}
      </div>
    </div>
  );
};

export default TechnologyCard;
