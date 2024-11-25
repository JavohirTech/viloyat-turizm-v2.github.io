import React, {FC} from 'react'
import {HeroSection, LocationsSection, NewsSection, OurPartnersSection} from "@/components";
import {setRequestLocale} from "next-intl/server";
import {AboutSection} from "@/components/section/about/AboutSection";
import {newsService} from "@/services/newsService";
import {Locale} from "@/types/locale";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const Page:FC<PageProps> = async ({params}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const newsData = await newsService.getNews({locale});

  return (
      <div>
        <HeroSection/>
        <OurPartnersSection/>
        <NewsSection newsData={newsData}/>
        <AboutSection/>
        <LocationsSection/>
      </div>
  )
}
export default Page
