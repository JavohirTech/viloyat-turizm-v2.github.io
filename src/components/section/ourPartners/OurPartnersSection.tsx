import React from 'react'
import Image from "next/image";

export const OurPartnersSection = () => {
  return (
      <div className={"p-4 mt-10 bg-gray-50"}>
        <div className={"container mx-auto pt-5"}>
          <h1 className={"text-center font-baskervville text-5xl font-bold  text-green-500"}>Bizning hamkorlarimiz</h1>
          <p className={"text-center text-gray-500"}>Hamkor bo`lishni xohlasangiz biz bilan bog`laning</p>
          <div className={" flex flex-wrap items-center justify-between space-x-20 p-10"}>
            <div className={"space-y-3"}>
              <Image className={"mx-auto select-none"} src={"/images/uzbek-travel-logo.png"} alt={"Uzbek turizm logo"}
                     width={150} height={150}/>
              <p>Respublika turizm boshqarmasi</p>
            </div>
            <div className={"space-y-3"}>
              <Image className={"mx-auto select-none"} src={"/images/uzbek-travel-logo.png"} alt={"Uzbek turizm logo"}
                     width={150} height={150}/>
              <p>Respublika turizm boshqarmasi</p>
            </div>
            <div className={"space-y-3"}>
              <Image className={"mx-auto select-none"} src={"/images/uzbek-travel-logo.png"} alt={"Uzbek turizm logo"}
                     width={150} height={150}/>
              <p>Respublika turizm boshqarmasi</p>
            </div>
            <div className={"space-y-3"}>
              <Image className={"mx-auto select-none"} src={"/images/uzbek-travel-logo.png"} alt={"Uzbek turizm logo"}
                     width={150} height={150}/>
              <p>Respublika turizm boshqarmasi</p>
            </div>
            <div className={"space-y-3"}>
              <Image className={"mx-auto select-none"} src={"/images/uzbek-travel-logo.png"} alt={"Uzbek turizm logo"}
                     width={150} height={150}/>
              <p>Respublika turizm boshqarmasi</p>
            </div>
          </div>
        </div>
      </div>
  )
}
