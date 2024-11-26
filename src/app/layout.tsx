import React from 'react';
import {AbstractIntlMessages, NextIntlClientProvider} from "next-intl";
import NavbarFooterLayout from "@/app/[locale]/NavbarFooterLayout";
import "./globals.css";
import moment from "moment";

const RootLayout = ({
                      children,
                      locale,
                      messages
                    }: Readonly<{
  children: React.ReactNode;
  locale?: string;
  messages?:AbstractIntlMessages;
}>) => {
  moment.locale(locale)
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
