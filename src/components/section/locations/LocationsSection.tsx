"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import { IPhotoGalleryResponse } from "@/types/photoGallery";
import { addMediaUrl } from "@/helpers/addMediaUrl";

interface ILocationsSectionProps {
  photoGalleryData: IPhotoGalleryResponse;
}

export const LocationsSection: FC<ILocationsSectionProps> = ({ photoGalleryData }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
      <div className="container mx-auto">
        <SectionHeader title={"Turizm turlari"} desc={"Namangan viloyati diqqatga sazovor joylari"} />

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-y-4 mt-0 md:mt-10 lg:mt-10 p-4">
          <FancyBox>
            {photoGalleryData.results.map((item, index) => (
                <motion.div
                    key={index}
                    className="mb-4 relative group overflow-hidden rounded-3xl"
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                  <div data-fancybox="gallery" data-src={`${addMediaUrl(item.banner || "", "photo-gallery-banner")}`} data-caption={item.title}>
                    <Image
                        width={100}
                        height={300}
                        src={addMediaUrl(item.banner || "", "photo-gallery-banner")}
                        alt={item.title}
                        className="w-full h-auto rounded-lg min-h-[500px] shadow-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-eye text-white text-4xl" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg text-white">
                      <span>{item.category.name}</span>
                      <h2 className="font-baskervville text-4xl line-clamp-2">{item.address}</h2>
                      <h2 className="font-serif text-xl line-clamp-2">{item.description}</h2>
                    </div>
                  </div>
                </motion.div>
            ))}
          </FancyBox>
        </div>

        <div className={"text-center my-20"}>
          <Button text={"Barchasini ko`rish"} href={"/photo-gallery"} />
        </div>
      </div>
  );
};
