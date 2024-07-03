import { Experience } from '../../types';
import React from 'react';
import Link from 'next/link';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div
      className={`rounded-2xl bg-gray-900 bg-opacity-40 px-6 py-6 backdrop-blur-md md:px-10 md:py-8 ${
        experience.current ? 'border-2 border-primary border-opacity-50 bg-primary-dark/20' : ''
      }`}
    >
      {experience.current && (
        <span className="absolute -right-1 -top-2">
          <span className="relative inline-flex h-[15px] w-[15px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-light opacity-75" />
            <span className="relative inline-flex h-[15px] w-[15px] rounded-full bg-emerald-300" />
          </span>
        </span>
      )}
      <p className="text-sm text-gray-400">
        {experience.current
          ? `${(
              (new Date().getTime() - experience.joined!.getTime()) /
              (1000 * 60 * 60 * 24 * 365)
            ).toFixed(2)} years and still counting`
          : `${experience.year} years`}
      </p>
      <h3 className="my-1 font-primary text-lg font-bold text-gray-200">
        <Link
          className="hover:text-primary-light"
          rel="noreferrer noopener"
          target="_blank"
          href={experience.websiteLink}
        >
          @{experience.companyName}
        </Link>
      </h3>
      <h4 className="text-md mb-1 font-bold text-gray-300">{experience.position}</h4>
      <p className="mt-1 text-sm text-gray-400">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
