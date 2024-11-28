import React, {FC} from 'react';
import {Button, SectionHeader} from "@/components";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import {IPhotoGalleryResponse} from "@/types/photoGallery";
import {addMediaUrl} from "@/helpers/addMediaUrl";

interface ILocationsSectionProps {
  photoGalleryData: IPhotoGalleryResponse;
}

export const LocationsSection:FC<ILocationsSectionProps> = ({photoGalleryData}) => {
  return (
      <div className="container mx-auto">
        <SectionHeader title={"Turizm turlari"} desc={"Namangan viloyati diqqatga sazovor joylari"}/>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-y-4 mt-0 md:mt-10 lg:mt-10 p-4">
          <FancyBox>
            {photoGalleryData.results.map((item, index) => (
                <div data-fancybox="gallery" data-src={`${addMediaUrl(item.images[0].image, "photo-gallery-image")}`}
                   data-caption={item.title}
                   key={index} className="mb-4 relative group overflow-hidden  rounded-3xl">
                  <Image width={100} height={300}
                      src={addMediaUrl(item.images[0].image, "photo-gallery-image")}
                      alt={item.title}
                      className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
                  <div
                      className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-eye text-white text-4xl"/>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg text-white">
                    <span>{item.category.name}</span>
                    <h2 className="font-baskervville text-4xl line-clamp-2">{item.address}</h2>

                    <h2 className="font-serif text-xl line-clamp-2">{item.description}</h2>
                  </div>
                </div>
            ))}
          </FancyBox>
        </div>

        <div className={"text-center my-20"}>
        <Button text={"Barchasini ko`rish"} href={"/photo-gallery"}/>
        </div>
      </div>
  );
};
