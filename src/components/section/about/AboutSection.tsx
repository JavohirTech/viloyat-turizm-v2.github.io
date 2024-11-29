"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";
import Image from "next/image";
import { IAboutResponse } from "@/types/about";
import { addMediaUrl } from "@/helpers/addMediaUrl";
import { usePathname } from "@/i18n/routing";

interface IAboutSectionProps {
  aboutData: IAboutResponse[];
}

export const AboutSection: FC<IAboutSectionProps> = ({ aboutData }) => {
  const data = aboutData[0];
  const pathname = usePathname();
  const isAboutUsPage = pathname === "/about-us";

  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
      <div className="container mx-auto my-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10 items-center gap-10">
          {/* Image Section */}
          <motion.div
              className="h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageVariants}
          >
            <Image
                alt={data.title}
                width={900}
                height={800}
                src={addMediaUrl(data.image, "about-us")}
                className="shadow-2xl rounded-3xl w-full object-cover min-h-full"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
          >
            <p className="font-serif text-md md:text-xl">{data.title}</p>
            <h1 className="font-baskervville text-3xl md:text-5xl text-green-500 mt-2">
              {data.title}
            </h1>

            <div className="font-serif mt-5 md:mt-10">
              <p className="indent-5 text-xl text-gray-500">{data.content}</p>

              {!isAboutUsPage && (
                  <div className="text-center sm:text-center md:text-start lg:text-start">
                    <Button
                        text="Batafsil ma`lumot"
                        className="mt-5"
                        href="/about-us"
                    />
                  </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
  );
};
