import React, {FC} from 'react'
import Image from "next/image";
import {Link} from "@/i18n/routing";
import {INewsItem} from "@/types/news";
import {addMediaUrl} from "@/helpers/addMediaUrl";

interface INewsCardMiniProps {
  news: INewsItem
}

export const NewsCardMini:FC<INewsCardMiniProps> = ({news}) => {
  return (
      <Link href={`/news/${news.slug}`} key={news.id} className="flex bg-white h-[150px]">
        <Image
            width={200}
            height={200}
            src={addMediaUrl(news.banner, "banner")}
            alt={news.title}
            className="rounded-2xl h-auto"
        />
        <div className="p-4">
          <h3 className="font-baskervville text-lg md:text-xl font-bold mb-2 line-clamp-2">
            {news.title}
          </h3>
          <p className="font-serif text-sm md:text-base mb-2 text-gray-500 line-clamp-2">
            {news.content}
          </p>
        </div>
      </Link>
  )
}
