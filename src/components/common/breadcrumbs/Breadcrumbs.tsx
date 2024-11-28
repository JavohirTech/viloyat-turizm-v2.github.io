"use client";

import React from "react";
import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/routing";
import {slugToText} from "@/helpers/slugToText";

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  const t = useTranslations();
  return (
      <nav className={"mt-5"}>
        <ul className="flex flex-row space-x-2 text-white w-full">
          <li className={"min-w-fit"}>
            <Link href="/">{t("home")}</Link>
          </li>
          {pathnames.map((value, index) => {
            const href = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
                <li key={href} className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href={href} className={"first-letter:uppercase w-full"}>{index <=0 ? t(value) : <p className={"w-1/2 line-clamp-1"}>
                    {slugToText(decodeURIComponent(value))}
                  </p>}</Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};
