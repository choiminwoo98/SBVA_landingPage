import { useLanguage } from "../contexts/LanguageContext";

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
  const { language } = useLanguage(); // 컨텍스트에서 현재 언어를 가져옵니다.

  return (
    <div className="flex flex-col items-center rounded-lg font-normal ">
      <img
        src={require(`../assets/${image}.png`)}
        alt={name}
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] cus:w-[260px] cus:h-[260px]  rounded-full mb-4 object-cover border-2 border-transparent hover:cursor-pointer hover:border-[#00E300]"
        onClick={() => {
          window.open(url, "_blank"); // Replace with your desired URL
        }}
      />
      <span
        className={`text-[#00E300] text-sm cus:text-lg ${
          language === "JP" ? "font-meiryo" : "font-poppins"
        }`}
      >
        {panel}
      </span>
      <h3
        className={`text-lg cus:text-2xl text-white ${
          language === "JP" ? "font-meiryo" : "font-poppins"
        }`}
      >
        {name}
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: role.replace("+", "<br />"),
        }}
        className="text-sm cus:text-base text-[#777777] w-full font-poppins text-center"
      />
    </div>
  );
};

export default SpeakerCard;
