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
        src={require(`../assets/${image}.png`)}
        alt={name}
        className="w-[150px] h-[150px] lg:w-[260px] lg:h-[260px] rounded-full mb-4 object-cover border-2 border-transparent hover:cursor-pointer hover:border-[#00E300]"
      />
      <span className="text-[#00E300]">{panel}</span>
      <h3 className="text-lg lg:text-2xl text-white font-bold">{name}</h3>
      <p className="text-sm lg:text-base text-gray-400 w-11/12 text-center">
        {role}
      </p>
    </div>
  );
};

export default SpeakerCard;
