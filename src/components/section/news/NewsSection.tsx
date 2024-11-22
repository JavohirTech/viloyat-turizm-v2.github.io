'use client';
import React, {useRef} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import type {Swiper as SwiperType} from 'swiper';
import {SectionHeader} from "@/components";
import {Link} from "@/i18n/routing";

export const NewsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType>();

  return (
      <div>
        <div className={"container mx-auto mt-20"}>
          <SectionHeader title={"Namangan turizm yangiliklari"}
                         desc={"Namangan viloyati turizm boshqarmasi yangiliklari"} rightSide={
            <div className={"text-end"}>
              <i onClick={() => swiperRef.current?.slidePrev()}
                 aria-label="Previous slide"
                 className="fa-sharp cursor-pointer text-2xl fa-chevron-left text-orange-500 bg-white p-2 transition-colors focus:outline-none z-10"></i>

              <i onClick={() => swiperRef.current?.slideNext()}
                 aria-label="Next slide"
                 className="fa-sharp cursor-pointer text-2xl fa-chevron-right text-orange-500 bg-white p-2 transition-colors focus:outline-none z-10"></i>
            </div>
          }/>
        </div>
        <Swiper
            className={"px-10 py-10 pb-20"}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
        >
          <SwiperSlide>
            <div className="rounded-xl overflow-hidden relative shadow-2xl group">
              <img src="https://picsum.photos/900" alt="Slide 1" className="w-full h-auto"/>
              <div
                  className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                <div className="text-white flex items-end">
                  <div>
                    <h3 className="font-baskervville text-5xl">
                      Namangan viloyati Chortoq tumanida yangi turizm maskani
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                  </div>
                  <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                </div>
              </div>

              <Link href={"/news/10"} className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <i className="fa-solid fa-eye text-white text-4xl"></i>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden relative shadow-2xl group">
              <img src="https://picsum.photos/900" alt="Slide 1" className="w-full h-auto"/>
              <div
                  className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                <div className="text-white flex items-end">
                  <div>
                    <h3 className="font-baskervville text-5xl">
                      Namangan viloyati Chortoq tumanida yangi turizm maskani
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                  </div>
                  <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                </div>
              </div>

              <Link href={"/news/10"} className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <i className="fa-solid fa-eye text-white text-4xl"></i>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden relative shadow-2xl group">
              <img src="https://picsum.photos/900" alt="Slide 1" className="w-full h-auto"/>
              <div
                  className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                <div className="text-white flex items-end">
                  <div>
                    <h3 className="font-baskervville text-5xl">
                      Namangan viloyati Chortoq tumanida yangi turizm maskani
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                  </div>
                  <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                </div>
              </div>

              <Link href={"/news/10"} className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <i className="fa-solid fa-eye text-white text-4xl"></i>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden relative shadow-2xl group">
              <img src="https://picsum.photos/900" alt="Slide 1" className="w-full h-auto"/>
              <div
                  className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                <div className="text-white flex items-end">
                  <div>
                    <h3 className="font-baskervville text-5xl">
                      Namangan viloyati Chortoq tumanida yangi turizm maskani
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                  </div>
                  <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                </div>
              </div>

              <Link href={"/news/10"} className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <i className="fa-solid fa-eye text-white text-4xl"></i>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl overflow-hidden relative shadow-2xl group">
              <img src="https://picsum.photos/900" alt="Slide 1" className="w-full h-auto"/>
              <div
                  className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                <div className="text-white flex items-end">
                  <div>
                    <h3 className="font-baskervville text-5xl">
                      Namangan viloyati Chortoq tumanida yangi turizm maskani
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                  </div>
                  <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                </div>
              </div>

              <Link href={"/news/10"} className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <i className="fa-solid fa-eye text-white text-4xl"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl overflow-hidden relative shadow-2xl group">
              <img src="https://picsum.photos/900" alt="Slide 1" className="w-full h-auto"/>
              <div
                  className="absolute bottom-0 p-10 w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end z-10">
                <div className="text-white flex items-end">
                  <div>
                    <h3 className="font-baskervville text-5xl">
                      Namangan viloyati Chortoq tumanida yangi turizm maskani
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, soluta?</p>
                  </div>
                  <i className="fa-light fa-arrow-up-right p-5 rounded-xl text-2xl"></i>
                </div>
              </div>

              <Link href={"/news/10"} className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <i className="fa-solid fa-eye text-white text-4xl"></i>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={"text-center"}>
          <Link href={"/news"}
                className={"uppercase font-baskervville text-green-500 border rounded border-green-500 px-10 py-3"}>Barcha
            yangiliklar</Link>
        </div>
      </div>
  );
};
