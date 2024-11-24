'use client';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Button, SectionHeader } from "@/components";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const images = [
  "https://picsum.photos/900?1",
  "https://picsum.photos/900?2",
  "https://picsum.photos/900?3",
  "https://picsum.photos/900?4",
  "https://picsum.photos/900?5",
  "https://picsum.photos/900?6"
];

export const NewsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType>();

  return (
      <div>
        <div className="container mx-auto mt-20 px-4 md:px-0">
          <SectionHeader
              title="Namangan turizm yangiliklari"
              desc="Namangan viloyati turizm boshqarmasi yangiliklari"
              rightSide={
                <div className="text-end">
                  <i
                      onClick={() => swiperRef.current?.slidePrev()}
                      aria-label="Previous slide"
                      className="fa-sharp cursor-pointer text-2xl fa-chevron-left text-orange-500 bg-white p-2 transition-colors focus:outline-none z-10"
                  ></i>

                  <i
                      onClick={() => swiperRef.current?.slideNext()}
                      aria-label="Next slide"
                      className="fa-sharp cursor-pointer text-2xl fa-chevron-right text-orange-500 bg-white p-2 transition-colors focus:outline-none z-10"
                  ></i>
                </div>
              }
          />
        </div>

        <Swiper
            className="px-4 md:px-10 pt-3 pb-16 md:py-20"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
        >
          {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-3xl overflow-hidden relative shadow-2xl group">
                  <Image src={image} width={100} height={100} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                  <div className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                    <div className="text-white flex items-end">
                      <div>
                        <h3 className="font-baskervville text-2xl md:text-5xl line-clamp-2">
                          Namangan viloyati Chortoq tumanida yangi turizm maskani
                        </h3>
                        <p className="text-sm md:text-base line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                      </div>
                      <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                    </div>
                  </div>

                  <Link
                      href="/news/10"
                      className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  >
                    <i className="fa-solid fa-eye text-white text-4xl"></i>
                  </Link>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <Button text="Barchasini ko`rish" href="/news" />
        </div>
      </div>
  );
};
