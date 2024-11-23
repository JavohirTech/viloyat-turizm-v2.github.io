import React from 'react'
import {HeroSection, LocationsSection, NewsSection, OurPartnersSection} from "@/components";
import {setRequestLocale} from "next-intl/server";
import {AboutSection} from "@/components/section/about/AboutSection";


const Page = ({params: {locale}}: never) => {
  setRequestLocale(locale);
  return (
      <div>
        <HeroSection/>
        <OurPartnersSection/>
        <NewsSection/>
        <AboutSection/>
        <LocationsSection/>
      </div>
  )
}
export default Page
