import React from 'react'
import {INewsItem} from "@/types/news";
import {NewsCard} from "@/app/[locale]/news/components/NewsCard";
import {newsSvc} from "@/services/newsSvc";
import {Locale} from "@/types/locale";

export const NewsSection = async ({locale, currentPage}:{locale:Locale, currentPage: number}) => {

  const newsData = await newsSvc.getNews({locale, page: currentPage})

  console.log(newsData)

  console.log("currentPage newssection", currentPage)

  return (
      <div className="space-y-8">
        {newsData && newsData?.results.map((news: INewsItem) => (
           <NewsCard key={news.id} news={news}/>
        ))}
      </div>
  )
}
