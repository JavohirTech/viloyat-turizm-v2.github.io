"use client"
import React from 'react';
import {AbstractIntlMessages, NextIntlClientProvider, useTranslations} from "next-intl";
import NavbarFooterLayout from "@/app/[locale]/NavbarFooterLayout";
import "./globals.css";
import moment from "moment";
import {QueryClient, QueryClientProvider} from "react-query";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

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


  const queryClient = new QueryClient();
  return (
      <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link
            rel="stylesheet"
            href="https://kit-pro.fontawesome.com/releases/v6.6.0/css/pro.min.css"
        />
        <title>Namangan viloyat turizm boshqarmasi</title>
      </head>
      <body>
      {locale && messages ? (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <QueryClientProvider client={queryClient}>
              <ProgressBar height={"4px"} color={"#4CAF50"} options={{showSpinner: false}} shallowRouting />
              <NavbarFooterLayout>
                {children}
              </NavbarFooterLayout>
            </QueryClientProvider>
          </NextIntlClientProvider>
      ) : (
          children
      )}
      </body>
      </html>
  );
};

export default RootLayout;
