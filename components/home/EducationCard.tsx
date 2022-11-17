import { Education } from '../../types';

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className="bg-gray-900 bg-opacity-30 backdrop-blur-md px-6 md:px-10 py-6 md:py-8 rounded-2xl">
      <h3 className="font-bold text-lg mb-2">{education.name}</h3>
      <p className="text-sm text-gray-300">{education.description}</p>
    </div>
  );
};

export default EducationCard;
