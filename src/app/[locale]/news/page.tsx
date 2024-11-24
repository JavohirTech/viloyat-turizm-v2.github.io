import React from 'react'
import { PageHeader, Pagination } from "@/components";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Page = ({ params: { locale } }: never) => {
  setRequestLocale(locale);

  return (
      <div>
        <PageHeader title={"Yangiliklar"} />
        <div className="container mx-auto py-8 px-4">
          <div className="border border-green-500 w-full my-5 rounded-xl flex items-center">
            <i className="fas fa-search text-2xl p-5 text-green-500"></i>
            <input
                type="search"
                placeholder={"Qidiruv..."}
                className="w-full focus:outline-0 font-baskervville focus:border-0 pe-5 bg-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
          <span>
            7
            ta natija / ko`rsatilmoqda
            1 - 7
          </span>

            <div className="flex items-center space-x-3">
              <label>Saralash:</label>

              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-green-500 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none">
                  <option>Barchasi</option>
                  <option>Yangiliklar</option>
                  <option>E`lonlar</option>
                  <option>Tadbirlar</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <i className="fas fa-chevron-down text-green-500"></i>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-8">
            {
              [2, 3, 4, 5, 6].map((item, index) => (
                  <Link href={`/news/${item}-salom`} key={index}
                        className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden h-auto border  p-2 md:p-5 lg:p-5">
                    <Image
                        width={100}
                        height={100}
                        src="https://picsum.photos/900"
                        alt="News Image"
                        className="rounded-2xl w-full md:w-1/3"
                    />
                    <div className="p-3 md:p-6 lg:p-6 w-full md:w-2/3">
                      <span className="font-serif block w-fit px-3 mb-3 py-1 rounded text-green-500 bg-green-50">Tadbir</span>
                      <span className="text-gray-500 font-serif mb-5 block">01.01.2024</span>
                      <h3 className="font-baskervville text-2xl md:text-4xl font-bold mb-2 line-clamp-3">
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                        Namangan viloyati Chortoq tumanida yangi turizm maskani
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                        commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem
                        velit vitae.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                        commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem
                        velit vitae.
                      </p>
                    </div>
                  </Link>
              ))
            }
          </div>
          <div className={"my-10"}>
            <Pagination currentPage={1} totalPages={1000} />
          </div>
        </div>
      </div>
  )
}

export default Page;
