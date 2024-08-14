import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // 한번만 트리거되도록 observer 해제
          }
        });
      },
      { rootMargin: "500px 0px 0px 0px" } // 100px 정도 더 들어온 후에 애니메이션 시작
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex justify-center transition-opacity duration-1000 ease-in-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-50 scale-95"
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
