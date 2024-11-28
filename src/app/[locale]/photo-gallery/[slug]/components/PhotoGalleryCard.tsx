import React, { FC } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { INewsItem } from "@/types/news";
import { addMediaUrl } from "@/helpers/addMediaUrl";
import {IPhotoGalleryItem} from "@/types/photoGallery";

interface IPhotoGalleryCardMiniProps {
  data: IPhotoGalleryItem;
}

export const PhotoGalleryCard: FC<IPhotoGalleryCardMiniProps> = ({ data }) => {
  return (
      <Link
          href={`/photo-gallery/${data.slug}`}
          key={data.id}
          className="grid grid-cols-10 gap-4 items-center bg-white h-auto"
      >
        <div className="col-span-4 relative h-[150px]">
          <Image
              src={
                data.images[0].image
                    ? addMediaUrl(data.images[0].image, "photo-gallery-image")
                    : "/images/placeholder.png"
              }
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl drop-shadow-2xl backdrop-blur-md"
          />
        </div>

        <div className="col-span-6 p-4">
        <span className="font-serif block w-fit px-3 mb-3 py-1 rounded text-green-500 bg-green-50 capitalize">
          {data.category.name}
        </span>
          <h3 className="font-baskervville font-light text-lg md:text-xl mb-2 line-clamp-2">
            {data.title}
          </h3>
          <p className="font-serif text-sm md:text-base mb-2 text-gray-500 line-clamp-1">
            {data.description}
          </p>
        </div>
      </Link>
  );
};
