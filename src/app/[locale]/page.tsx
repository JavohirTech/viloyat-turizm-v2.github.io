import React, {FC} from 'react'
import {HeroSection, LocationsSection, NewsSection, OurPartnersSection} from "@/components";
import {setRequestLocale} from "next-intl/server";
import {AboutSection} from "@/components/section/about/AboutSection";
import {newsSvc} from "@/services/newsSvc";
import {Locale} from "@/types/locale";
import {partnersSvc} from "@/services/partnersSvc";
import {aboutSvc} from "@/services/aboutSvc";
import {photoGallerySvc} from "@/services/photoGallerySvc";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const Page:FC<PageProps> = async ({params}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const newsData = await newsSvc.getNews({locale, params:{}});
  const partnersData = await partnersSvc.getPartners({locale});
  const aboutData = await aboutSvc.getAbout({locale});
  const photoGalleryData = await photoGallerySvc.getPhotoGallery({locale, params:{}});

  return (
      <div>
        <HeroSection newsData={newsData}/>
        <OurPartnersSection partnersData={partnersData}/>
        <NewsSection newsData={newsData}/>
        <AboutSection aboutData={aboutData}/>
        <LocationsSection photoGalleryData={photoGalleryData}/>
      </div>
  )
}
export default Page
