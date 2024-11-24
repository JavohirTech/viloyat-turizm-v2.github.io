import React from 'react';
import { PageHeader } from "@/components";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";

const Page = ({ params: { locale } }: never) => {
  setRequestLocale(locale);

  return (
      <div>
        <PageHeader title={"Namangan yangilik details page"} />
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 lg:pr-8 mb-10 md:mb-0">
            <span className={"text-gray-500 mb-5 font-serif inline-block"}>01.01.2024</span>
            <h1 className="font-baskervville text-3xl md:text-5xl font-bold mb-10">
              Namangan viloyati Chortoq tumanida yangi turizm maskani
            </h1>
            <FancyBox>
              <div className={"grid grid-cols-2 gap-5"}>
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
              </div>
            </FancyBox>
            <div className={"mt-10"}>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi
                dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <h2 className="font-baskervville text-2xl md:text-3xl font-bold mb-4">Oxirgi yangiliklar</h2>
            <div className="space-y-4">
              {[2, 3, 4, 5, 6].map((item, index) => (
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
