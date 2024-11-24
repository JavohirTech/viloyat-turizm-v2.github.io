"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import Image from "next/image"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { useLocale, useTranslations } from "next-intl"
import { useParams, useSearchParams } from "next/navigation"
import {motion} from "framer-motion";
import {navLinks} from "@/components/common/navbar/navLinks";
import {Language, LANGUAGES} from "@/components/common/navbar/languages";
interface NavbarProps {
  isHomePage: boolean
}

interface NavLinkProps {
  href: string
  onClick?: () => void
  children: React.ReactNode
}

const NavLink = ({ href, onClick, children }: NavLinkProps) => (
    <li className="transition-all duration-300 transform hover:scale-105 hover:text-gray-300">
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
)

const LanguageButton = ({
                          selectedLanguage,
                          onClick,
                          isScrolled
                        }: {
  selectedLanguage: Language
  onClick: () => void
  isScrolled: boolean
}) => (
    <button
        onClick={onClick}
        className={`flex items-center space-x-2 bg-transparent ${
            isScrolled ? "text-black border-black" : "text-white border-white"
        } border px-4 py-2 rounded-md`}
    >
      <Image
          src={LANGUAGES[selectedLanguage].flag}
          alt={`${selectedLanguage} flag`}
          width={20}
          height={20}
      />
      <span>{LANGUAGES[selectedLanguage].name}</span>
    </button>
)

const LanguageDropdown = ({
                            onSelect
                          }: {
  selectedLanguage: Language
  onSelect: (lang: Language) => void
}) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20"
      >
        <ul className="py-1">
          {Object.entries(LANGUAGES).map(([code, { name }]) => (
              <li
                  key={code}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => onSelect(code as Language)}
              >
                {name}
              </li>
          ))}
        </ul>
      </motion.div>
  )
}

export function Navbar({ isHomePage }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeLocale = useLocale() as Language
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(activeLocale)
  const [_, startTransition] = useTransition()

  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const t = useTranslations()

  const query = Object.fromEntries(searchParams.entries())

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language)
    setIsDropdownOpen(false)
    setIsMenuOpen(false)

    startTransition(() => {
      router.replace(
          { pathname, ...params, query },
          { locale: language }
      )
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !menuRef.current?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
        setIsMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  const navbarBgClass = isScrolled
      ? "bg-white text-black"
      : isHomePage
          ? "bg-transparent text-white"
          : "bg-black text-white"

  return (
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navbarBgClass}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo Section */}
          <div className="text-lg font-bold flex items-center space-x-5">
            {["namangan-turizm-logo.gif", "uzbek-travel-logo.png"].map((logo) => (
                <Image
                    key={logo}
                    src={`/images/${logo}`}
                    className={`${!isScrolled && "filter invert brightness-0"}`}
                    alt={`${logo.split("-").join(" ")} logo`}
                    width={80}
                    height={80}
                />
            ))}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex space-x-4">
            {navLinks.map(({ href, label }) => (
                <NavLink key={href + label} href={href}>
                  {t(label)}
                </NavLink>
            ))}
          </ul>

          {/* Desktop Language Selector */}
          <div className="hidden sm:block relative" ref={dropdownRef}>
            <LanguageButton
                selectedLanguage={selectedLanguage}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                isScrolled={isScrolled}
            />
            {isDropdownOpen && (
                <LanguageDropdown
                    selectedLanguage={selectedLanguage}
                    onSelect={handleLanguageSelect}
                />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
              className="sm:hidden flex flex-col justify-center items-center space-y-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
          >
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className={`w-6 h-0.5 ${isScrolled ? "bg-black" : "bg-white"}`}
                />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div ref={menuRef} className="sm:hidden bg-white text-black absolute w-full top-16 left-0 z-20 p-4">
              <ul className="space-y-4">
                {navLinks.map(({ href, label }) => (
                    <NavLink key={href + label} href={href} onClick={() => setIsMenuOpen(false)}>
                      {label}
                    </NavLink>
                ))}
                <li>
                  <div className="relative">
                    <LanguageButton
                        selectedLanguage={selectedLanguage}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        isScrolled={true}
                    />
                    {isDropdownOpen && (
                        <LanguageDropdown
                            selectedLanguage={selectedLanguage}
                            onSelect={handleLanguageSelect}
                        />
                    )}
                  </div>
                </li>
              </ul>
            </div>
        )}
      </nav>
  )
}
