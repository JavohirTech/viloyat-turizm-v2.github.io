"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type Language = "UZ" | "RU" | "EN";

interface NavbarProps {
  isHomePage: boolean;
}

export function Navbar({ isHomePage }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("UZ");
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const languageFlags: Record<Language, string> = {
    UZ: "/images/uzb-flag.png",
    RU: "/images/ru-flag.png",
    EN: "/images/gb-flag.png",
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : isHomePage ? "bg-transparent text-white" : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold flex items-center space-x-5">
          <Image
            src={"/images/namangan-turizm-logo.gif"}
            className={`${!isScrolled && "filter invert brightness-0"}`}
            alt={"Namangan turizm logo"}
            width={80}
            height={80}
          />
          <Image
              src="/images/uzbek-travel-logo.png"
              className={`${!isScrolled && "filter invert brightness-0"}`}
              alt="Uzbek travel logo"
              width={80}
              height={80}
          />
        </div>

        <ul className="hidden sm:flex space-x-4">
          <li className="transition-all duration-300 transform hover:scale-105 hover:text-gray-300">
            <Link href="/">Bosh sahifa</Link>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:text-gray-300">
            <Link href="/news">Yangiliklar</Link>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:text-gray-300">
            <Link href="#contact">Gullar bayrami</Link>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:text-gray-300">
            <Link href="#contact">Tur paketlar</Link>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:text-gray-300">
            <Link href="#contact">Bog`lanish</Link>
          </li>
        </ul>

        <div className="hidden sm:block relative" ref={dropdownRef}>
          <button
            onClick={handleDropdownToggle}
            className={`flex items-center space-x-2 bg-transparent ${isScrolled ? "text-black border-black" : "text-white border-white"} border  px-4 py-2 rounded-md`}
          >
            <Image
              src={languageFlags[selectedLanguage]}
              alt={`${selectedLanguage} flag`}
              width={20}
              height={20}
            />
            <span>
              {selectedLanguage === "UZ"
                ? "O`zbekcha"
                : selectedLanguage === "RU"
                ? "Русский"
                : "English"}
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
              <ul className="py-1">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageSelect("UZ")}
                >
                  O`zbekcha
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageSelect("RU")}
                >
                  Русский
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageSelect("EN")}
                >
                  English
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          className="sm:hidden flex items-center space-x-2 text-white"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <div className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-white"}`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-white"}`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-white"}`}></div>
          </div>
        </button>
      </div>

      {isMenuOpen && (
          <div ref={menuRef} className="sm:hidden bg-white text-black absolute w-full top-16 left-0 z-20 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={() => setIsMenuOpen(false)}>
                Yangiliklar
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Gullar bayrami
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Tur paketlar
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Bog`lanish
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center space-x-2 bg-transparent text-black border border-black px-4 py-2 rounded-md"
                >
                  <Image
                    src={languageFlags[selectedLanguage]}
                    alt={`${selectedLanguage} flag`}
                    width={20}
                    height={20}
                  />
                  <span>
                    {selectedLanguage === "UZ"
                      ? "O`zbekcha"
                      : selectedLanguage === "RU"
                      ? "Русский"
                      : "English"}
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
                    <ul className="py-1">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleLanguageSelect("UZ")}
                      >
                        O`zbekcha
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleLanguageSelect("RU")}
                      >
                        Русский
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleLanguageSelect("EN")}
                      >
                        English
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
