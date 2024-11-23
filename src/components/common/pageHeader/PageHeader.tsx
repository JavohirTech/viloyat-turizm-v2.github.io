import React, { FC } from 'react';
import { Breadcrumbs } from "@/components/common/breadcrumbs/Breadcrumbs";
import {useTranslations} from "next-intl";

interface PageHeaderProps {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, desc, children }) => {
  const t= useTranslations();
  return (
    <div className="w-full relative min-h-[30vh] bg-cover flex items-end" style={{ backgroundImage: "url('https://www.society.at/wordpress/wp-content/uploads/2022/05/5.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold my-5">{t(title)}</h1>
        <Breadcrumbs />
        <p className="text-sm sm:text-base lg:text-lg text-white">{t(desc)}</p>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
