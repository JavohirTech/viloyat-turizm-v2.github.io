"use client";

import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHeader } from "@/components";
import { Link, useRouter } from "@/i18n/routing";
import { useParams, useSearchParams } from "next/navigation";
import { Locale } from "@/types/locale";
import { useTranslations } from "next-intl";
import { useInfiniteQuery, useQuery } from "react-query";
import { photoGallerySvc } from "@/services/photoGallerySvc";
import { addMediaUrl } from "@/helpers/addMediaUrl";
import { Loader } from "@/components/common/loader/Loader";
import { Empty } from "@/components/common/empty/Empty";
import { BASE_URL } from "@/lib/api";

const Page = () => {
  const pathname = useParams();
  const searchParams = useSearchParams();
  const locale: Locale = pathname.locale as Locale;
  const t = useTranslations();
  const router = useRouter();
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const currentPage = useMemo(() => Number(searchParams.get("page") || 1), [searchParams]);
  const currentSearch = useMemo(() => searchParams.get("search") || "", [searchParams]);
  const currentCategory = searchParams.get("category") || "";

  const [searchText, setSearchText] = useState<string>(currentSearch);

  const {
    data: photoGalleryData,
    isLoading: photoGalleryIsLoading,
    isFetching: photoGalleryIsFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
      ["getPhotoGallery", locale, currentCategory, currentSearch],
      ({ pageParam = 1 }) =>
          photoGallerySvc.getPhotoGallery({
            locale,
            params: {
              page: pageParam,
              search: currentSearch,
              category: currentCategory,
              page_size: 1,
            },
          }),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.next) return false;
          const url = new URL(lastPage.next, BASE_URL);
          return url.searchParams.get("page") || false;
        },
      }
  );

  const { data: photoGalleryCategoriesData } = useQuery(
      ["getPhotoGalleryCategories", locale],
      () => photoGallerySvc.getPhotoGalleryCategories({ locale }),
      {
        retry: false,
      }
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !photoGalleryIsLoading && !photoGalleryIsFetching) {
        fetchNextPage();
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, photoGalleryIsLoading, photoGalleryIsFetching]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchValue);
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Define variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
      <div>
        <PageHeader title={t("Turizm-turlari")} />
        <div className="container mx-auto my-20 px-5">
          <motion.div
              className="border border-green-500 w-full my-5 rounded-xl flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <i className="fas fa-search text-2xl p-5 text-green-500"></i>
            <input
                type="search"
                aria-label={t("Qidiruv")}
                placeholder={`${t("Qidiruv")}...`}
                className="w-full focus:outline-none font-baskervville focus:border-0 pe-5 bg-transparent"
                value={searchText}
                onChange={handleSearch}
            />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
          <span>
            {photoGalleryData && photoGalleryData.pages[0].results.length || 0} {t("ta natija / ko`rsatilmoqda")}{" "}
            {1 + (currentPage - 1)} - {photoGalleryData?.pages[0].count || 1}
          </span>
            <div className="flex items-center space-x-3">
              <label>{t("Saralash")}:</label>
              <div className="relative">
                <select
                    onChange={handleCategoryChange}
                    value={currentCategory}
                    className="block appearance-none w-full bg-white border border-green-500 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none"
                >
                  <option value="">{t("Barchasi")}</option>
                  {photoGalleryCategoriesData?.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name}
                      </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <i className="fas fa-chevron-down text-green-500"></i>
                </div>
              </div>
            </div>
          </div>

          {photoGalleryData?.pages.length === 0 || photoGalleryData?.pages[0].results.length === 0 ? (
              <Empty height={"h-96"} />
          ) : (
              <motion.div
                  className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-y-4 mt-0 md:mt-10 lg:mt-10"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
              >
                {photoGalleryData?.pages.map((page) =>
                    page.results.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <Link href={`/photo-gallery/${item.slug}`}>
                            <div
                                data-fancybox="gallery"
                                data-src={addMediaUrl(item.banner, "photo-gallery-banner")}
                                data-caption={item.title}
                                className="mb-4 relative group overflow-hidden rounded-3xl"
                            >
                              <motion.div
                                  initial={{scale: 0.9, opacity: 0}}
                                  animate={{scale: 1, opacity: 1}}
                                  transition={{duration: 0.5, delay: 0.2}}
                              >
                                <Image
                                    width={600}
                                    height={500}
                                    src={addMediaUrl(item.banner, "photo-gallery-banner")}
                                    alt={item.title}
                                    className="w-full object-cover h-[500px] rounded-lg shadow-md"
                                />
                              </motion.div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
                              <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg text-white">
                                <span>{item.category.name}</span>
                                <h2 className="font-baskervville text-4xl font-light line-clamp-2">{item.title}</h2>
                                <h2 className="font-serif text-xl line-clamp-2">{item.address}</h2>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                    ))
                )}
              </motion.div>
          )}

          <div ref={loaderRef} className="my-10">
            {photoGalleryIsFetching && <Loader height={"h-96"}/>}
          </div>
        </div>
      </div>
  );
};

export default Page;
