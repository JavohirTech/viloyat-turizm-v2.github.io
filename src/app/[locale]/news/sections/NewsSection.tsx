"use client"
import React, {useEffect} from 'react'
import {INewsItem} from "@/types/news";
import {NewsCard} from "@/app/[locale]/news/components/NewsCard";
import {newsSvc} from "@/services/newsSvc";
import {Locale} from "@/types/locale";
import {useQuery} from "react-query";
import {Loader} from "@/components/common/loader/Loader";
import {Empty} from "@/components/common/empty/Empty";

export const NewsSection = ({locale, currentPage}:{locale:Locale, currentPage: number}) => {

  const {data: newsData, refetch: newsRefetch, isLoading} = useQuery(['news', locale, currentPage], ()=>newsSvc.getNews({locale, page: currentPage}))

  useEffect(() => {
    newsRefetch()
  }, [currentPage, newsRefetch])

  if (isLoading) {
    return <Loader height="h-64" />
  }

  if (!newsData || newsData.results.length === 0) {
    return <Empty height="h-64" />
  }

  return (
      <div className="space-y-8">
        {newsData.results.map((news: INewsItem) => (
           <NewsCard key={news.id} news={news}/>
        ))}
      </div>
  )
}
