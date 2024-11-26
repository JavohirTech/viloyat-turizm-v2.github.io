import React from "react";
import {PageHeader, Pagination} from "@/components";
import {setRequestLocale} from "next-intl/server";
import {newsSvc} from "@/services/newsSvc";
import {Locale} from "@/types/locale";
import {NewsSection} from "@/app/[locale]/news/sections/NewsSection";

const Page = async ({ params: { locale, page } }: { params: { locale: Locale; page: string } }) => {
  setRequestLocale(locale);

  const currentPage = parseInt(page) || 1;
  const newsData = await newsSvc.getNews({ locale, page: 1 });

  console.log("currentPage", currentPage);

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
            {newsData.results.length} ta natija / ko`rsatilmoqda {1 + (currentPage - 1) * 10} -{" "}
            {Math.min(newsData.count, currentPage * 10)}
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

         <NewsSection currentPage={currentPage} locale={locale}/>

          <div className={"my-10"}>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(newsData.count)} />
          </div>
        </div>
      </div>
  );
};

export default Page;
