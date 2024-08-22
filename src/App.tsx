import React from "react";
import Header from "./components/Header";
import FadeInSection from "./components/FadeInSection";
import { useLanguage } from "./contexts/LanguageContext"; // 추가된 코드
import VerticalTimeline from "./components/VerticalTimeline";
import TimelineItem from "./components/TimelineItem";
import SliderComponent from "./components/SliderComponent";
import SpeakersAndPanels from "./components/SpeakersPanels";

const App: React.FC = () => {
  const { language } = useLanguage(); // 추가된 코드
  return (
    <div className="App bg-black font-sans">
      {/* Header */}
      <Header />
      <div className="block h-20 md:h-24"></div>
      <div className="relative flex flex-col h-[580px] lg:h-[768px] xl:h-[800px] items-center justify-center overflow-hidden font-poppins">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false} // This ensures that the player controls are removed
        >
          <source src={require("./assets/video.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* 중앙에 배치된 텍스트 */}
        <div className="relative z-10 text-center flex flex-col text-[66px] lg:text-[70px] test:text-[120px] font-bold items-center justify-center text-white leading-80 lg:leading-[90px] test:leading-[170px]">
          <span>2024</span>
          <h1 className="w-3/4 lg:w-full mb-4 text-[#00E300] leading-80">
            SBVA TOKYO FORUM
          </h1>
        </div>
        <div className="relative z-20 hidden lg:block pt-10 text-white text-2xl text-center font-normal">
          <p>A PRIVATE EVENT HOSTED BY SBVA TO UNDERSTAND</p>
          <p>THE JAPANESE STARTUP ECOSYSTEM</p>
        </div>
        <div className="absolute bottom-4 text-center pb-4 w-full lg:hidden">
          <span className="text-white text-sm ">SCROLL</span>
        </div>
      </div>
      {/* FadeInSection: 첫 번째 페이지 - 높이 1579px */}
      <FadeInSection>
        <div
          id="OVERVIEW"
          //4 페이지
          className="h-fit w-full lg:w-[1100px] xl:w-[1100px] flex flex-col items-center justify-start py-[120px] lg:pb-[150px] xl:pb-[250px]  xl:py-[150px]"
        >
          <div className="px-5 lg:px-0 w-full">
            <h2 className="text-3xl relative lg:text-6xl text-white font-bold text-left w-full pb-[50px] lg:pb-[80px] font-poppins">
              OVERVIEW
            </h2>
            <div className="text-white font-normal text-lg lg:text-[22px]  flex flex-col   space-y-7">
              <div className="leading-[26px] lg:leading-[33px]">
                {" "}
                {language === "KR"
                  ? " 2024 Tokyo Forum은 일본 스타트업 생태계에 대한 심도 있는 이해를 돕고,"
                  : "「2024 Tokyo Forum」は、日本のスタートアップエコシステムに対する深い理解を促進し、"}
                <span className="text-[#00E300] ">
                  {language === "KR" ? (
                    <>
                      <br className="hidden lg:block" />
                      국내 유망 스타트업과 일본 굴지의 벤처캐피털 및 기업 간
                      네트워킹을 제공하는 <br className="hidden lg:block" />
                      행사입니다.
                    </>
                  ) : (
                    <>
                      <br className="hidden lg:block" />
                      &nbsp;韓国の有望なスタートアップと日本の著名なベンチャーキャピタルや企業間の
                      <br className="hidden lg:block" />
                      ネットワーキングの場を提供するために企画されました。
                    </>
                  )}
                </span>
              </div>
              <div className="leading-[26px] lg:leading-[33px]">
                {language === "KR" ? (
                  <>
                    한일 스타트업 및 벤처투자 산업 전반을 아우르는 실질적인
                    교류와 기회의 장을 <br className="hidden lg:block" />
                    지향하고자 양국의 훌륭한 창업자, 투자자 등 150여 분을 한정해
                    초대드리오니
                    <br className="hidden lg:block" />
                    많은 관심과 참여를 부탁드립니다.
                  </>
                ) : (
                  <>
                    本イベントは、日韓のスタートアップおよびベンチャー投資産業における実質的な交流と
                    <br className="hidden lg:block" />
                    協業機会の創出を目指し、両国の優れた創業者や投資家、業界専門家など、
                    <br className="hidden lg:block" />
                    約150名を限定してお招きいたします。
                    <br className="hidden lg:block" />
                    ご多忙のところ恐縮ではございますが、ぜひご参加いただけますようお願い申し上げます。
                  </>
                )}
              </div>
            </div>
          </div>{" "}
          <div className="w-full overflow-hidden mt-[50px] lg:mt-[80px] ">
            <img
              src={require("./assets/img.png")}
              alt="Overview Image"
              className="w-full h-[214px] sm:h-full object-cover"
            />
          </div>
          <div className="w-full mt-[50px] lg:mt-[80px] text-white px-5 lg:px-0">
            <table className="w-full relative right-14 text-lg lg:text-[22px] hidden lg:table font-normal ">
              <tbody>
                <tr className="relative">
                  <td
                    className={`py-2 w-fit relative text-end pr-6 ${
                      language === "KR" ? "" : "w-36"
                    }`}
                  >
                    {language === "KR" ? "행사명" : "イベント名"}
                  </td>
                  <td className="relative pl-[30px]">
                    <span>2024 SBVA Tokyo Forum</span>
                    <div className="absolute inset-y-0 left-0 w-px bg-white bg-opacity-20"></div>
                  </td>
                </tr>
                <tr className="relative ">
                  <td className="py-2 w-fit text-end pr-6">
                    {" "}
                    {language === "KR" ? "일시" : "開催日時"}
                  </td>
                  <td className="relative pl-[30px]">
                    <span>
                      {language === "KR"
                        ? "2024년 10월 2일 (수) 14시~20시"
                        : "2024年 10月 2日 (水) 14:00～20:00"}
                    </span>
                    <div className="absolute inset-y-0 left-0 w-px bg-white bg-opacity-20"></div>
                  </td>
                </tr>
                <tr className="relative ">
                  <td className="py-2  text-end pr-6 ">
                    {" "}
                    {language === "KR" ? "장소" : "開催場所"}
                  </td>
                  <td className="relative pl-[30px]">
                    <div
                      className="flex w-fit items-center space-x-2  group cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://catstreet.trunk-hotel.com/access/",
                          "_blank"
                        ); // Replace with your desired URL
                      }}
                    >
                      <span>
                        {" "}
                        {language === "KR"
                          ? "도쿄 시부야 트렁크 호텔"
                          : "TRUNK HOTEL、渋谷区、東京"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-white group-hover:fill-[#00E300]"
                      >
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                      </svg>
                    </div>

                    <div className="absolute inset-y-0 left-0 w-px bg-white bg-opacity-20"></div>
                  </td>
                </tr>
                <tr className="relative">
                  <td className=" align-top  text-end pr-6 ">
                    {" "}
                    {language === "KR" ? "목적" : "目的"}
                  </td>
                  <td className="relative pl-[30px]">
                    <span className="block ">
                      {language === "KR" ? (
                        <>
                          일본 스타트업 생태계에 대한 이해 및 양국 스타트업, VC,{" "}
                          <br />
                          기업 간 네트워킹
                        </>
                      ) : (
                        <>
                          日本のスタートアップエコシステムに対する理解促進および
                          <br />
                          日韓のスタートアップ、VC、 企業間のネットワーキング
                        </>
                      )}
                    </span>
                    <div className="absolute top-0 left-0 w-px h-full bg-white bg-opacity-20"></div>
                  </td>
                </tr>
                <tr className="relative ">
                  <td className="py-2  text-end pr-6 ">
                    {" "}
                    {language === "KR" ? "주최" : "主催"}
                  </td>
                  <td className="relative pl-[30px]">
                    <span>
                      <svg
                        width="79"
                        height="14"
                        viewBox="0 0 79 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_265_125)">
                          <path
                            d="M58.3754 0L50.5621 10.8665L42.7487 0H39.3408L49.4075 14H51.7167L61.7833 0H58.3754Z"
                            fill="white"
                          />
                          <path
                            d="M68.1688 0H65.859L55.793 14H59.2009L67.0142 3.13355L74.8276 14H78.2355L68.1688 0Z"
                            fill="white"
                          />
                          <path
                            d="M38.0578 6.68468C38.4929 6.07039 38.7544 5.27704 38.7544 4.402V3.78182C38.7544 2.57872 38.2616 1.53116 37.5019 0.889418C36.7416 0.248985 35.8052 0 34.922 0H20.5176L20.5307 14H35.4648C36.348 14 37.2844 13.751 38.044 13.1106C38.8037 12.4695 39.2959 11.4213 39.2959 10.2182L39.2827 9.55291C39.2827 8.36419 38.8024 7.32708 38.0578 6.68403V6.68468ZM34.575 2.27484C34.987 2.27484 35.359 2.40032 35.5857 2.59114C35.8111 2.78131 35.9806 3.02049 35.9806 3.64328V4.46996C35.9806 5.09275 35.8104 5.33193 35.5857 5.52276C35.359 5.71293 34.9568 5.83905 34.5441 5.83905H23.2887V2.27419H34.575V2.27484ZM36.1278 11.4089C35.9011 11.5997 35.5292 11.7258 35.1172 11.7258H23.2874V8.11455H35.104C35.5154 8.11455 35.888 8.24002 36.114 8.43085C36.3401 8.62167 36.509 8.86085 36.509 9.48364L36.5221 10.3554C36.5221 10.9782 36.3526 11.2174 36.1272 11.4076L36.1278 11.4089Z"
                            fill="white"
                          />
                          <path
                            d="M17.3944 6.61476C16.6347 5.97367 15.6977 5.72469 14.8151 5.72469H4.17741C3.76604 5.72469 3.39345 5.59856 3.16739 5.40839C2.94134 5.21822 2.7718 4.97839 2.7718 4.35625V3.64459C2.7718 3.0218 2.942 2.78262 3.16739 2.59245C3.39345 2.40162 3.76604 2.2755 4.17741 2.2755H14.0417C14.4537 2.2755 14.8256 2.40162 15.0524 2.59245C15.2475 2.75713 15.3993 2.96233 15.4368 3.41717H18.2007C18.1113 2.3696 17.6487 1.46515 16.9679 0.890071C16.2076 0.248985 15.2705 0 14.388 0H3.8311C2.94791 0 2.01149 0.248985 1.25184 0.890071C0.492195 1.5305 0 2.57938 0 3.78248V4.319H0.00131427C0.0282568 5.47962 0.51388 6.48733 1.25184 7.11077C2.01215 7.75186 2.94857 8.00019 3.8311 8.00019H14.4682C14.8802 8.00019 15.2521 8.12631 15.4788 8.31648C15.6707 8.47921 15.8225 8.67722 15.8626 9.11768V10.3567C15.8626 10.9795 15.6931 11.2187 15.4677 11.4089C15.2416 11.599 14.869 11.7252 14.457 11.7252H4.17741C3.76604 11.7252 3.39345 11.599 3.16739 11.4089C2.94134 11.2187 2.7718 10.9789 2.7718 10.3567V9.92279H0.0105142L0 10.2182C0 11.4213 0.492195 12.4695 1.25184 13.1106C2.01215 13.7517 2.94857 14 3.8311 14H14.804C15.6865 14 16.6236 13.7517 17.3826 13.1106C18.1422 12.4695 18.616 11.4213 18.6351 10.2182L18.6462 9.50586C18.6462 8.30341 18.154 7.25519 17.3937 6.61411L17.3944 6.61476Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_265_125">
                            <rect width="78.2353" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="absolute inset-y-0 left-0 w-px bg-white bg-opacity-20"></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-col space-y-3 text-lg lg:hidden ">
              <div className="flex flex-col lg:flex-row  ">
                <span className="font-medium w-full text-sm text-[#777777]">
                  {language === "KR" ? "행사명" : "イベント名"}
                </span>
                <span className="w-full text-lg font-normal">
                  2024 SBVA Tokyo Forum
                </span>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <span className="font-medium w-full text-sm text-[#777777]">
                  {language === "KR" ? "일시" : "開催日時"}
                </span>
                <span className="w-full text-lg font-normal">
                  {language === "KR"
                    ? "2024년 10월 2일 (수) 14시~20시"
                    : "2024年 10月 2日 (水) 14:00～20:00"}
                </span>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <span className="font-medium w-full text-sm text-[#777777]">
                  {language === "KR" ? "장소" : "開催場所"}
                </span>
                <div className="flex w-fit justify-center text-center items-center cursor-pointer group">
                  <span className="w-full text-lg font-normal pr-1">
                    {language === "KR"
                      ? "도쿄 시부야 트렁크 호텔"
                      : "TRUNK HOTEL、渋谷区、東京"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white group-hover:fill-[#00E300]"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <span className="font-medium w-full text-sm text-[#777777]">
                  {language === "KR" ? "목적" : "目的"}
                </span>
                <span className="w-full text-lg font-normal">
                  {language === "KR"
                    ? "일본 스타트업 생태계에 대한 이해 및 양국 스타트업, VC, 기업 간 네트워킹"
                    : "日本のスタートアップエコシステムに対する理解促進および日韓のスタートアップ、VC、企業間のネットワーキング"}
                </span>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <span className="font-medium w-full text-sm text-[#777777]">
                  {language === "KR" ? "주최" : "主催"}
                </span>
                <span className="w-full pt-2">
                  {" "}
                  <svg
                    width="79"
                    height="14"
                    viewBox="0 0 79 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_265_125)">
                      <path
                        d="M58.3754 0L50.5621 10.8665L42.7487 0H39.3408L49.4075 14H51.7167L61.7833 0H58.3754Z"
                        fill="white"
                      />
                      <path
                        d="M68.1688 0H65.859L55.793 14H59.2009L67.0142 3.13355L74.8276 14H78.2355L68.1688 0Z"
                        fill="white"
                      />
                      <path
                        d="M38.0578 6.68468C38.4929 6.07039 38.7544 5.27704 38.7544 4.402V3.78182C38.7544 2.57872 38.2616 1.53116 37.5019 0.889418C36.7416 0.248985 35.8052 0 34.922 0H20.5176L20.5307 14H35.4648C36.348 14 37.2844 13.751 38.044 13.1106C38.8037 12.4695 39.2959 11.4213 39.2959 10.2182L39.2827 9.55291C39.2827 8.36419 38.8024 7.32708 38.0578 6.68403V6.68468ZM34.575 2.27484C34.987 2.27484 35.359 2.40032 35.5857 2.59114C35.8111 2.78131 35.9806 3.02049 35.9806 3.64328V4.46996C35.9806 5.09275 35.8104 5.33193 35.5857 5.52276C35.359 5.71293 34.9568 5.83905 34.5441 5.83905H23.2887V2.27419H34.575V2.27484ZM36.1278 11.4089C35.9011 11.5997 35.5292 11.7258 35.1172 11.7258H23.2874V8.11455H35.104C35.5154 8.11455 35.888 8.24002 36.114 8.43085C36.3401 8.62167 36.509 8.86085 36.509 9.48364L36.5221 10.3554C36.5221 10.9782 36.3526 11.2174 36.1272 11.4076L36.1278 11.4089Z"
                        fill="white"
                      />
                      <path
                        d="M17.3944 6.61476C16.6347 5.97367 15.6977 5.72469 14.8151 5.72469H4.17741C3.76604 5.72469 3.39345 5.59856 3.16739 5.40839C2.94134 5.21822 2.7718 4.97839 2.7718 4.35625V3.64459C2.7718 3.0218 2.942 2.78262 3.16739 2.59245C3.39345 2.40162 3.76604 2.2755 4.17741 2.2755H14.0417C14.4537 2.2755 14.8256 2.40162 15.0524 2.59245C15.2475 2.75713 15.3993 2.96233 15.4368 3.41717H18.2007C18.1113 2.3696 17.6487 1.46515 16.9679 0.890071C16.2076 0.248985 15.2705 0 14.388 0H3.8311C2.94791 0 2.01149 0.248985 1.25184 0.890071C0.492195 1.5305 0 2.57938 0 3.78248V4.319H0.00131427C0.0282568 5.47962 0.51388 6.48733 1.25184 7.11077C2.01215 7.75186 2.94857 8.00019 3.8311 8.00019H14.4682C14.8802 8.00019 15.2521 8.12631 15.4788 8.31648C15.6707 8.47921 15.8225 8.67722 15.8626 9.11768V10.3567C15.8626 10.9795 15.6931 11.2187 15.4677 11.4089C15.2416 11.599 14.869 11.7252 14.457 11.7252H4.17741C3.76604 11.7252 3.39345 11.599 3.16739 11.4089C2.94134 11.2187 2.7718 10.9789 2.7718 10.3567V9.92279H0.0105142L0 10.2182C0 11.4213 0.492195 12.4695 1.25184 13.1106C2.01215 13.7517 2.94857 14 3.8311 14H14.804C15.6865 14 16.6236 13.7517 17.3826 13.1106C18.1422 12.4695 18.616 11.4213 18.6351 10.2182L18.6462 9.50586C18.6462 8.30341 18.154 7.25519 17.3937 6.61411L17.3944 6.61476Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_265_125">
                        <rect width="78.2353" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full px-4 flex justify-center pt-[70px] lg:pt-20 ">
            <a
              className="flex w-full lg:w-fit justify-center px-[16px] py-5 lg:py-[50px] lg:px-[80px] text-white flex-col justify-center items-center font-semibold text-2xl lg:text-[34px] xl:text-[38px] border-2  border-[#00E300] hover:bg-[#00E300] cursor-pointer hover:text-black"
              onClick={() => {
                window.open("https://forms.office.com/r/pW3HtB9qn1", "_blank"); // Replace with your desired URL
              }}
            >
              <span className="lg:hidden">2024 SBVA Tokyo Forum</span>
              <span className="hidden lg:block">
                2024 SBVA Tokyo Forum{" "}
                {language === "KR" ? "신청하기" : "お申し込みはこちら"}
              </span>
              <div className="lg:hidden">
                {language === "KR" ? "신청하기" : "お申し込みはこちら"}
              </div>
            </a>
          </div>
        </div>
      </FadeInSection>
      {/* FadeInSection: 두 번째 페이지 - 높이 2318px */}
      <FadeInSection>
        <div
          id="PROGRAM"
          className={`w-full px-5 lg:px-0 lg:w-[1100px] flex flex-col items-center justify-start lg:mb-32 ${
            language === "KR"
              ? "h-[2550px] lg:h-[2430px]"
              : "h-[2650px] lg:h-[2510px] "
          }`}
        >
          <h2 className="pl-5 lg:pl-0 text-3xl relative lg:text-6xl text-white font-bold text-left w-[360px] lg:w-full lg:pb-[80px] pb-[50px] font-poppins">
            PROGRAM
          </h2>

          <div
            className={`border-l-[1px] relative border-white border-opacity-20  mt-0 pt-0 space-y-12 text-white ${
              language === "KR"
                ? "right-0 lg:right-8 h-[2250px] lg:h-[2180px]"
                : "lg:right-3 h-[2380px] lg:h-[2270px]"
            }`}
          >
            <div className="relative ">
              <div className="absolute -left-1.5 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-[22px] ">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-[170px] font-normal lg:text-xl">
                    14:00~14:15
                  </span>
                  <div className="flex flex-col relative lg:bottom-14">
                    <span className="text-[#00E300] font-normal lg:text-xl">
                      Opening Remarks
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2">
                      {language === "KR" ? (
                        <>
                          SBVA와 SBVA의 투자 전략에
                          <br className="lg:hidden" />
                          대한 이해
                        </>
                      ) : (
                        <>SBVAとSBVAの投資戦略</>
                      )}
                    </span>
                  </div>
                  <div className="relative lg:bottom-12 lg:text-xl">
                    <div>
                      <span>JP Lee</span>
                      <span className="text-[#777777] text-sm relative lg:text-base">
                        &nbsp; &nbsp; CEO/Managing Partner · SBVA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-20 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[70px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-44 font-normal lg:text-xl">
                    14:15~14:40
                  </span>
                  <div className="flex flex-col relative lg:bottom-[58px]">
                    <span className="text-[#00E300]  font-normal lg:text-xl">
                      Fireside Chat
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2">
                      {" "}
                      {language === "KR" ? (
                        <>
                          SBVA의 성공적인 일본 투자 <br className="lg:hidden" />{" "}
                          사례 소개
                        </>
                      ) : (
                        <>
                          日本におけるSBVAの投資 <br className="lg:hidden" />
                          成功事例
                        </>
                      )}
                    </span>
                  </div>
                  <div>
                    <div className="relative lg:bottom-12 lg:text-xl flex flex-col gap-2">
                      <div>
                        <span>JP Lee</span>
                        <span className="text-[#777777] text-sm relative lg:text-base">
                          &nbsp; &nbsp; CEO/Managing Partner · SBVA
                        </span>
                      </div>
                      <div>
                        <span>
                          {language === "KR" ? "Uchiyama" : "内山 雄太"}
                        </span>
                        <span className="text-[#777777] text-sm relative lg:text-base">
                          &nbsp; &nbsp; CEO · SODA
                        </span>
                      </div>
                      <div>
                        <span>Youngki Kim</span>
                        <span className="text-[#777777] text-sm relative lg:text-base">
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
                  <span className="relative bottom-2 lg:right-44 font-normal lg:text-xl">
                    14:50~15:10
                  </span>
                  <div className="flex flex-col relative lg:bottom-[58px]">
                    <span className="text-[#00E300]  font-normal lg:text-xl">
                      Keynote I
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2">
                      {language === "KR" ? (
                        <>
                          소프트뱅크가 기대하는
                          <br className="lg:hidden" /> 스타트업과의 미래 협력
                          방향
                        </>
                      ) : (
                        <span className="lg:leading-[33px] ">
                          ソフトバンクが期待する
                          <br /> スタートアップとの理想
                          <br className="lg:hidden" />
                          的な協業
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="relative lg:bottom-12 lg:text-xl">
                    <div className="flex">
                      <div className="flex gap-3 ">
                        <span className="whitespace-nowrap">
                          {language === "KR" ? "Miki Fukazawa " : "深澤 実樹"}
                        </span>
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
                          VP/Head of Alliance &<br className="lg:hidden" />{" "}
                          Investment Strategy Div · SoftBank
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-60 bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[230px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-44 lg:text-xl">
                    15:10~16:00
                  </span>
                  <div className="flex flex-col relative lg:bottom-[58px]">
                    <span className="text-[#00E300]  font-normal lg:text-xl">
                      Panel Discussion
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2">
                      {language === "KR" ? (
                        <>
                          일본 현지 VC를 통해 듣는
                          <br className="lg:hidden" /> 업계 동향, 투자/Exit 전략
                        </>
                      ) : (
                        <span className="lg:leading-[36px]">
                          日本現地のVCが語る業界 <br className="lg:hidden" />
                          の最新動向や <br className="hidden lg:block" />{" "}
                          投資および
                          <br className="lg:hidden" />
                          Exit戦略
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="relative lg:bottom-12 lg:text-xl">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap text-[#00E300] text-sm">
                          {language === "KR" ? "Panels" : "スピーカー"}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          {language === "KR"
                            ? "Kentaro Sakakibara"
                            : "榊原 健太郎"}
                        </span>
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
                          CEO · SAMURAI <br className="lg:hidden" /> INCUBATE
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          {language === "KR" ? "Hogil Doh" : "都 虎吉"}
                        </span>
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
                          General Partner · Global Brain
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          {language === "KR" ? "Takashi Kitao" : "北尾 崇"}
                        </span>
                        <span className="text-[#777777] text-sm relative top-1  lg:text-base">
                          Partner/Director · <br className="lg:hidden" />
                          Cyber Agent Capital
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          {language === "KR" ? "Tomoko Numata" : "沼田 朋子"}
                        </span>
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
                          Chief Capitalist · JAFCO
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap text-[#00E300] text-sm">
                          {" "}
                          {language === "KR" ? "Moderator" : "モデレーター"}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">
                          {" "}
                          {language === "KR"
                            ? "Hideyuki Ebihara"
                            : "海老原 秀幸"}
                        </span>
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
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
                  <span className="relative bottom-2 lg:right-44 font-normal lg:text-xl">
                    16:10~16:30
                  </span>
                  <div className="flex flex-col relative lg:bottom-[58px] ">
                    <span className="text-[#00E300] font-normal lg:text-xl">
                      Keynote II
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2">
                      TBD
                    </span>
                  </div>
                  <div className="relative lg:bottom-12 lg:text-xl">
                    <div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">Taizo Son</span>{" "}
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
                          Chairman · Mistletoe
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="relative -left-1.5 top-[390px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[380px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-44 font-normal lg:text-xl">
                    16:30~17:50
                  </span>
                  <div className="flex flex-col relative lg:bottom-[58px] ">
                    <span className="text-[#00E300] font-normal lg:text-xl">
                      SBVA Portfolio Pitching
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2">
                      {language === "KR" ? (
                        <>SBVA 포트폴리오 8개사 피칭</>
                      ) : (
                        <>
                          SBVAが選定したポートフォリ
                          <br className="lg:hidden" />オ 企業 ８社のピッチング{" "}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="relative lg:bottom-12 lg:text-xl">
                    <div>
                      <div className="flex gap-3">
                        {" "}
                        <span className="whitespace-nowrap">
                          {language === "KR"
                            ? "국내 포트폴리오 8개사"
                            : "韓国生まれのスタートアップ企業８社"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="relative -left-1.5 top-[460px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[450px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-44 lg:text-xl">
                    17:50~18:00
                  </span>
                  <div className="flex flex-col relative lg:bottom-[58px]">
                    <span className="text-[#00E300]  font-normal lg:text-xl">
                      Closing Remarks{" "}
                    </span>
                    <span className="text-2xl lg:text-[30px] font-semibold pt-2 ">
                      {language === "KR" ? (
                        <>SBVA의 일본 투자 포부</>
                      ) : (
                        <>
                          SBVA <br className="lg:hidden" />
                          の抱負とご協力のお願い
                        </>
                      )}
                    </span>
                  </div>
                  <div className="relative lg:bottom-12 lg:text-xl">
                    <div>
                      <div className="flex gap-3">
                        <span className="whitespace-nowrap">JP Lee</span>{" "}
                        <span className="text-[#777777] text-sm relative top-1 lg:text-base">
                          CEO/Managing Partner · SBVA{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-[530px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[520px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-44 font-normal lg:text-xl">
                    18:00~20:00
                  </span>
                  <div className="flex flex-col relative lg:bottom-[60px]">
                    <span className="text-2xl w-full  lg:text-[30px] font-semibold">
                      {language === "KR" ? (
                        <>Dinner & Networking</>
                      ) : (
                        <>
                          ディナー＆
                          <br className="lg:hidden" />
                          ネットワーキング
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative -left-1.5 top-[600px] bg-[#00E300] h-3 w-3 rounded-full "></div>
              <div className="pl-7 relative top-[590px]">
                <div className="flex flex-col space-y-5">
                  <span className="relative bottom-2 lg:right-44 font-normal lg:text-xl">
                    20:00~22:00
                  </span>
                  <div className="flex flex-col relative lg:bottom-[60px]">
                    <span className="flex gap-4 items-end text-2xl lg:text-[30px] font-semibold">
                      {language === "KR" ? "After Party" : "アフターパーティー"}
                      <p className="text-base relative top-1 lg:text-xl font-normal ">
                        (optional)
                      </p>
                    </span>
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
          id="SPEAKERS & PANELS"
          className="h-full w-full lg:w-[1100px] flex flex-col items-center overflow-hidden lg:pt-[30px]  justify-start "
        >
          <h2 className="text-3xl relative px-5 lg:px-0  lg:text-6xl text-white font-bold mb-8 text-left w-full pb-3 font-poppins">
            SPEAKERS & PANELS
          </h2>
          <SpeakersAndPanels />
        </div>
      </FadeInSection>
      {/* FadeInSection: 네 번째 페이지 - 높이 1168px */}
      <FadeInSection>
        <div
          id="SBVA PORTFOLIO PITCHING"
          className="h-fit w-full lg:w-[1100px] gap-5 flex flex-col items-center justify-start pt-[120px] lg:pt-[210px] font-poppins"
        >
          <h2 className="text-3xl w-full font-bold lg:text-6xl pb-[50px] pl-5 lg:pl-0 lg:pb-[66px] text-white">
            SBVA PORTFOLIO PITCHING
          </h2>
          <SliderComponent />
        </div>
      </FadeInSection>
      {/* FadeInSection: 다섯 번째 페이지 - 높이 1484px */}
      <FadeInSection>
        <div
          id="ABOUT SBVA"
          className="h-fit lg:h-[1600px] w-full lg:w-[1100px] flex flex-col items-center justify-start pt-[120px] lg:pt-[250px] pb-[120px]"
        >
          <h2 className="text-3xl pl-5 lg:pl-0 lg:pb-[60px] relative lg:text-6xl text-white font-bold mb-8 text-left w-full font-poppins">
            ABOUT SBVA
          </h2>
          <div className="w-screen flex justify-center">
            <div className="relative w-full aspect-video max-w-[1100px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GS8F0r0kI4s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
          <div className="w-full flex items-center px-5 lg:px-0  py-12 justify-start">
            <div className="w-20 border-t-4 border-[#00E300]"></div>
          </div>
          <div className="w-full text-white px-5 lg:px-0  text-lg lg:text-[22px] font-normal flex flex-col space-y-10">
            <span className="leading-[26px] lg:leading-[33px]">
              {language === "KR" ? (
                <>
                  SBVA는 2000년 소프트뱅크그룹(SoftBank Group) 산하의
                  창업투자회사인 <br className="hidden lg:block" />
                  소프트뱅크벤처스로 한국에 설립돼 국내외 다양한 스타트업에
                  투자해 오고 있습니다.
                </>
              ) : (
                <>
                  SBVAは((旧) ソフトバンクベンチャーズアジア
                  )、2000年にソフトバンクグループ傘下のベンチャー{" "}
                  <br className="hidden lg:block" />
                  キャピタルとして韓国に設立され、グローバルのさまざまなスタートアップに投資を行ってきました。
                </>
              )}
            </span>{" "}
            <span className="leading-[26px] lg:leading-[33px]">
              {" "}
              {language === "KR" ? (
                <>
                  2023년 6월에 손태장 미슬토 회장과 이준표 SBVA 대표, 타이라
                  아츠시미슬토 대표가 공동으로
                  <br className="hidden lg:block" /> 설립한 싱가포르 기반의 투자
                  회사디에지오브(The Edgeof)에 인수돼 독립하였으며,{" "}
                  <br className="hidden lg:block" />약 2.5조원 규모의 자산을
                  운용하고 있습니다.
                </>
              ) : (
                <>
                  2023年6月には、「ミスルト(Mistletoe)」の孫泰蔵会長と大蘿淳司Managing
                  Director、そしてSBVAの <br className="hidden lg:block" />
                  CEOであるJP
                  Leeが共同で設立したシンガポール拠点の投資会社「ディ・エッジ・オブ(The
                  Edgeof)」 <br className="hidden lg:block" />
                  の傘下として独立し、
                </>
              )}
            </span>{" "}
            <span className="leading-[26px] lg:leading-[33px]">
              {language === "KR" ? (
                <>
                  현재 서울을 포함해 북경, 싱가포르, 샌프란시스코, 이스라엘 등에
                  지사를 두고 <br className="hidden lg:block" />
                  100여 개가 넘는 포트폴리오 회사를 육성하며 글로벌 투자 활동을
                  이어오고 있습니다.
                </>
              ) : (
                <>
                  現在はソウルをはじめ、北京、シンガポール、サンフランシスコ、イスラエルなどに支社を構え、
                  <br className="hidden lg:block" />
                  100社以上のポートフォリオ企業を育成しながら投資活動を続けています。{" "}
                </>
              )}
            </span>
          </div>
          <div className="w-full flex space-x-1 px-5 lg:px-0 py-10 text-lg font-normal items-center">
            <a
              className="text-white hover:text-[#00E300] fill-[#00E300] hover:fill-white group flex justify-center gap-1 cursor-pointer items-center"
              onClick={() => {
                window.open("https://sbvacorp.com/en", "_blank"); // Replace with your desired URL
              }}
            >
              {language === "KR"
                ? "SBVA 홈페이지 가기"
                : "SBVAのホームページはこちら"}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
              </svg>
            </a>
          </div>{" "}
          <a
            className=" fixed bottom-0 right-0 w-20 h-20 bg-[#181818] text-white fill-white hover:fill-[#00E300] shadow-lg flex items-center justify-center space-x-2 cursor-pointer hidden xl:flex "
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z" />
            </svg>
          </a>
        </div>
      </FadeInSection>
      <footer className="w-full h-[140px] border-t-[1px] xl:py-[55px] border-white border-opacity-20 text-center flex flex-col items-center space-y-5 justify-center text-white text-sm">
        <a
          className=" w-10 h-10 rounded-full bg-[#181818] text-white fill-white hover:fill-[#00E300] shadow-lg flex items-center justify-center space-x-2 cursor-pointer flex xl:hidden"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z" />
          </svg>
        </a>
        <p className="xl:pb-4 font-poppins text-lg font-normal">
          Copyright © 2024 by SBVA. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
