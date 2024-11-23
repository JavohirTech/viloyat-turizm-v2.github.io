import {getMessages, getTranslations} from 'next-intl/server';
import React from 'react';
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import RootLayout from '../layout';

export async function generateMetadata({params}: { params: { locale: string } }) {
  const t = await getTranslations({locale: params.locale});
  return {
    title: t('home')
  };
}

export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  if (!routing.locales.includes(locale as "uz" | "ru" | "en")) {
    notFound();
  }

  return (
      <RootLayout locale={locale} messages={messages}>
        {children}
      </RootLayout>
  );
}
