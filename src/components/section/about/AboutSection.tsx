import React from 'react'
import { Button } from "@/components";
import Image from "next/image";

export const AboutSection = () => {
  return (
      <div className="container mx-auto my-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10 items-center gap-10">
          <div>
            <Image
                alt="sdada"
                width={900}
                height={600}
                src="https://picsum.photos/id/990/900"
                className="shadow-2xl rounded-3xl w-full h-auto"
            />
          </div>
          <div>
            <p className="font-serif text-xl md:text-2xl">
              Namangan viloyat turizm boshqarmasi
            </p>
            <h1 className="font-baskervville text-3xl md:text-5xl text-green-500 mt-2">
              Namangan viloyat turizm boshqarmasi
            </h1>

            <div className="font-serif mt-5 md:mt-10">
              <p className="indent-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto deleniti distinctio ducimus eaque hic magnam
                praesentium voluptatem. A adipisci beatae consectetur consequuntur
                ducimus eius eligendi enim esse et harum id iusto laboriosam
                maxime molestias nobis odio praesentium quae recusandae reiciendis
                rem sed tempora veniam veritatis, vitae voluptatum?
              </p>

              <p className="indent-5 py-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto deleniti distinctio ducimus eaque hic magnam
                praesentium voluptatem. A adipisci beatae consectetur consequuntur
                ducimus eius eligendi enim esse et harum id iusto laboriosam
                maxime molestias nobis odio praesentium quae recusandae reiciendis
                rem sed tempora veniam veritatis, vitae voluptatum?
              </p>

              <div className={"text-center sm:text-center md:text-start lg:text-start"}>
                <Button
                    text="Batafsil ma`lumot"
                    className="mt-5"
                    href="/about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
