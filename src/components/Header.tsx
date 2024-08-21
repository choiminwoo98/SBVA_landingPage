import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useLanguage } from "../contexts/LanguageContext";

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "OVERVIEW",
        "PROGRAM",
        "SPEAKERS & PANELS",
        "SBVA PORTFOLIO PITCHING",
        "ABOUT SBVA",
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
    const headerHeight = document.querySelector("header")?.offsetHeight || 80;
    scroller.scrollTo(id, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -headerHeight / 2,
    });
    setIsMenuOpen(false); // Close the menu after navigating
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 90) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`text-[18px] font-medium fixed top-0 w-screen left-0 right-0  hadow-md z-50 font-poppins`}
    >
      <div
        className={`flex w-full h-20 md:h-24 max-w-[1520px] bg-black bg-opacity-70 px-5 lg:px-10 3xl:px-[80px] mx-auto items-center justify-between lg:whitespace-nowrap transition-transform duration-500 ease-in-out ${
          scrollDirection === "down"
            ? "transform -translate-y-full"
            : "transform translate-y-0"
        } ${!isMenuOpen ? "backdrop-blur-sm" : ""}`}
      >
        {/* Logo */}
        <div
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <a className="flex">
            <span className="block">2024 SBVA</span>
            <span className="block">&nbsp;TOKYO FORUM</span>
          </a>
        </div>

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="hidden 3xl:flex xl:space-x-[60px] font-medium space-x-3 md:whitespace-nowrap">
          {[
            "OVERVIEW",
            "PROGRAM",
            "SPEAKERS & PANELS",
            "SBVA PORTFOLIO PITCHING",
            "ABOUT SBVA",
          ].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-[18px]  ${
                activeSection === section
                  ? "text-[#00E300] font-bold"
                  : activeSection === null
                  ? "text-white font-medium "
                  : "text-[#666666] font-medium hover:text-white"
              } cursor-pointer hover:text-[#00E300]`}
            >
              {section
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          ))}
        </nav>

        {/* Language Switch (Visible on larger screens) */}
        <div className="hidden 3xl:flex items-center space-x-4 lg:whitespace-nowrap">
          <button
            className={`text-[18px] font-medium ${
              language === "JP"
                ? "text-white"
                : "text-gray-400 hover:text-[#00E300]"
            } `}
            onClick={() => setLanguage("JP")}
          >
            JP
          </button>
          <span className="text-gray-400 text-[18px] font-medium">|</span>
          <button
            className={`text-[18px] font-medium ${
              language === "KR"
                ? "text-white"
                : "text-gray-400 hover:text-[#00E300]"
            } `}
            onClick={() => setLanguage("KR")}
          >
            KR
          </button>{" "}
        </div>

        {/* Mobile Menu Button */}
        <div className="3xl:hidden flex items-center">
          <button
            className="fill-[#00E300] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4.5H19V6.5H3V4.5Z" />
              <path d="M3 11H21V13H3V11Z" />
              <path d="M3 17.5H17V19.5H3V17.5Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      <nav
        className={`3xl:hidden h-full fixed top-0 left-0 w-full  bg-black transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col h-full space-y-10">
          {/* Top Section: Logo and Close Button */}
          <div className="flex items-center justify-between p-6">
            <div className="text-xl font-bold text-white">
              <a href="#home" className="flex">
                2024 SBVA TOKYO FORUM
              </a>
            </div>
            <button onClick={toggleMenu} className="text-white ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0703 2.55295L2.99981 20.6235"
                  stroke="white"
                  stroke-width="2.22222"
                />
                <path
                  d="M21.0703 20.6259L2.99981 2.55535"
                  stroke="white"
                  stroke-width="2.22222"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-start pl-6 space-y-8 text-white text-2xl  font-medium">
            {[
              "OVERVIEW",
              "PROGRAM",
              "SPEAKERS & PANELS",
              "SBVA PORTFOLIO PITCHING",
              "ABOUT SBVA",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-[#00E300]"
              >
                {section
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </div>

          {/* Bottom Section: Language Switch */}
          <div className="flex items-center justify-start gap-2 p-6 text-white text-xl">
            <button
              className={`text-[18px] font-medium ${
                language === "JP"
                  ? "text-white"
                  : "text-gray-400 hover:text-[#00E300]"
              } `}
              onClick={() => setLanguage("JP")}
            >
              JP
            </button>
            <span className="text-gray-400 text-[18px] font-medium">|</span>{" "}
            <button
              className={`text-[18px] font-medium ${
                language === "KR"
                  ? "text-white"
                  : "text-gray-400 hover:text-[#00E300]"
              } `}
              onClick={() => setLanguage("KR")}
            >
              KR
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Background */}
      <div
        className={`fixed  3xl:hidden inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
