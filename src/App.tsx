import React from "react";
import Header from "./components/Header";
import FadeInSection from "./components/FadeInSection";
import { useLanguage } from "./contexts/LanguageContext"; // 추가된 코드
import VerticalTimeline from "./components/\bVerticalTimeline";
import TimelineItem from "./components/TimelineItem";
import SliderComponent from "./components/SliderComponent";

const App: React.FC = () => {
  const { language } = useLanguage(); // 추가된 코드

  return (
    <div className="App bg-black">
      {/* Header */}
      <Header />

      {/* 첫 번째 섹션 */}
      <div className="relative bg-gray-200 flex h-[800px] items-center justify-center">
        <h1 className="text-3xl">
          {language === "KR" ? "스크롤 다운" : "スピーカー&パネルセクション"}
        </h1>
      </div>

      {/* FadeInSection: 첫 번째 페이지 - 높이 1579px */}
      <FadeInSection>
        <div
          id="overview"
          className="h-[1579px]  text-white flex items-center justify-center"
        >
          <h2 className="text-2xl">
            {language === "KR" ? "개요 섹션" : "Overview Section"}
          </h2>
        </div>
      </FadeInSection>

      {/* FadeInSection: 두 번째 페이지 - 높이 2318px */}
      <FadeInSection>
        <div
          id="program"
          className="h-[2318px] w-[360px] lg:w-[1000px] flex flex-col items-center justify-center py-16"
        >
          <h2 className="text-3xl relative  lg:text-6xl text-white font-bold mb-8 text-left w-full pb-12">
            PROGRAM
          </h2>

          <div className="border-l-[1px] relative h-[1850px] lg:right-9 lg:h-[1620px] border-white border-opacity-20  mt-0 pt-0 py-10 space-y-12 text-white">
            <div className="relative">
              <div className="absolute -left-1.5 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 ">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    14:00~14:15
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[#00E300]  font-medium">
                      Opening Remarks
                    </span>
                    <span className="text-2xl">
                      SBVA와 SBVA의 투자 전략에 대한 이해
                    </span>
                  </div>
                  <div>
                    <div>
                      <span>JP Lee</span>
                      <span className="text-[#777777]">
                        &nbsp; &nbsp; CEO & Managing Partner · SBVA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-20 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[70px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    14:15~14:45
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[#00E300]  font-medium">
                      Fireside Chat
                    </span>
                    <span className="text-2xl">
                      SBVA의 성공적인 일본 투자 사례 소개
                    </span>
                  </div>
                  <div>
                    <div>
                      <div>
                        <span>JP Lee</span>
                        <span className="text-[#777777]">
                          &nbsp; &nbsp; CEO & Managing Partner · SBVA
                        </span>
                      </div>
                      <div>
                        <span>Uchiyama</span>
                        <span className="text-[#777777]">
                          &nbsp; &nbsp; CEO · SODA
                        </span>
                      </div>
                      <div>
                        <span>Kim Youngki</span>
                        <span className="text-[#777777]">
                          &nbsp; &nbsp; CFO · KREAM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-40 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[150px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    14:50~15:10
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[#00E300]  font-medium">Keynote</span>
                    <span className="text-2xl">
                      소프트뱅크가 기대하는 스타트업과의 미래 협력 방향
                    </span>
                  </div>
                  <div>
                    <div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">Miki Fukazawa</span>
                        <span className="text-[#777777]">
                          VP · Head of Alliance & Investment Strategy Division,
                          SoftBank
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-60 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[230px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    15:10~15:50
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[#00E300]  font-medium">
                      Panel Discussion
                    </span>
                    <span className="text-2xl">
                      일본 현지 VC를 통해 듣는 업계 동향, 투자/Exit 전략
                    </span>
                  </div>
                  <div>
                    <div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          Kentaro Sakakibara
                        </span>
                        <span className="text-[#777777]">
                          CEO · SAMURAI INCUBATE
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">Doh Hogil</span>
                        <span className="text-[#777777]">
                          General Partner · Global Brain
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">Takashi Kitao</span>
                        <span className="text-[#777777]">
                          Partner/Director · Cyber Agent Capital
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          Hideyuki Ebihara
                        </span>
                        <span className="text-[#777777]">
                          Partner · PKSHA CAPITAL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-80 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[310px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    16:00~17:20
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[#00E300]  font-medium">
                      SBVA Portfolio Pitching
                    </span>
                    <span className="text-2xl">SBVA 포트폴리오 7개사 피칭</span>
                  </div>
                  <div>
                    <div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          SBVA 포트폴리오 7개사 대표
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="relative -left-1.5 top-[400px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[390px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    17:20~17:30
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[#00E300]  font-medium">
                      Closing Remarks{" "}
                    </span>
                    <span className="text-2xl">SBVA의 일본 투자 포부</span>
                  </div>
                  <div>
                    <div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">JP Lee</span>{" "}
                        <span className="text-[#777777]">
                          CEO & Managing Partner · SBVA{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-[450px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[440px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    17:40~20:00
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-2xl">Dinner & Networking</span>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-[490px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[480px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-48">
                    20:00~22:00
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-2xl">After Party</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* FadeInSection: 세 번째 페이지 - 높이 2310px */}
      <FadeInSection>
        <div
          id="speakers-panels"
          className="h-[2310px]  bg-green-200 flex items-center justify-center"
        >
          <h2 className="text-2xl">
            {language === "KR"
              ? "연사 및 패널 섹션"
              : "スピーカー&パネルセクション"}
          </h2>
        </div>
      </FadeInSection>

      {/* FadeInSection: 네 번째 페이지 - 높이 1168px */}
      <FadeInSection>
        <div
          id="portfolio-pitching"
          className="h-[1168px] w-[360px] lg:w-[1100px] gap-5 flex flex-col items-start justify-center"
        >
          <h2 className="text-3xl font-bold lg:text-6xl pb-5 pl-3 text-white">
            SBVA PORTFOLIO PITCHING{" "}
          </h2>
          <SliderComponent />
        </div>
      </FadeInSection>

      {/* FadeInSection: 다섯 번째 페이지 - 높이 1484px */}
      <FadeInSection>
        <div
          id="about-us"
          className="h-[1484px] bg-slate-200 flex items-center justify-center"
        >
          <h2 className="text-2xl">
            {language === "KR"
              ? "회사 소개 섹션"
              : "スピーカー&パネルセクション"}
          </h2>
        </div>
      </FadeInSection>
    </div>
  );
};

export default App;
