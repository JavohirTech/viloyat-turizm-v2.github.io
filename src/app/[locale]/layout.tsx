import { getMessages, getTranslations } from 'next-intl/server';
import React from 'react';
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import RootLayout from '../layout';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
                                             children,
                                             params,
                                           }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  // Check if the locale is valid
  if (!routing.locales.includes(locale as "uz" | "ru" | "en")) {
    notFound();
  }

  return (
      <RootLayout locale={locale} messages={messages}>
        {children}
      </RootLayout>
  );
}
