import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import SpeakerCard from "./SpeakersCard";

const SpeakersAndPanels: React.FC = () => {
  const speakers = [
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "JP Lee",
      jpname: "JP Lee",
      role: "CEO/Managing Partner · SBVA",
      url: "https://sbvacorp.com/en/team/4",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Yuta Uchiyama",
      jpname: "内山 雄太",
      role: "CEO · SODA",
      url: "https://soda-inc.jp/en/",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Youngki Kim",
      jpname: "Youngki Kim",
      role: "CFO · KREAM",
      url: "https://www.kreamcorp.com/",
    },
  ];
  const speakers2 = [
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Taizo Son",
      jpname: "孫 泰蔵",
      role: "Founder · Mistletoe |+ Co-Founder · The Edgeof",
      jppanel: "スピーカー",
      url: "https://jp.linkedin.com/in/taizo-son-b6086182",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Miki Fukazawa",
      jpname: "深澤 実樹",
      role: "VP/Head of Alliance &+ Investment Strategy Div. · SoftBank",
      jppanel: "スピーカー",
      url: "https://www.softbank.jp/en/corp/",
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
      url: "https://www.samurai-incubate.co.jp/about/team/",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Hogil Doh",
      jpname: "都 虎吉",
      role: "General Partner · Global Brain",
      panel: "Panel",
      jppanel: "スピーカー",
      url: "https://globalbrains.com/members/hogil.doh",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Takashi Kitao",
      jpname: "北尾 崇",
      role: "Partner/Director · CyberAgent Capital",
      panel: "Panel",
      jppanel: "スピーカー",
      url: "https://www.cyberagentcapital.com/team/takashikitao/",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Tomoko Numata",
      jpname: "沼田 朋子",
      role: "Chief Capitalist · JAFCO",
      panel: "Panel",
      jppanel: "スピーカー",
      url: "https://www.jafco.co.jp/partners/001084.html",
    },
    {
      image: "https://via.placeholder.com/150", // 이미지 URL 교체
      krname: "Hideyuki Ebihara",
      jpname: "海老原 秀幸",
      role: "Partner · PKSHA CAPITAL",
      panel: "Moderator",
      jppanel: "モデレーター",
      url: "https://pkshacapital.com/team/",
    },
  ];
  const { language } = useLanguage(); // 컨텍스트에서 현재 언어를 가져옵니다.

  return (
    <div className="w-full font-spoka">
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col space-y-7 ">
          <div className="flex items-c pl-5 cus:pl-0 cus:pb-[30px] space-x-4">
            <span className="text-[#00E300] text-lg cus:text-[30px] cus:pt-8 font-medium font-poppins">
              Keynote
            </span>
            <div className="flex-grow border-t relative left-5 cus:left-10 top-3 cus:top-11 border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  cus:gap-x-0 cus:flex justify-between text-white flex-wrap  gap-y-[30px] cus:gap-y-[60px]">
            {speakers2.map((speaker, index) => (
              <React.Fragment key={index}>
                <SpeakerCard
                  image={speaker.krname}
                  name={language === "KR" ? speaker.krname : speaker.jpname}
                  role={speaker.role}
                  url={speaker.url}
                />
              </React.Fragment>
            ))}

            <div className="w-[260px] hidden cus:block invisible"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-7 pt-[30px] ">
          <div className="flex items-center pl-5 cus:pl-0 cus:pb-[30px]  space-x-4 ">
            <span className="text-[#00E300]  text-lg cus:text-[30px]  font-medium font-poppins">
              Fireside Chat
            </span>
            <div className="flex-grow border-t relative left-5 cus:left-10 border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  cus:gap-x-0 cus:flex justify-between text-white flex-wrap  gap-y-[30px] cus:gap-y-[60px]">
            {speakers.map((speaker, index) => (
              <React.Fragment key={index}>
                <SpeakerCard
                  image={speaker.krname}
                  name={language === "KR" ? speaker.krname : speaker.jpname}
                  role={speaker.role}
                  url={speaker.url}
                />
              </React.Fragment>
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-col space-y-7 pt-[30px] ">
          <div className="flex items-c pl-5 cus:pl-0 cus:pb-[30px] space-x-4">
            <span className="text-[#00E300] text-lg cus:text-[30px] cus:pt-8 font-medium font-poppins">
              Panel Discussion{" "}
            </span>
            <div className="flex-grow border-t relative left-5 cus:left-10 top-3 cus:top-11 border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 cus:grid-cols-[auto_1fr_auto] cus:gap-x-0 text-white flex-wrap  gap-y-[30px] cus:gap-y-[60px]">
            {speakers3.map((speaker, index) => (
              <React.Fragment key={index}>
                <SpeakerCard
                  image={speaker.krname}
                  name={language === "KR" ? speaker.krname : speaker.jpname}
                  role={speaker.role}
                  panel={language === "KR" ? speaker.panel : speaker.jppanel}
                  url={speaker.url}
                />
              </React.Fragment>
            ))}

            <div className="w-[260px] invisible"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersAndPanels;
