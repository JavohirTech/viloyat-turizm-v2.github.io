import React from 'react';
import {Button, SectionHeader} from "@/components";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";

const images = [33, 44, 56, 70, 99, 100, 990, 78, 596];

export const LocationsSection = () => {
  return (
      <div className="container mx-auto p-4">
        <SectionHeader title={"Mashxur maskanlar"} desc={"Namangan viloyati diqqatga sazovor joylari"}/>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-y-4 mt-10">
          <FancyBox>
            {images.map((image, index) => (
                <div data-fancybox="gallery" data-src={`https://picsum.photos/id/${image}/${image + 200}/${image + 430}`}
                   data-caption={`Namangan shahri Axsikent yodgorligi ${image}`}
                   key={index} className="mb-4 relative group overflow-hidden  rounded-3xl">
                  <Image width={100} height={100}
                      src={`https://picsum.photos/id/${image}/${image + 200}/${image + 430}`}
                      alt={`Random image with ID ${image}`}
                      className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
                  <div
                      className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-eye text-white text-4xl"/>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg text-white">
                    <p className="font-semibold font-baskervville text-4xl">Namangan shahri Axsikent
                      yodgorligi {image}</p>
                  </div>
                </div>
            ))}
          </FancyBox>
        </div>

        <div className={"text-center my-20"}>
          <Button text={"Barchasini ko`rish"} href={"/"}/>
        </div>
      </div>
  );
};
