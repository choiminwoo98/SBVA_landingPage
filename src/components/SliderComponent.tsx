import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useLanguage } from "../contexts/LanguageContext";

const cardData = [
  {
    title: "Content",
    image: "image1.png",
    descriptionkr:
      "Spoon Labs는 라이브 오디오 방송^ 플랫폼 ‘Spoon’과 숏폼 드라마+^ 플랫폼 ‘Vigloo’를 운영합니다.",
    descriptionjp:
      "Spoonは、リアルタイムの +^オーディオ放送プラット+^フォーム「Spoon」と、短尺ドラマ+^プラットフォーム「Vigloo」+^を運営しています。",
    url: "https://company.spoonradio.co/jp/",
  },
  {
    title: "Healthcare",
    image: "image2.png",
    descriptionkr:
      "닥터나우는 원격진료 상담,^+ 처방약 배달, AI 진단 등을 제공+하는 ^디지털 헬스케어 플랫폼+입니다.",
    descriptionjp:
      "ドクターナウは、リモート診療+^相談、処方薬の配達、AI診断+^サービスを提供するデジタル+^ヘルスケアプラットフォームです。",
    url: "https://doctornow.co.jp/ ",
  },
  {
    title: "Enterprise",
    image: "image3.png",
    descriptionkr:
      "업스테이지는 대한민국의 ^대표적인 B2B AI 회사로, ^+LLM(Large Language Model), Document AI, AI교육 서비스를+ ^제공합니다.",
    descriptionjp:
      "Upstageは、法人向けに+^カスタマイズした+^LLM(Large Language Model)+^を提供する韓国一流の^+人工知能企業です。",
    url: "https://www.upstage.ai/",
  },
  {
    title: "Retail",
    image: "image4.png",
    descriptionkr:
      "비주얼은 주얼리 셀러의 +^온라인 기반 브랜드로의 성장을 ^+지원하는 국내 최대 주얼리 ^+플랫폼 ‘아몬즈’를 운영합니다.",
    descriptionjp:
      "Bejewelは、韓国最大の+^ジュエリーに特化した+^Eコマースプラットフォーム^+「アモンズ」を運営しています。",
    url: "https://amondz.jp/",
  },
  {
    title: "Enterprise",
    image: "image5.png",
    descriptionkr:
      "가우디오랩은 뛰어난 오디오+^ 경험을 제공하기 위한 기술 및+^ 솔루션을 개발하는 ^AI/Spatial Audio 전문 기업입니다.",
    descriptionjp:
      "GAUDIO Labは、+^AIを活用し優れた+^オーディオ体験を提供する^+Spatial Audio専門の+^技術会社です。",
    url: "https://www.gaudiolab.com/experience",
  },
  {
    title: "EdTech",
    image: "image6.png",
    descriptionkr:
      "매스프레소는 ^+AI 기반 맞춤형 학습 플랫폼인 ^+‘콴다(QANDA)’를 운영합니다.",
    descriptionjp:
      "MATHPRESSOは、AI技術を^+活用したオンライン^+学習プラットフォーム+^「QANDA」を運営しています。",
    url: "https://qanda.ai/ja",
  },

  {
    title: "Enterprise",
    image: "image7.png",
    descriptionkr:
      "마크비전은 AI 기반 ^온라인 상+ 위조상품 및^ 불법 콘텐츠 +모니터링 ^자동화 서비스를 +제공합니다.",
    descriptionjp:
      "MarqVisionは、AI技術を+^ベースとし、オンライン上の+^偽造品や違法コンテンツの+^自動モニタリングサービスを+^提供しています。",
    url: "https://www.marqvision.com/",
  },
  {
    title: "LegalTech",
    image: "image8.png",
    descriptionkr:
      "로앤컴퍼니는 첨단 기술을 ^통해+ 법률 서비스 플랫폼, ^AI 법률 비서+ 솔루션, 종합 법률 ^정보 검색 +서비스 등을 제공하는 +^리걸테크 기업입니다.",
    descriptionjp:
      "Law＆Companyは、最先端の^+IT技術を活用し、法律相談+^サービスのパラダイムを+^革新している韓国の+^リーガルテック企業です。",
    url: "https://www.lawtalk.is/lawcompany",
  },
];

const SliderComponent: React.FC = () => {
  const { language } = useLanguage();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1280
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderSettings = {
    className: "slider-left",
    arrows: false,
    centerMode: false, // Enable center mode
    slidesToScroll: 1,
    infinite: false,
    slidesToShow: 1.5,
    speed: 500,
    initialSlide: 0, // Set the initial slide to the first one

    responsive: [
      {
        breakpoint: 1480, // Mobile landscape and above
        settings: {
          slidesToShow: 3.4,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1160, // Mobile landscape and above
        settings: {
          slidesToShow: 3.4,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1120, // Mobile landscape and above
        settings: {
          slidesToShow: 3.3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1080, // Mobile landscape and above
        settings: {
          slidesToShow: 3.2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1040, // Mobile landscape and above
        settings: {
          slidesToShow: 3.1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1000, // Mobile landscape and above
        settings: {
          slidesToShow: 3.1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 960, // Mobile landscape and above
        settings: {
          slidesToShow: 2.6,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 920, // Mobile landscape and above
        settings: {
          slidesToShow: 2.5,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 880, // Mobile landscape and above
        settings: {
          slidesToShow: 2.4,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 840, // Mobile landscape and above
        settings: {
          slidesToShow: 2.3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 800, // Mobile landscape and above
        settings: {
          slidesToShow: 2.2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 760, // Mobile landscape and above
        settings: {
          slidesToShow: 2.1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 720, // Mobile portrait and below
        settings: {
          slidesToShow: 1.9,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 680, // Mobile portrait and below
        settings: {
          slidesToShow: 1.8,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 640, // Mobile portrait and below
        settings: {
          slidesToShow: 1.7,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 600, // Mobile portrait and below
        settings: {
          slidesToShow: 1.6,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 560, // Mobile portrait and below
        settings: {
          slidesToShow: 1.5,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 520, // Mobile portrait and below
        settings: {
          slidesToShow: 1.4,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480, // Mobile portrait and below
        settings: {
          slidesToShow: 1.3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 440, // Mobile portrait and below
        settings: {
          slidesToShow: 1.2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 400, // Mobile portrait and below
        settings: {
          slidesToShow: 1.1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="relative w-full">
      {isLargeScreen ? (
        <div className="grid grid-cols-4 gap-5 ">
          {cardData.map((data, index) => (
            <div key={index} className="col-span-1">
              <Card
                title={data.title}
                image={data.image}
                descriptionkr={data.descriptionkr}
                descriptionjp={data.descriptionjp}
                url={data.url}
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
              url={data.url}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderComponent;
