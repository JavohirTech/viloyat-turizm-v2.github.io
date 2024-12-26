import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {Locale} from "@/types/locale";
import {timeZone} from "@/constants/constants";

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    timeZone: timeZone,
    now: new Date(),
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
