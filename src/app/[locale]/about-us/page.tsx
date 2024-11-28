import React, {FC} from 'react'
import {PageHeader} from "@/components";
import {AboutSection} from "@/components/section/about/AboutSection";
import {aboutSvc} from "@/services/aboutSvc";
import {Locale} from "@/types/locale";
import {contactSvc} from "@/services/contactSvc";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const Page:FC<PageProps> = async ({params}) => {
  const { locale } = await params;
  const aboutData = await aboutSvc.getAbout({locale});
  const contactData = await contactSvc.getContact({locale});

  const contact = contactData[0]

  return (
      <div>
        <PageHeader title={"Biz haqimizda"} />
        <AboutSection aboutData={aboutData}/>
        <div>
          <div className={"h-[500px]"} dangerouslySetInnerHTML={{__html: contact.location_i_frame}}></div>
        </div>
      </div>
  )
}
export default Page
