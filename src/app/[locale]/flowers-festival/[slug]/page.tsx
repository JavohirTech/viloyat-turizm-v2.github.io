import React from 'react';
import {PageHeader} from "@/components";
import {setRequestLocale} from "next-intl/server";
import {Link} from "@/i18n/routing";
import FancyBox from "@/helpers/fancyBox";
import Image from "next/image";
import {QRCodeSVG} from "qrcode.react";

const Page = ({params: {locale}}: never) => {
  setRequestLocale(locale);

  return (
      <div>
        <PageHeader title={"Gullar festivali"}/>
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 lg:pr-8 mb-10 md:mb-0">
            <span
                className={"text-gray-500 mb-5 font-serif inline-block"}>01.01.2024 10:00 dan - 03.01.2024 21:00 gacha</span>
            <h1 className="font-baskervville text-3xl md:text-5xl font-bold mb-10">
              63- xalqaro gullar festivali ochilish marosimi
            </h1>
            <FancyBox>
              <div className={"grid grid-cols-2 gap-5"}>
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
                <Image
                    width={500}
                    height={300}
                    data-fancybox="gallery"
                    src="https://picsum.photos/900"
                    data-src={"https://picsum.photos/900"}
                    data-caption={"Namangan shahar"}
                    alt="News Image"
                    className="rounded-2xl w-full h-auto"
                />
              </div>
            </FancyBox>
            <div className={"mt-10"}>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi
                dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>

              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi
                dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>

              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi
                dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>


              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut
                commodi dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, id, ut. Aliquam aperiam aut commodi
                dolore ea est explicabo facere illum iusto nam nemo, provident quaerat, ratione rem velit vitae.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <Image src={"/images/flowers-festival-logo.gif"} alt={"Namangan flowers festival logo"} width={200}
                   height={200} className={"mx-auto"}/>

            <div className={"mb-10"}>
              <h3 className="font-baskervville text-2xl md:text-3xl font-bold mb-4">Manzil</h3>
              <iframe
                  className={"rounded-3xl"}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770877.7024637081!2d71.67919341283753!3d40.998097466507915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c013fa02ccb%3A0x3243efb278d22619!2sBobur%20bo%C4%9Fi!5e0!3m2!1suz!2s!4v1732456030811!5m2!1suz!2s"
                  width={"100%"} height={400} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="mb-10">
              <h3 className="font-baskervville text-2xl md:text-3xl font-bold mb-4">Tadbirdan lavhalar</h3>
              <iframe className={"rounded-3xl"} width={"100%"} height={400}
                      src="https://www.youtube.com/embed/MGcqpDOWDZg?si=U7Np2y0sxY2WQTYV"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className={"py-10"}>
              <QRCodeSVG
                  className={"mx-auto"}
                  value="Namangan gullar bayrami"
                  level="M"
                  size={300}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
