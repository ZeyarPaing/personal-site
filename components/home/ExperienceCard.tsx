import { Experience } from '../../types';
import React from 'react';
import Link from 'next/link';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div
      className={`bg-gray-900 bg-opacity-40 backdrop-blur-md px-6 md:px-10 py-6 md:py-8 rounded-2xl 
                    ${
                      experience.current
                        ? 'border-2 border-primary border-opacity-50 bg-primary-dark/20'
                        : ''
                    }`}
    >
      {experience.current && (
        <span className="absolute -top-2 -right-1">
          <span className="inline-flex h-[15px] w-[15px] relative ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
            <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-emerald-300" />
          </span>
        </span>
      )}
      <p className="text-gray-400 text-sm">
        {experience.current
          ? `${(
              (new Date().getTime() - experience.joined!.getTime()) /
              (1000 * 60 * 60 * 24 * 365)
            ).toFixed(2)} year and still counting`
          : `${experience.year} year`}
      </p>
      <h3 className="text-gray-200 font-bold font-primary my-1 text-lg">
        <Link
          className="hover:text-primary-light"
          rel="noreferrer noopener"
          target="_blank"
          href={experience.websiteLink}
        >
          @{experience.companyName}
        </Link>
      </h3>
      <h4 className="font-bold text-md text-gray-300 mb-1">
        {experience.position}
      </h4>
      <p className="text-sm mt-1 text-gray-400">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
