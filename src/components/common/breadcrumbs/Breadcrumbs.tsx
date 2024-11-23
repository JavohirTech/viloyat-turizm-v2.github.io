"use client";

import React from "react";
import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/routing";

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  const t = useTranslations();


  return (
      <nav>
        <ul className="flex space-x-2 text-white">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          {pathnames.map((value, index) => {
            const href = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
                <li key={href} className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href={href}>{t(decodeURIComponent(value))}</Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};
