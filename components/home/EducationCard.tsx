import { Education } from '../../types';

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className="rounded-2xl bg-zinc-800/70 px-6 py-6 md:px-10 md:py-8">
      <h3 className="mb-2 text-lg font-bold">{education.name}</h3>
      <p className="text-sm text-gray-300">{education.description}</p>
    </div>
  );
};

export default EducationCard;
