"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { socialMediaSvc } from "@/services/socialMediaSvc";
import { useQuery } from "react-query";
import { INewsResponse } from "@/types/news";
import { addMediaUrl } from "@/helpers/addMediaUrl";
import { useTranslations } from "next-intl";

interface IHeroSectionProps {
  newsData: INewsResponse;
}

export const HeroSection: FC<IHeroSectionProps> = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: socialMediaData } = useQuery("getSocialMedia", socialMediaSvc.getSocialMedia);
  const t = useTranslations();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.results.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newsData.results.length]);

  return (
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence>
          {newsData.results.map((item, index) =>
              index === currentIndex ? (
                  <motion.div
                      key={item.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                  >
                    <Image
                        src={addMediaUrl(item.banner, "news-banner")}
                        alt={item.title}
                        fill
                        priority
                        quality={100}
                        className="object-cover"
                    />
                  </motion.div>
              ) : null
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center text-white px-8 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 container items-center gap-8 px-4">
            <div>
              <AnimatePresence mode="wait">
                <motion.h1
                    key={newsData.results[currentIndex]?.id + "-title"}
                    className="font-baskervville text-3xl sm:text-4xl md:text-6xl font-light line-clamp-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                  {newsData.results[currentIndex]?.title}
                </motion.h1>

                <motion.p
                    key={newsData.results[currentIndex]?.id + "-content"}
                    className="mt-4 text-lg sm:text-xl md:text-2xl line-clamp-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                  {newsData.results[currentIndex]?.content}
                </motion.p>

                <motion.div
                    key={newsData.results[currentIndex]?.id + "-button"}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-6 w-fit"
                >
                  <Link
                      href={`/news/${newsData.results[currentIndex]?.slug}`}
                      className="px-6 py-3 bg-white hover:opacity-80 transition-all text-black rounded-full flex items-center space-x-3"
                  >
                    <span>{t("Batafsil o`qish")}</span> <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="text-end hidden sm:block">
              <div className="flex flex-row md:flex-col lg:flex-col items-end space-x-4 md:space-y-4 lg:space-y-4 sm:space-y-2">
                {socialMediaData?.map((socialMedia) => (
                    <a
                        key={socialMedia.id}
                        href={socialMedia.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl sm:text-xl btn-glass rounded-lg"
                    >
                      <i className={`fab fa-${socialMedia.name.toLowerCase()}`}></i>
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
