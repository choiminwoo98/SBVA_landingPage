import React from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow-md z-50">
      <div className="flex w-full h-20 md:h-24 max-w-[1520px] px-[50px] mx-auto items-center justify-between lg:whitespace-nowrap">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <a href="#home" className="hidden lg:block">
            <span className="block">2024 SBVA</span>
            <span className="block">TOKYO FORUM</span>
          </a>
          <a href="#home" className="lg:hidden block">
            2024 SBVA TOKYO FORUM
          </a>
        </div>

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="hidden lg:flex xl:space-x-[60px] space-x-3 md:whitespace-nowrap">
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
              className={`text-[18px] font-medium  ${
                activeSection === section
                  ? "text-[#00E300]"
                  : activeSection === null
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
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
        <div className="hidden lg:flex items-center space-x-4 lg:whitespace-nowrap">
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
          <span className="text-gray-400 text-[18px] font-medium">|</span>
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
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
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

      {/* Full-Screen Menu */}
      <nav
        className={`lg:hidden fixed top-0 left-0 w-full h-fit bg-black transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col h-full space-y-10">
          {/* Top Section: Logo and Close Button */}
          <div className="flex items-center justify-between p-6">
            <div className="text-xl font-bold text-white">
              <a href="#home">2024 SBVA TOKYO FORUM</a>
            </div>
            <button onClick={toggleMenu} className="text-white text-3xl">
              &times;
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col flex-grow items-start pl-6 space-y-8 text-white text-2xl font-bold">
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
                language === "KR"
                  ? "text-white"
                  : "text-gray-400 hover:text-[#00E300]"
              } `}
              onClick={() => setLanguage("KR")}
            >
              KR
            </button>
            <span className="text-gray-400 text-[18px] font-medium">|</span>
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
          </div>
        </div>
      </nav>

      {/* Overlay Background */}
      <div
        className={`fixed lg:hidden inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
