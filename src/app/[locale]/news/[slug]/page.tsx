import React, {FC} from 'react';
import {PageHeader} from "@/components";
import {getTranslations, setRequestLocale} from "next-intl/server";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import {newsSvc} from "@/services/newsSvc";
import moment from "moment";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import {Locale} from "@/types/locale";
import {NewsCardMini} from "@/app/[locale]/news/[slug]/components/NewsCardMini";

interface IPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}


const Page: FC<IPageProps> = async ({params: {locale, slug}}) => {
  setRequestLocale(locale);
  const t = await getTranslations({locale});
  const newsByIdData = await newsSvc.getNewsById({locale, slug});
  const newsData = await newsSvc.getNews({locale, params: {page: 1}});


  return (
      <div>
        <PageHeader backgroundImage={addMediaUrl(newsByIdData?.banner, "news-banner")} title={newsByIdData.title}/>
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 lg:pr-20 mb-10 md:mb-0">

            <div className={"flex justify-between items-center"}>
               <span
                   className={"text-gray-500 mb-5 font-serif my-3"}>{moment(newsByIdData.created_at).format("LL")}</span>
              <span className="font-serif block w-fit px-3 mb-3 py-1 rounded text-green-500 bg-green-50 capitalize">
                  {newsByIdData.category.name}
                </span>
            </div>
            <FancyBox>
              <div className={`grid ${newsByIdData.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-5`}>
                {
                  newsByIdData.images.map((image, index) => (
                      <Image
                          key={index}
                          width={500}
                          height={300}
                          lazyBoundary={"100px"}
                          lazyRoot={"#lazy-root"}
                          data-fancybox="gallery"
                          src={addMediaUrl(image.image, "news")}
                          data-src={addMediaUrl(image.image, "news")}
                          data-caption={newsByIdData.title}
                          alt={newsByIdData.title}
                          className="rounded-2xl w-full h-auto"
                      />
                  ))
                }
              </div>
            </FancyBox>
            <div className={"mt-10"}>
              <p className="text-gray-600 mb-4 leading-10 text-xl text-justify font-serif">
                {newsByIdData.content}
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <h2 className="font-baskervville font-light text-2xl md:text-3xl mb-4">{t("Oxirgi yangiliklar")}</h2>
            <div className="space-y-2">
              {newsData.results.map((news, index) => (
                  <NewsCardMini news={news} key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
