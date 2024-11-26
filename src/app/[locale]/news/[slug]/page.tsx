import React from 'react';
import { PageHeader } from "@/components";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {Link, useRouter} from "@/i18n/routing";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import {newsSvc} from "@/services/newsSvc";
import moment from "moment";
import {addMediaUrl} from "@/helpers/addMediaUrl";


const Page = async ({ params: { locale, slug } }: never) => {
  setRequestLocale(locale);
  const t = await getTranslations({locale});
  const newsByIdData = await newsSvc.getNewsById({locale, slug});

  const newsData = await newsSvc.getNews({locale});


  return (
      <div>
        <PageHeader title={newsByIdData.title}/>
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 lg:pr-8 mb-10 md:mb-0">
            <span className={"text-gray-500 mb-5 font-serif inline-block"}>{moment(newsByIdData.created_at).format("LL")}</span>
            <FancyBox>
              <div className={"grid grid-cols-2 gap-5"}>
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
              <p className="text-gray-600 mb-4">
                {newsByIdData.content}
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <h2 className="font-baskervville text-2xl md:text-3xl font-bold mb-4">{t("Oxirgi yangiliklar")}</h2>
            <div className="space-y-4">
              {newsData.results.map((item, index) => (
                  <Link href={`/news/${item}`} key={index} className="flex bg-white h-[150px]">
                    <Image
                        width={200}
                        height={200}
                        src="https://picsum.photos/500"
                        alt="News Image"
                        className="rounded-2xl h-auto"
                    />
                    <div className="p-4">
                      <h3 className="font-baskervville text-lg md:text-xl font-bold mb-2 line-clamp-2">
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                      </h3>
                      <p className="font-serif text-sm md:text-base mb-2 text-gray-500 line-clamp-2">
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                      </p>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
