import React, {FC} from 'react'
import {Link} from "@/i18n/routing";
import {IFlowersFestivalItem} from "@/types/flowersFestival";
import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {QRCodeSVG} from "qrcode.react";
import moment from "moment";
import {addMediaUrl} from "@/helpers/addMediaUrl";

interface FestivalCardProps {
  festival: IFlowersFestivalItem;
  index: number;
  todayFestivalRef: React.RefObject<HTMLDivElement>;
}

interface FestivalCardProps {
  festival: IFlowersFestivalItem;
  index: number;
  todayFestivalRef: React.RefObject<HTMLDivElement>;
  shouldSetRef: boolean;
}

export const FestivalCard: FC<FestivalCardProps> = ({festival, index, todayFestivalRef, shouldSetRef}) => {
  const t = useTranslations();
  const cardVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const festivalStartDate = new Date(festival.start_date);
  const festivalEndDate = new Date(festival.end_date);

  const isFuture = festivalStartDate > today;
  const isToday = festivalStartDate.toDateString() === today.toDateString();
  const isPast = festivalEndDate < today;


  console.log("isToday", isToday, new Date(festival.start_date).getDate(), today.getDate());

  return (
      <Link href={`/flowers-festival/${festival.slug}`} key={festival.id} className="relative">
        <div className="absolute left-0 h-full w-[5px]">
          {isToday || isFuture ? (
              <div
                  className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-green-500 rounded-full border-8 border-white outline outline-1 outline-green-500"></div>
          ) : isPast ? (
              <div
                  className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white p-5 text-2xl text-green-500 rounded-full border-8 border-white">
                <i className="fas fa-check"></i>
              </div>
          ) : null}
        </div>

        <motion.div
            className={`ms-10 md:ms-20 lg:ms-20 flex flex-col md:flex-row bg-white border ${isToday ? "border-2 border-green-500" : "border-gray-100"} rounded-3xl h-auto  p-2 md:p-5 lg:p-5 relative mb-5`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5, delay: index * 0.1}}
        >
          <div className="relative w-full md:w-1/3 h-[400px]">
            <Image
                layout={"fill"}
                src={festival.banner ? addMediaUrl(festival.banner, "festival-banner") : "/images/placeholder.png"}
                alt={festival.name}
                objectFit={"cover"}
                className="rounded-2xl"
            />
          </div>
          <div className="p-3 md:p-6 lg:p-6 w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <span
                  className="font-serif block w-fit px-3 mb-3 py-1 rounded text-green-500 bg-green-50">{t("Tadbir")}</span>
              <h3 className="font-baskervville font-light text-2xl md:text-4xl mb-2 line-clamp-3">{festival.name}</h3>
              <p className={"line-clamp-3"}>{festival.description}</p>
            </div>
            <div className="font-serif flex flex-col lg:flex-row justify-between mt-10">
              <div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  <b>{t("Manzil")}:</b> {festival.address}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  <b>{t("Vaqt")}:</b> {moment(festival.start_date).format("LLLL")} - {moment(festival.end_date).format("LLLL")}
                </p>
              </div>
              <div className="relative">
                <QRCodeSVG value={window.location.href + "/" + festival.slug} className={"w-34 h-34"} size={128} level={"L"}/>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
  );
};
