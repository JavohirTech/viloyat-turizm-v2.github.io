import React from 'react'
import {PageHeader} from "@/components";
import {setRequestLocale} from "next-intl/server";
import {Link} from "@/i18n/routing";
import Image from "next/image";

const Page = ({ params: { locale } }:  never) => {

  setRequestLocale(locale);

  return (
      <div>
        <PageHeader title={"Yangiliklar"} />
        <div className="container mx-auto py-8 px-4">
          <div className="space-y-8">
            {
              [2, 3, 4, 5, 6].map((item, index) => (
                  <Link href={`/news/${item}`} key={index} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden h-auto border p-5">
                    <Image width={100}  height={100} src="https://picsum.photos/900" alt="News Image" className="rounded-2xl w-full md:w-1/3" />
                    <div className="p-6 w-full md:w-2/3">
                      <span className={"text-gray-500 font-serif my-5 inline-block"}>01.01.2024</span>
                      <h3 className="font-baskervville text-2xl md:text-4xl font-bold mb-2 line-clamp-3">
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
                      </p>
                    </div>
                  </Link>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default Page;
