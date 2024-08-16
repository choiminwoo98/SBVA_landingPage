interface SpeakerProps {
  image: string;
  name: string;
  role: string;
  panel?: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ image, name, role, panel }) => {
  return (
    <div className="flex flex-col items-center rounded-lg ">
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[150px] rounded-full mb-4 object-cover border-2 border-transparent hover:cursor-pointer hover:border-[#00E300] border-white"
      />
      <span className="text-[#00E300]">{panel}</span>
      <h3 className="text-lg text-white font-bold">{name}</h3>
      <p className="text-sm text-gray-400 w-4/5 text-center">{role}</p>
    </div>
  );
};

export default SpeakerCard;
