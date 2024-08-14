import React from "react";
import { scroller } from "react-scroll";
import { useLanguage } from "../contexts/LanguageContext"; // 추가된 코드

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage(); // 추가된 코드

  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "program",
        "speakers-panels",
        "portfolio-pitching",
        "about-us",
      ];
      let activeId: string | null = null;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            activeId = id;
            break;
          }
        }
      }
      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -headerHeight / 2, // Adjust this value to center the section properly
    });
  };

  const headerHeight = 80; // Adjust this height based on your header's height

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow-md z-50">
      <div className="flex w-full h-20 md:h-24 max-w-[1520px] px-[50px] mx-auto items-center justify-between lg:whitespace-nowrap">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <a href="#home">SBVA</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-[60px] md:whitespace-nowrap">
          <button
            onClick={() => scrollToSection("overview")}
            className={`text-[18px] font-medium ${
              activeSection === "overview"
                ? "text-[#00E300]"
                : activeSection === null
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } cursor-pointer hover:text-[#00E300]`}
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("program")}
            className={`text-[18px] font-medium ${
              activeSection === "program"
                ? "text-[#00E300]"
                : activeSection === null
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } cursor-pointer hover:text-[#00E300]`}
          >
            Program
          </button>
          <button
            onClick={() => scrollToSection("speakers-panels")}
            className={`text-[18px] font-medium ${
              activeSection === "speakers-panels"
                ? "text-[#00E300]"
                : activeSection === null
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } cursor-pointer hover:text-[#00E300]`}
          >
            Speakers & Panels
          </button>
          <button
            onClick={() => scrollToSection("portfolio-pitching")}
            className={`text-[18px] font-medium ${
              activeSection === "portfolio-pitching"
                ? "text-[#00E300]"
                : activeSection === null
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } cursor-pointer hover:text-[#00E300]`}
          >
            Portfolio Pitching
          </button>
          <button
            onClick={() => scrollToSection("about-us")}
            className={`text-[18px] font-medium ${
              activeSection === "about-us"
                ? "text-[#00E300]"
                : activeSection === null
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } cursor-pointer hover:text-[#00E300]`}
          >
            About Us
          </button>
        </nav>

        {/* Language Switch (visible on md and up) */}
        <div className="hidden lg:flex items-center space-x-4 lg:whitespace-nowrap">
          <button
            className={`text-[18px] font-medium ${
              language === "KR" ? "text-white" : "text-gray-400"
            } hover:text-white`}
            onClick={() => setLanguage("KR")}
          >
            KR
          </button>
          <span className="text-gray-400 text-[18px] font-medium">|</span>
          <button
            className={`text-[18px] font-medium ${
              language === "JP" ? "text-white" : "text-gray-400"
            } hover:text-white`}
            onClick={() => setLanguage("JP")}
          >
            JP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
