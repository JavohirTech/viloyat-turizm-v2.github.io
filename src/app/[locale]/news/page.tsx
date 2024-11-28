"use client";
import React, {ChangeEvent, useState} from "react";
import Head from "next/head";
import {PageHeader, Pagination} from "@/components";
import {newsSvc} from "@/services/newsSvc";
import {Locale} from "@/types/locale";
import {useQuery} from "react-query";
import {useParams, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {useRouter} from "@/i18n/routing";
import {INewsItem} from "@/types/news";
import {NewsCard} from "@/app/[locale]/news/components/NewsCard";
import {Loader} from "@/components/common/loader/Loader";
import {Empty} from "@/components/common/empty/Empty";

const Page = () => {
  const pathname = useParams();
  const locale: Locale = pathname.locale as Locale;
  const searchParams = useSearchParams();
  const t = useTranslations();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("search") || "";

  const [searchText, setSearchText] = useState<string>(currentSearch);

  const {
    data: newsData,
    isLoading: newsIsLoading,
    isFetching: newsIsFetching,
  } = useQuery(
    ["news", locale, currentPage, currentCategory, currentSearch],
    () =>
      newsSvc.getNews({
        locale,
        params: {
          page: currentPage,
          search: currentSearch,
          category: currentCategory,
        },
      }),
    { keepPreviousData: true }
  );

  const { data: newsCategoriesData } = useQuery(["newsCategories", locale], () =>
    newsSvc.getNewsCategories({ locale })
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchValue);
    params.delete("page");
    router.push(`?${params.toString()}`, {scroll: false});
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    params.delete("page");
    router.push(`?${params.toString()}`);
  };
  return (
    <>
      <Head>
        <title>News Page</title>
        <meta name="description" content="Latest news and updates" />
        <meta name="keywords" content="news, updates, articles" />
        <meta name="author" content="Your Name" />
      </Head>
      <PageHeader title={t("Yangiliklar")} />
      <div className="container mx-auto py-8 px-4">
        <div className="border border-green-500 w-full my-5 rounded-xl flex items-center">
          <i className="fas fa-search text-2xl p-5 text-green-500"></i>
          <input
              type="search"
              placeholder={`${t("Qidiruv")}...`}
              className="w-full focus:outline-none font-baskervville focus:border-0 pe-5 bg-transparent"
              value={searchText}
              onChange={handleSearch}
          />
        </div>

        <div
            className=" flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
              <span>
                {newsData && newsData.results.length || 0} {t("ta natija / ko`rsatilmoqda")}{" "}
                {1 + (currentPage - 1)} - {newsData?.count || 1}
              </span>
          <div className="flex items-center space-x-3">
            <label>{t("Saralash")}:</label>
            <div className="relative">
              <select
                  onChange={handleCategoryChange}
                  value={currentCategory}
                  className="block appearance-none w-full bg-white border border-green-500 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none"
              >
                <option value="">{t("Barchasi")}</option>
                {newsCategoriesData?.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <i className="fas fa-chevron-down text-green-500"></i>
              </div>
            </div>
          </div>
        </div>

        {newsIsLoading || newsIsFetching ? (
            <Loader height="h-96"/>
        ) : newsData && newsData.results.length > 0 ? (
            <>

              <div className="space-y-8">
                {newsData.results.map((news: INewsItem) => (
                    <NewsCard key={news.id} news={news}/>
                ))}
              </div>

              <div className={"my-10"}>
                <Pagination
                    currentPage={currentPage}
                    totalPages={newsData?.count ? Math.ceil(newsData.count / 10) : 0}
                />
              </div>
            </>
        ) : (
            <Empty height={"h-96"}/>
        )}
      </div>
    </>
  );
};

export default Page;
