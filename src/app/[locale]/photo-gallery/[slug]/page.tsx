import React, {FC} from 'react'
import {PageHeader} from "@/components";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {Locale} from "@/types/locale";
import {photoGallerySvc} from "@/services/photoGallerySvc";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import {PhotoGalleryCard} from "@/app/[locale]/photo-gallery/[slug]/components/PhotoGalleryCard";

interface PhotoGalleryIdProps {
  params: Promise<{ locale: Locale, slug: string }>
}


const Page:FC<PhotoGalleryIdProps> = async ({params}) => {
  const {locale, slug} = await params;

  setRequestLocale(locale);
  const t = await getTranslations({locale});

  const photoGalleryByIdData = await photoGallerySvc.getPhotoGalleryById({locale, slug});
  const photoGalleryData = await photoGallerySvc.getPhotoGallery({locale, params: {page:1}});

  return (
      <div>
        <PageHeader title={photoGalleryByIdData.title}/>

        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 lg:pr-8 mb-10 md:mb-0">
            <span className="font-serif block w-fit px-3 py-1 rounded text-green-500 bg-green-50 capitalize mb-10">
                  {photoGalleryByIdData.category.name}
                </span>
            <FancyBox>
              <div className={`grid ${photoGalleryByIdData.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-5`}>
                {
                  photoGalleryByIdData.images.map((image, index) => (
                      <Image
                          key={index}
                          width={500}
                          height={300}
                          lazyBoundary={"100px"}
                          lazyRoot={"#lazy-root"}
                          data-fancybox="gallery"
                          src={addMediaUrl(image.image, "photo-gallery-image")}
                          data-src={addMediaUrl(image.image, "photo-gallery-image")}
                          data-caption={photoGalleryByIdData.title}
                          alt={photoGalleryByIdData.title}
                          className="rounded-2xl w-full h-auto min-h-96 object-cover"
                      />
                  ))
                }
              </div>
            </FancyBox>
            <div className={"mt-10"}>
              <p className="text-gray-600 mb-4 leading-10 text-xl text-justify font-serif">
                {photoGalleryByIdData.description}
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className={"mb-10"}>
              {photoGalleryByIdData.location_i_frame && <div className={"mb-10"}>
              <h3 className="font-baskervville text-2xl md:text-3xl font-light mb-4">{t("Manzil")}</h3>
                  <div className={"rounded-3xl w-full h-64 overflow-hidden"}
                       dangerouslySetInnerHTML={{__html: photoGalleryByIdData.location_i_frame}}/>
              </div>}

              {photoGalleryByIdData.video_i_frame && <div className="mb-10">
                  <h3 className="font-baskervville text-2xl md:text-3xl font-light mb-4">{t("Maskandan lavhalar")}</h3>
                  <div className={"rounded-3xl w-full h-64 overflow-hidden"}
                       dangerouslySetInnerHTML={{__html: photoGalleryByIdData.video_i_frame}}/>
              </div>}
              <span
                  className={"text-gray-500 mb-5 font-serif block my-5"}>{photoGalleryByIdData.address} </span>
            </div>

            <h2 className="font-baskervville text-2xl md:text-3xl font-bold mb-4">Dam olish markazlari</h2>
            <div className="space-y-4">
              {photoGalleryData.results.map((item, index) => (
                 <PhotoGalleryCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
export default Page
