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
      role: "VP/Head of Alliance &+ Investment Strategy Div. · SoftBank",
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
          <div className="flex items-center pl-5 space-x-4">
            <span className="text-[#00E300] text-lg lg:text-[30px]  font-medium">
              Fireside Chat
            </span>
            <div className="flex-grow border-t relative left-5 lg:left-10 border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 3xl:flex justify-between text-white flex-wrap gap-y-7">
            {speakers.map((speaker, index) => (
              <React.Fragment key={index}>
                <SpeakerCard
                  image={speaker.krname}
                  name={language === "KR" ? speaker.krname : speaker.jpname}
                  role={speaker.role}
                />
                {index < speakers.length - 1 && (
                  <div className="hidden 3xl:flex items-center justify-center pb-16 px-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.4">
                        <mask
                          id="mask0_175_200"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                        >
                          <rect width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_175_200)">
                          <path
                            d="M19.295 20.705H10V19.295H19.295V10H20.705V19.295H30V20.705H20.705V30H19.295V20.705Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="flex items-c pl-5 space-x-4">
            <span className="text-[#00E300] text-lg lg:text-[30px] lg:pt-8 font-medium">
              Keynote
            </span>
            <div className="flex-grow border-t relative left-5 lg:left-10 top-3 lg:top-11 border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 3xl:flex justify-between text-white flex-wrap gap-y-7">
            {speakers2.map((speaker, index) => (
              <React.Fragment key={index}>
                <SpeakerCard
                  image={speaker.krname}
                  name={language === "KR" ? speaker.krname : speaker.jpname}
                  role={speaker.role}
                />
              </React.Fragment>
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-col space-y-7">
          <div className="flex items-c pl-5 space-x-4">
            <span className="text-[#00E300] text-lg lg:text-[30px] lg:pt-8 font-medium">
              Panel Discussion{" "}
            </span>
            <div className="flex-grow border-t relative left-5 lg:left-10 top-3 lg:top-11 border-white opacity-20"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 3xl:flex justify-between text-white flex-wrap gap-y-7">
            {speakers3.map((speaker, index) => (
              <React.Fragment key={index}>
                <SpeakerCard
                  image={speaker.krname}
                  name={language === "KR" ? speaker.krname : speaker.jpname}
                  role={speaker.role}
                  panel={language === "KR" ? speaker.panel : speaker.jppanel}
                />
                {index != 2 && index < speakers3.length - 1 && (
                  <div className="hidden 3xl:flex items-center justify-center pb-2 px-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.4">
                        <mask
                          id="mask0_175_200"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                        >
                          <rect width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_175_200)">
                          <path
                            d="M19.295 20.705H10V19.295H19.295V10H20.705V19.295H30V20.705H20.705V30H19.295V20.705Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="hidden invisible 3xl:flex items-center justify-center pb-16 px-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <mask
                    id="mask0_175_200"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                  >
                    <rect width="40" height="40" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_175_200)">
                    <path
                      d="M19.295 20.705H10V19.295H19.295V10H20.705V19.295H30V20.705H20.705V30H19.295V20.705Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[260px] invisible"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersAndPanels;
