import { Voluntary } from '../../types';

const VoluntaryCard = ({ voluntary }: { voluntary: Voluntary }) => {
  return (
    <div className="flex gap-5 flex-auto">
      <div>
        <div className="w-4 h-4 rounded-full bg-emerald-400 mt-1 ring-4 ring-emerald-400 ring-opacity-30"></div>
      </div>
      <div className="max-w-sm">
        <p className="text-emerald-400 font-semibold text-sm">
          {voluntary.position}
        </p>
        <h4 className="font-bold text-lg">{voluntary.place}</h4>
        <p className="text-gray-300 text-sm">{voluntary.description}</p>
      </div>
    </div>
  );
};

export default VoluntaryCard;
