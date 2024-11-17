export const navLinks:NavLinkProps[] = [
  { href: "/", label: "home" },
  { href: "/news", label: "Yangiliklar" },
  { href: "#contact", label: "Gullar bayrami" },
  { href: "#contact", label: "Tur paketlar" },
  { href: "#contact", label: "about" }
]

interface NavLinkProps {
  href: string
  label: string}
