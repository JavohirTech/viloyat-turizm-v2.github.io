"use client"
import React, {ChangeEvent, useEffect, useMemo, useRef, useState} from 'react';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import {Empty} from '@/components';
import {useInfiniteQuery, useQuery} from "react-query";
import {flowersFestivalSvc} from "@/services/flowersFestivalSvc";
import {useParams, useSearchParams} from "next/navigation";
import {Locale} from "@/types/locale";
import {useTranslations} from "next-intl";
import {FestivalCard} from "@/app/[locale]/flowers-festival/components/FestivalCard";
import {Loader} from "@/components/common/loader/Loader";
import {useRouter} from "@/i18n/routing";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import Head from "next/head";
import {BASE_URL} from "@/lib/api";

const Page = () => {
  const pathname = useParams();
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const locale: Locale = pathname.locale as Locale;
  const t = useTranslations();
  const todayFestivalRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const currentPage = useMemo(() => Number(searchParams.get("page") || 1), [searchParams]);
  const currentSearch = useMemo(() => searchParams.get("search") || "", [searchParams]);
  const [searchText, setSearchText] = useState<string>(currentSearch);
  const router = useRouter();

  const {data: festivalData, isLoading, isFetching, isError, fetchNextPage, hasNextPage} = useInfiniteQuery(
      ["getFlowerFestivals", locale, currentSearch],
      ({pageParam = 1}) => flowersFestivalSvc.getFlowerFestivals({
        locale,
        params: {page: pageParam, page_size: 1, search: currentSearch}
      }),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.next) return false;
          const url = new URL(lastPage.next, BASE_URL);
          return url.searchParams.get("page") || false;
        },
      }
  );

  const {data: festivalPoster} = useQuery("getFestivalPoster", () => flowersFestivalSvc.getFestivalPoster({locale}));
  const festivalPosterData = festivalPoster?.[0];

  const modalVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isLoading && !isFetching) {
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
  }, [fetchNextPage, hasNextPage, isLoading, isFetching]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchValue);
    params.delete("page");
    router.push(`?${params.toString()}`, {scroll: false});
  };

  return (
      <>
        <Head>
          <link
              rel="preload"
              as="video"
              href={addMediaUrl(festivalPosterData?.video || "", "festivals-poster-video")}
              type="video/mp4"
          />
        </Head>
        <div className="relative w-full h-screen">
          <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
          >
            <source
                src={addMediaUrl(festivalPosterData?.video || "", "festivals-poster-video")}
                type="video/mp4"
            />
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
            <div
                className="text-center flex justify-center flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4">
              <motion.div
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 1}}
              >
                <Image width={200} height={200}
                       priority
                       fetchPriority={"high"}
                       src={addMediaUrl(festivalPosterData?.logo || "", "festival-poster-logo")} alt="Logo"
                       className="mb-4 h-auto w-[100px] md:full lg:w-full xl:max-w-xl"/>
              </motion.div>

              <motion.h1
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 1, delay: 0.5}}
                  className="text-3xl sm:text-4xl font-baskervville font-light mb-3 line-clamp-2"
              >
                {festivalPosterData?.title}
              </motion.h1>

              <motion.p
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 1, delay: 0.7}}
                  className="text-base sm:text-lg md:text-xl line-clamp-3"
              >
                {festivalPosterData?.description}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="container mx-auto py-8">
            <motion.div
                className="border border-green-500 w-full my-5 rounded-xl flex items-center"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
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

            <div
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
            <span>
              {festivalData && festivalData.pages[0].results.length || 0} {t("ta natija / ko`rsatilmoqda")}{" "}
              {1 + (currentPage - 1)} - {festivalData?.pages[0].count || 1}
            </span>
            </div>
          </div>

          <div className="relative me-5 md:me-0">
            {festivalData && festivalData.pages[0]?.results && festivalData.pages[0].results.length > 0 && (
                <div className="absolute left-0 top-0 w-[5px] bg-green-500 h-full rounded-xl"></div>
            )}
            <div className="space-y-6">
              {festivalData?.pages.length === 0 || festivalData?.pages[0].results.length === 0 ? (
                  <Empty height={"h-96"}/>
              ) : (
                  festivalData?.pages.map((page) =>
                      page.results.map((festival, index) => {
                        const shouldSetRef = !todayFestivalRef.current && new Date(festival.start_date) > new Date();
                        return (
                            <FestivalCard
                                todayFestivalRef={todayFestivalRef}
                                festival={festival}
                                key={festival.id}
                                index={index}
                                shouldSetRef={shouldSetRef}
                            />
                        );
                      })
                  )
              )}
            </div>
          </div>

          <AnimatePresence>
            {showModal && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={modalVariants}
                    transition={{duration: 0.5}}
                >
                  <motion.div className="bg-white rounded-lg shadow-lg p-6 w-4/5 sm:w-1/2 md:w-1/3"
                              variants={modalVariants}>
                    <h2 className="text-xl font-bold mb-4">Xalqaro gullar festivali 12-kun</h2>
                    <p>
                      Namanganda 63-xalqaro gullar festivali 12-kun davomida o`tkaziladi. Barcha qiziqarli va
                      qiziqarli tadbirlarga taklif etiladi.
                    </p>
                    <button onClick={() => setShowModal(false)}
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                      Yopish
                    </button>
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>

          <div ref={loaderRef} className="my-10">
            {isFetching && <Loader height={"h-96"}/>}
          </div>
        </div>
      </>
  );
};

export default Page;
