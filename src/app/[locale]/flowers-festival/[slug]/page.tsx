import React, {FC} from 'react';
import {PageHeader} from "@/components";
import {getTranslations, setRequestLocale} from "next-intl/server";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import {QRCodeSVG} from "qrcode.react";
import {Locale} from "@/types/locale";
import {flowersFestivalSvc} from "@/services/flowersFestivalSvc";
import moment from "moment/moment";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import {DOMAIN_URL} from "@/lib/api";


interface IFestivalProps {
  params: Promise<{ locale: Locale, slug: string }>
}

const Page: FC<IFestivalProps> = async ({params}) => {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  const festivalByIdData = await flowersFestivalSvc.getFlowerFestivalById({locale, slug});
  const fullUrl = `${DOMAIN_URL}/${locale}/flowers-festival/${festivalByIdData.slug}`;

  console.log(fullUrl);

  return (
      <div>
        <PageHeader title={festivalByIdData.name}/>
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 lg:pr-8 mb-10 md:mb-0">
            <span
                className={"text-gray-500 mb-5 font-serif inline-block"}>{moment(festivalByIdData.start_date).format("LLLL")} - {moment(festivalByIdData.end_date).format("LLLL")}</span>
            <FancyBox>
              <div className={`grid ${festivalByIdData.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-5`}>
                {
                  festivalByIdData.images.map((image, index) => (
                      <Image
                          key={index}
                          width={500}
                          height={300}
                          lazyBoundary={"100px"}
                          lazyRoot={"#lazy-root"}
                          data-fancybox="gallery"
                          src={addMediaUrl(image.image, "festival")}
                          data-src={addMediaUrl(image.image, "festival")}
                          data-caption={festivalByIdData.name}
                          alt={festivalByIdData.name}
                          className="rounded-2xl w-full h-auto min-h-96 object-cover"
                      />
                  ))
                }
              </div>
            </FancyBox>
            <div className={"mt-10"}>
              <p className="text-gray-600 mb-4 leading-10 text-xl text-justify font-serif">
                {festivalByIdData.description}
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <Image src={"/images/flowers-festival-logo.gif"} alt={"Namangan flowers festival logo"} width={200}
                   height={200} className={"mx-auto"}/>

            {festivalByIdData.location_i_frame && <div className={"mb-10"}>
              <h3 className="font-baskervville text-2xl md:text-3xl font-light mb-4">{t("Manzil")}</h3>
              <div className={"rounded-3xl w-full h-64 overflow-hidden"}
                   dangerouslySetInnerHTML={{__html: festivalByIdData.location_i_frame}}/>
            </div>}

            {festivalByIdData.video_i_frame && <div className="mb-10">
              <h3 className="font-baskervville text-2xl md:text-3xl font-light mb-4">{t("Tadbirdan lavhalar")}</h3>
              <div className={"rounded-3xl w-full h-64 overflow-hidden"}
                   dangerouslySetInnerHTML={{__html: festivalByIdData.video_i_frame}}/>
            </div>}

            <div className={"py-10"}>
              <QRCodeSVG
                  className={"mx-auto"}
                  value={fullUrl}
                  level={"L"}
                  size={300}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
