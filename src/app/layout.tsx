import React from 'react';
import {NextIntlClientProvider} from "next-intl";
import NavbarFooterLayout from "@/app/[locale]/NavbarFooterLayout";
import "./globals.css";

const RootLayout = ({
                      children,
                      locale,
                      messages
                    }: Readonly<{
  children: React.ReactNode;
  locale?: string;
  messages?: any;
}>) => {
  return (
      <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link
            rel="stylesheet"
            href="https://kit-pro.fontawesome.com/releases/v6.6.0/css/pro.min.css"
        />
      </head>
      <body>
      {locale && messages ? (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NavbarFooterLayout>
              {children}
            </NavbarFooterLayout>
          </NextIntlClientProvider>
      ) : (
          children
      )}
      </body>
      </html>
  );
};

export default RootLayout;
