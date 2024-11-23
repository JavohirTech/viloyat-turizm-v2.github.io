import React from 'react'
import {Button} from "@/components";
import Image from "next/image";

export const AboutSection = () => {
  return (
      <div className={"container mx-auto my-20"}>
        <div className={"grid grid-cols-2 space-x-10 items-center"}>
          <div>
            <Image alt={"sdada"} width={100} height={100} src={"https://picsum.photos/id/990/900"} className={"shadow-2xl rounded-3xl"}/>
          </div>
          <div>
            <p className={"font-serif text-2xl"}>Namangan viloyat turizm boshqarmasi</p>
            <h1 className={"font-baskervville text-5xl text-green-500"}>Namangan viloyat turizm boshqarmasi</h1>

            <div className={"font-serif mt-10"}>
              <p className={"indent-5"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti distinctio
                ducimus eaque hic magnam praesentium voluptatem. A adipisci beatae consectetur consequuntur ducimus eius
                eligendi enim esse et harum id iusto laboriosam maxime molestias nobis odio praesentium quae recusandae
                reiciendis rem sed tempora veniam veritatis, vitae voluptatum? Aliquam at, culpa distinctio dolor
                doloremque excepturi harum, in itaque natus nulla perspiciatis quas, recusandae rerum veniam voluptatem.
                Asperiores beatae eum fugiat illo laboriosam reiciendis, totam? A consequatur deserunt dignissimos
                dolores dolorum esse et excepturi expedita facilis, fuga harum id illum, libero minima natus nobis,
                nostrum porro quam quia vitae. Distinctio, fuga magnam.</p>

              <p className={"indent-5 py-5"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti distinctio
                ducimus eaque hic magnam praesentium voluptatem. A adipisci beatae consectetur consequuntur ducimus eius
                eligendi enim esse et harum id iusto laboriosam maxime molestias nobis odio praesentium quae recusandae
                reiciendis rem sed tempora veniam veritatis, vitae voluptatum? Aliquam at, culpa distinctio dolor
                doloremque excepturi harum, in itaque natus nulla perspiciatis quas, recusandae rerum veniam voluptatem.
                Asperiores beatae eum fugiat illo laboriosam reiciendis, totam? A consequatur deserunt dignissimos
                dolores dolorum esse et excepturi expedita facilis, fuga harum id illum, libero minima natus nobis,
                nostrum porro quam quia vitae. Distinctio, fuga magnam.</p>

              <Button text={"Batafsil ma`lumot"} className={"mt-5"} href={"/about"}/>
            </div>
          </div>
        </div>
      </div>
  )
}
