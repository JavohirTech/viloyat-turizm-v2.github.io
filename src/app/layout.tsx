"use client"
import "./globals.css";
import {Footer, Navbar} from "@/components";
import React, {useEffect, useState} from "react";
import {usePathname} from "next/navigation";


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathname]);

  return (
      <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
            rel="stylesheet"
            href="https://kit-pro.fontawesome.com/releases/v6.6.0/css/pro.min.css"
        />
      </head>
      <body>
      <Navbar isHomePage={isHomePage} />
      {children}
      <Footer />
      </body>
      </html>
  );
}
