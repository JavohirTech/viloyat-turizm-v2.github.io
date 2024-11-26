"use client"
import React, {useEffect} from "react";
import {PageHeader, Pagination} from "@/components";
import {newsSvc} from "@/services/newsSvc";
import {Locale} from "@/types/locale";
import {NewsSection} from "@/app/[locale]/news/sections/NewsSection";
import {useQuery} from "react-query";
import {useParams, useSearchParams} from "next/navigation";
import {usePathname} from "@/i18n/routing";

const Page = () => {
  const pathname = useParams();
  const locale: Locale = pathname.locale as Locale;
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1;
  const {data: newsData, refetch: newsRefetch} = useQuery(['news', locale, currentPage], () => newsSvc.getNews({
    locale,
    page: currentPage
  }))

  useEffect(() => {
    newsRefetch()
  }, [currentPage, newsRefetch, locale])

  return (
      <div>
        <PageHeader title={"Yangiliklar"}/>
        <div className="container mx-auto py-8 px-4">
          <div className="border border-green-500 w-full my-5 rounded-xl flex items-center">
            <i className="fas fa-search text-2xl p-5 text-green-500"></i>
            <input
                type="search"
                placeholder={"Qidiruv..."}
                className="w-full focus:outline-0 font-baskervville focus:border-0 pe-5 bg-transparent"
            />
          </div>

          <div
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
          <span>
            {newsData && newsData.results.length} ta natija / ko`rsatilmoqda {1 + (currentPage - 1)} - {newsData?.count}
          </span>

            <div className="flex items-center space-x-3">
              <label>Saralash:</label>
              <div className="relative">
                <select
                    className="block appearance-none w-full bg-white border border-green-500 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none">
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
            <Pagination currentPage={currentPage} totalPages={2}/>
          </div>
        </div>
      </div>
  );
};

export default Page;
