import { useLanguage } from "../contexts/LanguageContext";
import SpeakerCard from "./SpeakersCard";

const SpeakersAndPanels: React.FC = () => {
  const speakers = [
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "JP Lee",
      jpname: "JP Lee",

      role: "CEO/Managing Partner · SBVA",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Yuta Uchiyama",
      jpname: "内山 雄太",
      role: "CEO · SODA",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Youngki Kim",
      jpname: "Youngki Kim",
      role: "CFO · KREAM",
    },
  ];
  const speakers2 = [
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Miki Fukazawa",
      jpname: "深澤 実樹",
      role: "VP/Head of Alliance & Investment Strategy · SoftBank",
    },
  ];
  const speakers3 = [
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Kentaro Sakakibara",
      jpname: "榊原 健太郎",
      role: "CEO · SAMURAI INCUBATE",
      panel: "Panel",
      jppanel: "スピーカー",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Hogil Doh",
      jpname: "都 虎吉",
      role: "General Partner · Global Brain",
      panel: "Panel",
      jppanel: "スピーカー",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Takashi Kitao",
      jpname: "北尾 崇",
      role: "Partner/Director · CyberAgent Capital",
      panel: "Panel",
      jppanel: "スピーカー",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Tomoko Numata",
      jpname: "沼田 朋子",
      role: "Chief Capitalist · JAFCO",
      panel: "Panel",
      jppanel: "スピーカー",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Hideyuki Ebihara",
      jpname: "海老原 秀幸",
      role: "Partner · PKSHA CAPITAL",
      panel: "Moderator",
      jppanel: "モデレーター",
    },
  ];
  const { language } = useLanguage(); // 컨텍스트에서 현재 언어를 가져옵니다.

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col space-y-7">
          <div className="flex items-center space-x-4">
            <span className="text-[#00E300] text-lg font-medium">
              Fireside Chat
            </span>
            <div className="flex-grow border-t border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-7">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                image={`assets/${speaker.krname}.png`}
                name={language === "KR" ? speaker.krname : speaker.jpname}
                role={speaker.role}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="flex items-center space-x-4">
            <span className="text-[#00E300] text-lg font-medium">Keynote</span>
            <div className="flex-grow border-t border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-7">
            {speakers2.map((speaker, index) => (
              <SpeakerCard
                key={index}
                image={`assets/${speaker.krname}.png`}
                name={language === "KR" ? speaker.krname : speaker.jpname}
                role={speaker.role}
              />
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-col space-y-7">
          <div className="flex items-center space-x-4">
            <span className="text-[#00E300] text-lg font-medium">
              Panel Discussion{" "}
            </span>
            <div className="flex-grow border-t border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-7">
            {speakers3.map((speaker, index) => (
              <SpeakerCard
                key={index}
                image={`assets/${speaker.krname}.png`}
                name={language === "KR" ? speaker.krname : speaker.jpname}
                role={speaker.role}
                panel={language === "KR" ? speaker.panel : speaker.jppanel}
              />
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SpeakersAndPanels;
