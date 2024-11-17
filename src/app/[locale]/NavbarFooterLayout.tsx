"use client";
import React, { useEffect, useState } from 'react';
import { Footer, Navbar } from "@/components";
import { usePathname } from "@/i18n/routing";

const NavbarFooterLayout = ({
                              children,
                            }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHomePage(pathname === '/');
  }, [pathname]);

  return (
      <>
        <Navbar isHomePage={true} />
        {children}
        <Footer />
      </>
  );
};

export default NavbarFooterLayout;
