import {getMessages, getTranslations} from 'next-intl/server';
import React, {ReactNode} from 'react';
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import RootLayout from '../layout';

type LocaleType = "uz" | "ru" | "en";

export async function generateMetadata({params}: { params: { locale: LocaleType } }) {
  const t = await getTranslations({locale: params.locale});
  return {
    title: t('home')
  };
}

type Props = {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout(props: Props) {
  const locale = props.params.locale as LocaleType;
  const messages = await getMessages();

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
      <RootLayout locale={locale} messages={messages}>
        {props.children}
      </RootLayout>
  );
}
