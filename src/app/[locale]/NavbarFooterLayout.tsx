"use client";
import React from 'react';
import {Footer, Navbar} from "@/components";

const NavbarFooterLayout = ({
                              children,
                            }: Readonly<{
  children: React.ReactNode;
}>) => {
  // const [, setIsHomePage] = useState(false);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setIsHomePage(pathname === '/');
  // }, [pathname]);

  return (
      <>
        <Navbar isHomePage={true} />
        {children}
        <Footer />
      </>
  );
};

export default NavbarFooterLayout;
