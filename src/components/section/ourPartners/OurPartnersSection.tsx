import React, {FC} from 'react'
import Image from "next/image";
import {IPartnersResponse} from "@/types/partners";
import {addMediaUrl} from "@/helpers/addMediaUrl";
import {useTranslations} from "next-intl";

interface OurPartnersSectionProps {
  partnersData: IPartnersResponse
}

export const OurPartnersSection:FC<OurPartnersSectionProps> = ({partnersData}) => {
  const t= useTranslations()
  return (
      <div className="p-4 mt-10 bg-gray-50">
        <div className="container mx-auto pt-5">
          <h1 className="text-center font-baskervville text-3xl md:text-5xl font-light text-green-500">{t("Bizning hamkorlarimiz")}</h1>
          {/*<p className="text-center text-gray-500 text-sm md:text-base">{t("Hamkor bo`lishni xohlasangiz biz bilan bog`laning")}</p>*/}
          <div className="flex flex-wrap items-center justify-center lg:justify-between space-y-10 md:space-y-0 md:space-x-20 p-10">
            {
              partnersData.results.map((partner) => (
                  <div key={partner.id} className="space-y-3">
                    <Image className="mx-auto select-none" src={addMediaUrl(partner.logo, "partners")} alt={partner.name} width={150} height={150}/>
                    <p className="text-center text-sm md:text-base">{partner.name}</p>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
  )
}
