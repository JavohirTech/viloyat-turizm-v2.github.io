import React from 'react'
import {Link} from "@/i18n/routing";
import Image from "next/image";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import moment from "moment/moment";
import {INewsItem} from "@/types/news";

export const NewsCard = ({news}: {news: INewsItem}) => {
  return (
      <Link
          href={`/news/${news.slug}`}
          key={news.id}
          className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden h-auto border  p-2 md:p-5 lg:p-5"
      >
        <div className="relative w-full md:w-1/3 h-[400px]">
          <Image
              objectFit={"cover"}
              layout={"fill"}
              className={"rounded-2xl"}
              src={news.banner ? addMediaUrl(news.banner, "news-banner") : "https://picsum.photos/200/300"}
              alt={news.title}
          />
        </div>
        <div className="p-3 md:p-6 lg:p-6 w-full md:w-2/3">
                <span className="font-serif block w-fit px-3 mb-3 py-1 rounded text-green-500 bg-green-50 capitalize">
                  {news.category.name}
                </span>
          <span className="text-gray-500 font-serif mb-5 block">
                  {moment(news.created_at).format("LL")}
                </span>
          <h3 className="font-baskervville text-2xl md:text-4xl font-light mb-2 line-clamp-3">
            {news.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{news.content}</p>
        </div>
      </Link>
  )
}
