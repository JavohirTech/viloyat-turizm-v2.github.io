"use client"
import React, {FC} from 'react';
import Image from "next/image";
import {contactSvc} from "@/services/contactSvc";
import {useParams} from "next/navigation";
import {Locale} from "@/types/locale";
import {useQuery} from "react-query";
import {socialMediaSvc} from "@/services/socialMediaSvc";
import {navLinks} from "@/components/common/navbar/navLinks";
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";



export const Footer = () => {
  const pathname = useParams();
  const locale: Locale = pathname.locale as Locale;
  const t= useTranslations();

  const {data: contactData} = useQuery("getContact", ()=>contactSvc.getContact({locale}))
  const { data: socialMediaData } = useQuery("getSocialMedia", socialMediaSvc.getSocialMedia);
  const contact = contactData?.[0]

  return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
              <div className={"flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-5"}>
                {["namangan-turizm-logo.gif", "uzbek-travel-logo.png"].map((logo) => (
                    <Image
                        key={logo}
                        src={`/images/${logo}`}
                        alt={`${logo.split("-").join(" ")} logo`}
                        className={"filter invert brightness-0"}
                        width={150}
                        height={150}
                    />
                ))}
              </div>
              <p className={"block w-full mt-5 text-2xl"}>Namangan viloyat turizm boshqarmasi</p>
            </div>
            <div className="w-full lg:w-2/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">{t("Ish vaqtlarimiz")}</h2>
              <ul className={"space-y-2"}>
                <li>
                  Dushanba: 09:30 - 17:30
                </li>
                <li>
                  Seshanba: 09:30 - 17:30
                </li>
                <li>
                  Tushlik: 13:00 - 14:00
                </li>
                <li>
                  Chorshanba: 09:30 - 17:30
                </li>
                <li>
                  Payshanba: 09:30 - 17:30
                </li>
                <li>
                  Juma: 09:30 - 17:30
                </li>
                <li>
                  Shanba: 09:30 - 15:30
                </li>
                <li>
                  Yakshanba: Dam olish kuni
                </li>
                <li>
                  Tushlik: 13:00 - 14:00
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">{t("Sahifalar")}</h2>
              <ul>
                {
                  navLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-gray-400">{t(link.label)}</Link>
                      </li>
                  ))
                }
              </ul>
            </div>
            <div className="w-full lg:w-1/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">{t("Bog`lanish")}</h2>
              <ul className={"space-y-2"}>
                {contact?.address && <li>
                  <a href={`https://www.google.com/maps?q=${contact?.address}`} target={"_blank"}
                     className="hover:text-gray-400"><i
                      className={"fas fa-location-dot"}></i> {contact?.address} {contact?.postal_index}</a>
                </li>}
                {contact?.phone && <li>
                  <a href={`tel:${contact?.phone}`} target={"_blank"} className="hover:text-gray-400"><i
                      className={"fas fa-phone"}></i> {contact?.phone}</a>
                </li>}
                {contact?.additional_phone && <li>
                  <a href={`tel:${contact?.additional_phone}`} target={"_blank"} className="hover:text-gray-400"><i
                      className={"fas fa-phone"}></i> {contact?.additional_phone}</a>
                </li>}
                {contact?.email && <li>
                  <a href={`mailto:${contact?.email}`} className="hover:text-gray-400"><i
                      className={"fas fa-envelope"}></i> {contact?.email}</a>
                </li>}
              </ul>
              <div className="flex items-center space-x-4 mt-5">
                {socialMediaData?.map((socialMedia) => (
                    <a
                        key={socialMedia.id}
                        href={socialMedia.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl sm:text-xl btn-glass rounded-lg"
                    >
                      <i className={`fab fa-${socialMedia.name.toLowerCase()}`}></i>
                    </a>
                ))}
              </div>

            </div>
          </div>
          <hr className={"bg-white my-10"}/>
          <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row space-y-5 md:space-y-0 lg:space-y-0">
            <p>&copy; 2024 Namangan viloyat Turizm boshqarmasi. Barcha huquqlar himoyalangan.</p>
            <p>{t("Sayt ishlab chiqaruvchi")} <a href={"Fazo"} target={"_blank"}>Fazo Software Service MCHJ</a></p>
          </div>
        </div>
      </footer>
  );
};
