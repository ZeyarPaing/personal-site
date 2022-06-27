import { Experience } from '../../types';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-gray-900 bg-opacity-30 backdrop-blur-md px-6 md:px-10 py-6 md:py-8 rounded-2xl">
      {/*<p className="text-gray-400 text-sm">{experience.year} year as a </p>*/}
      <h4 className="font-bold text-lg">{experience.position}</h4>
      <p className="text-gray-400 font-bold mb-2 text-sm">
        @ {experience.companyName}
      </p>
      <p className="text-sm text-gray-300">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
