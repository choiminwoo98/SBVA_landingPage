import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useLanguage } from "../contexts/LanguageContext";

const cardData = [
  {
    title: "Content",
    image: "https://via.placeholder.com/260x140.png?text=Image+1",
    descriptionkr: "스푼라디오는 실시간 개인 오디오 방송 플랫폼을 운영합니다.",
    descriptionjp:
      "Spoon Radioは、リアルタイムのオーディオ放送プラットフォームを運営しています.",
  },
  {
    title: "EdTech",
    image: "https://via.placeholder.com/260x140.png?text=Image+2",
    descriptionkr:
      "매스프레소는 개인 맞춤형 학습 플랫폼 ‘QUANDA’를 운영합니다.",
    descriptionjp:
      "MATHPRESSOは、AI技術を活用したオンライン学習プラットフォーム「QUANDA」を運営しています.",
  },
  {
    title: "Enterprise",
    image: "https://via.placeholder.com/260x140.png?text=Image+3",
    descriptionkr:
      "가우디오랩은 뛰어난 오디오 경험을 제공하기 위한 기술 및 솔루션을 개발하는 AI/Spatial Audio 전문 기업입니다.",
    descriptionjp:
      "GAUDI Labは、AIを活用して優れたオーディオ体験を提供するSpatial Audio専門の技術会社です.",
  },
  {
    title: "Enterprise",
    image: "https://via.placeholder.com/260x140.png?text=Image+4",
    descriptionkr:
      "업스테이지는 인공지능 분야의 기업을 지원하기 위한 맞춤형 AI 서비스를 제공합니다.",
    descriptionjp:
      "Upstageは、法人向けにカスタマイズしたLLMを提供する人工知能企業です.",
  },
  {
    title: "Healthcare",
    image: "https://via.placeholder.com/260x140.png?text=Image+5",
    descriptionkr:
      "닥터나우는 국내 원격진료 상담, 처방약 배달, AI 진단 등을 제공하는 디지털 헬스케어 플랫폼입니다.",
    descriptionjp:
      "ドクターナウは、リモート診療相談、処方薬の配達、AI診断などのサービスを提供するデジタルヘルスケアプラットフォームです.",
  },
  {
    title: "LegalTech",
    image: "https://via.placeholder.com/260x140.png?text=Image+6",
    descriptionkr:
      "로앤컴퍼니는 첨단 기술을 통해 법률 서비스의 패러다임을 혁신하는 국내 1위 리걸테크 기업입니다.",
    descriptionjp:
      "Law＆Companyは、最先端のIT技術を活用し、法律相談サービスのパラダイムを革新している韓国のリーガルテック企業です.",
  },
  {
    title: "Retail",
    image: "https://via.placeholder.com/260x140.png?text=Image+7",
    descriptionkr:
      "비주얼은 국내 유일 주얼리 버티컬 커머스 플랫폼 ‘아몬즈‘를 운영합니다.",
    descriptionjp:
      "Bejewelは、韓国唯一のジュエリーに特化したバーティカルコマースプラットフォーム「アモンズ」を運営しています.",
  },
  {
    title: "Retail",
    image: "https://via.placeholder.com/260x140.png?text=Image+8",
    descriptionkr:
      "비주얼은 국내 유일 주얼리 버티컬 커머스 플랫폼 ‘아몬즈‘를 운영합니다.",
    descriptionjp: "説明 8",
  },
];

const SliderComponent: React.FC = () => {
  const { language } = useLanguage();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1680
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1680);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderSettings = {
    className: "center",
    centerMode: false,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    slidesToShow: 1.1,
    speed: 500,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 3.1,
          centerPadding: "60px",
        },
      },
    ],
  };
  return (
    <div className="relative w-full">
      {isLargeScreen ? (
        <div className="grid grid-cols-4 gap-4">
          {cardData.map((data, index) => (
            <div key={index} className="col-span-1">
              <Card
                title={data.title}
                image={data.image}
                descriptionkr={data.descriptionkr}
                descriptionjp={data.descriptionjp}
              />
            </div>
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {cardData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              image={data.image}
              descriptionkr={data.descriptionkr}
              descriptionjp={data.descriptionjp}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderComponent;
