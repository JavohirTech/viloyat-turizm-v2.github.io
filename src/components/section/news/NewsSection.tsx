'use client';
import React, { FC, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Button, SectionHeader } from '@/components';
import { Link } from '@/i18n/routing';
import { INewsResponse } from '@/types/news';
import moment from 'moment';
import { addMediaUrl } from '@/helpers/addMediaUrl';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface INewsSectionProps {
  newsData: INewsResponse;
}

export const NewsSection: FC<INewsSectionProps> = ({ newsData }) => {
  const swiperRef = useRef<SwiperType>();

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
          {newsData.results.map((news, index) => (
              <SwiperSlide key={index}>
                <Link href={`/news/${news?.slug}`}>
                  <motion.div
                      className="rounded-3xl cursor-pointer overflow-hidden shadow-2xl group h-[500px] relative"
                      variants={slideVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true}}
                  >
                    <Image
                        src={addMediaUrl(news.banner, 'news-banner')}
                        layout="fill"
                        objectFit="cover"
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto"
                    />
                    <div
                        className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                      <div className="text-white flex items-end">
                        <div>
                          <h3 className="font-baskervville text-2xl md:text-5xl line-clamp-2">
                            {news.title}
                          </h3>
                          <p className="text-sm md:text-base line-clamp-2">
                            {moment(news.created_at).format('LL')}
                          </p>
                        </div>
                        <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                      </div>
                    </div>

                    <motion.div
                        whileHover={{opacity: 1}}
                        className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    >
                      <Link href={`/news/${news.slug}`}>
                        <i className="fa-solid fa-eye text-white text-4xl"></i>
                      </Link>
                    </motion.div>
                  </motion.div>
                </Link>
              </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <Button text="Barchasini ko`rish" href="/news"/>
        </div>
      </div>
  );
};
