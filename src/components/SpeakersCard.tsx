interface SpeakerProps {
  image: string;
  name: string;
  role: string;
  panel?: string;
  url?: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({
  image,
  name,
  role,
  panel,
  url,
}) => {
  return (
    <div className="flex flex-col items-center rounded-lg font-medium ">
      <img
        src={require(`../assets/${image}.png`)}
        alt={name}
        className="w-[150px] h-[150px] lg:w-[260px] lg:h-[260px]  rounded-full mb-4 object-cover border-2 border-transparent hover:cursor-pointer hover:border-[#00E300]"
        onClick={() => {
          window.open(url, "_blank"); // Replace with your desired URL
        }}
      />
      <span className=" text-[#00E300] text-sm lg:text-xl">{panel}</span>
      <h3 className="text-lg lg:text-2xl text-white ">{name}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: role.replace("+", "<br />"),
        }}
        className="text-sm lg:text-base text-[#777777] w-11/12 text-center"
      />
    </div>
  );
};

export default SpeakerCard;
