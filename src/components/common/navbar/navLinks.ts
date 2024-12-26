export const navLinks: NavLinkProps[] = [
  {href: "/", label: "Asosiy sahifa"},
  {href: "/news", label: "Yangiliklar"},
  {href: "/flowers-festival", label: "Gullar bayrami"},
  // {href: "/tourist-packages", label: "Tur paketlar"},
  {href: "/photo-gallery", label: "Turizm-turlari"},
  {href: "/about-us", label: "Biz haqimizda"}
]

interface NavLinkProps {
  href: string
  label: string
}
