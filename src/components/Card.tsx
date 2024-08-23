import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface CardProps {
  title: string;
  image: string;
  descriptionkr: string;
  descriptionjp: string;
  url: string;
}
const Card: React.FC<CardProps> = ({
  title,
  image,
  descriptionkr,
  descriptionjp,
  url,
}) => {
  const { language } = useLanguage(); // 컨텍스트에서 현재 언어를 가져옵니다.

  // 언어에 따라 설명을 선택합니다.
  const description = language === "JP" ? descriptionjp : descriptionkr;
  return (
    <div className="relative flex flex-col w-[300px] xl:w-[263px] h-[380px] bg-[#1F1F1F] border-2 border-transparent hover:border-[#444444] group">
      {/* 상단 이미지 영역 */}
      <div className="h-[140px] bg-[#171717] flex justify-center items-center">
        <img
          src={require(`../assets/${image}`)}
          alt="Card Image"
          className="object-cover "
        />
      </div>

      {/* 하단 콘텐츠 영역 */}
      <div className="flex flex-col pl-5 py-4 flex-grow text-white space-y-3">
        <span className="text-[13px] xl:text-[14px] font-normal text-[#979797]">
          {title}
        </span>
        <p
          dangerouslySetInnerHTML={{
            __html: description.replaceAll("^", "").replaceAll("+", "<br />"),
          }}
          className={`font-normal hidden xl:block text-white ${
            language === "KR" ? "" : "font-meiryo"
          }`}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: description.replaceAll("+", "").replaceAll("^", "<br />"),
          }}
          className={`font-normal block xl:hidden text-white ${
            language === "KR" ? "" : "font-meiryo"
          }`}
        />

        {/* 버튼 */}
        <button className="absolute bottom-4 left-2 p-2 rounded-full text-[#979797] group-hover:text-[#00E300] duration-300 flex items-center justify-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor" // 이 속성으로 색상을 조절할 수 있습니다.
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              window.open(url, "_blank"); // Replace with your desired URL
            }}
          >
            <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
// src/components/Card.tsx
