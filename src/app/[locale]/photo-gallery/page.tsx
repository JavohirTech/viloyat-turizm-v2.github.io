"use client"
import React, {ChangeEvent, useState} from 'react'
import Image from "next/image";
import {PageHeader} from "@/components";
import {Link, useRouter} from "@/i18n/routing";
import {useParams, useSearchParams} from "next/navigation";
import {Locale} from "@/types/locale";
import {useTranslations} from "next-intl";
import {useQuery} from "react-query";
import {photoGallerySvc} from "@/services/photoGallerySvc";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import {Loader} from "@/components/common/loader/Loader";
import {Empty} from "@/components/common/empty/Empty";

const Page = () => {
  const pathname = useParams();
  const locale: Locale = pathname.locale as Locale;
  const searchParams = useSearchParams();
  const t = useTranslations();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("search") || "";

  const [searchText, setSearchText] = useState<string>(currentSearch);

  const {
    data: photoGalleryData,
    isLoading: photoGalleryIsLoading,
    isFetching: photoGalleryIsFetching,
  } = useQuery(
      ["getPhotoGallery", locale, currentPage, currentCategory, currentSearch],
      () =>
          photoGallerySvc.getPhotoGallery({
            locale,
            params: {
              page: currentPage,
              search: currentSearch,
              category: currentCategory,
            },
          }),
      {
        retry: false,
      }
  );

  const {data: photoGalleryCategoriesData} = useQuery(["getPhotoGalleryCategories", locale], () =>
      photoGallerySvc.getPhotoGalleryCategories({locale}),
      {
        retry: false,
      }
  );


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchValue);
    params.delete("page");
    router.push(`?${params.toString()}`, {scroll: false});
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    params.delete("page");
    router.push(`?${params.toString()}`, {scroll: false});
  };


  console.log(photoGalleryData, " photoGalleryData")

  return (
      <div>
        <PageHeader title={"Turizm turlari"}/>
        <div className="container mx-auto my-20 px-5">
          <div className="border border-green-500 w-full my-5 rounded-xl flex items-center">
            <i className="fas fa-search text-2xl p-5 text-green-500"></i>
            <input
                type="search"
                placeholder={`${t("Qidiruv")}...`}
                className="w-full focus:outline-none font-baskervville focus:border-0 pe-5 bg-transparent"
                value={searchText}
                onChange={handleSearch}
            />
          </div>

          <div
              className=" flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
              <span>
                {photoGalleryData && photoGalleryData.results.length || 0} {t("ta natija / ko`rsatilmoqda")}{" "}
                {1 + (currentPage - 1)} - {photoGalleryData?.count || 1}
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

          {photoGalleryIsLoading || photoGalleryIsFetching ? (
              <Loader height="h-96"/>
          ) : photoGalleryData && photoGalleryData.results.length > 0 ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-y-4 mt-0 md:mt-10 lg:mt-10">
                {photoGalleryData.results.map((item, index) => (
                    <Link href={`/photo-gallery/${item.slug}`} key={index}>
                      <div data-fancybox="gallery"
                           data-src={addMediaUrl(item.images[0].image, "photo-gallery-image")}
                           data-caption={item.title}
                           className="mb-4 relative group overflow-hidden  rounded-3xl">
                        <Image width={100} height={200}
                               src={addMediaUrl(item.images[0].image, "photo-gallery-image")}
                               alt={item.title}
                               className="w-full object-cover h-auto min-h-96 rounded-lg shadow-md"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <i className="fas fa-eye text-white text-4xl"/>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg text-white">
                          <span>{item.category.name}</span>
                          <h2 className="font-baskervville text-4xl font-light line-clamp-2">{item.title}</h2>

                          <h2 className="font-serif text-xl line-clamp-2">{item.address}</h2>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
          ) : (
              <Empty height={"h-96"}/>
          )}
        </div>
      </div>
  )
}
export default Page
