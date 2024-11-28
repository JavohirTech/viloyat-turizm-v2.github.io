"use client";
import {FC, useCallback, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {socialMediaSvc} from "@/services/socialMediaSvc";
import {useQuery} from "react-query";
import {INewsResponse} from "@/types/news";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import {useTranslations} from "next-intl";

interface IHeroSectionProps {
  newsData: INewsResponse;
}

export const HeroSection: FC<IHeroSectionProps> = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: socialMediaData } = useQuery("getSocialMedia", socialMediaSvc.getSocialMedia);
  const t = useTranslations();

  const preloadImages = useCallback(() => {
    newsData.results.forEach((item) => {
      const img = new Image();
      img.src = addMediaUrl(item.banner, "news-banner");
    });
  }, [newsData.results]);

  useEffect(() => {
    preloadImages();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.results.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [preloadImages, newsData.results.length]);

  return (
      <div className="relative z-0 min-h-screen overflow-hidden">
        <AnimatePresence>
          {newsData.results.map((item, index) => (
              <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{
                    backgroundImage: `url(${addMediaUrl(item.banner, "news-banner")})`,
                    display: index === currentIndex ? "block" : "none",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
              />
          ))}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

        <div className="relative z-10 mx-auto container flex flex-col items-start justify-center text-white px-8 py-4 min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full items-center gap-8">
            <div>
              <motion.h1
                  className="font-baskervville text-3xl sm:text-4xl md:text-6xl font-light line-clamp-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
              >
                {newsData.results[currentIndex]?.title}
              </motion.h1>

              <motion.p
                  className="mt-4 text-lg sm:text-xl md:text-2xl line-clamp-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1, delay: 0.5 }}
              >
                {newsData.results[currentIndex]?.content}
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-6 w-fit"
              >
                <Link
                    href={`/news/${newsData.results[currentIndex]?.slug}`}
                    className="px-6 py-3 bg-white hover:opacity-80 transition-all text-black rounded-full flex items-center space-x-3"
                >
                  <span>{t("Batafsil o`qish")}</span> <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </Link>
              </motion.div>
            </div>

            <div className="text-end">
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
