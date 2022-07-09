import { Experience } from '../../types';
import React from "react";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className={`bg-gray-900 bg-opacity-30 backdrop-blur-md px-6 md:px-10 py-6 md:py-8 rounded-2xl 
                    ${experience.current ? 'border border-2 border-primary bg-opacity-5 border-opacity-50 bg-primary-dark': ''}`}>
        {experience.current && <span className="absolute -top-2 -right-1">
                <span className="inline-flex h-[15px] w-[15px] relative ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                  <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-emerald-300" />
                </span>
              </span>}
      <p className="text-gray-400 text-sm">{experience.current ? 'Currently working' : `${experience.year} year`} </p>
        <h4 className="text-gray-200 font-bold font-primary mt-1 mb-1.5 text-lg">
            @{experience.companyName}
        </h4>
      <h4 className="font-bold text-md text-gray-300 mb-1">{experience.position}</h4>
      <p className="text-sm text-gray-400">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
