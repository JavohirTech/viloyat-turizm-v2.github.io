"use client"

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {useTranslations} from "next-intl";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activePage, setActivePage] = useState<number>(currentPage);
  const t = useTranslations();

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setActivePage(Number(page));
    }
  }, [searchParams]);

  const navigateToPage = (page: number) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("page", String(page));

    router.push(`${window.location.pathname}?${queryParams.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages: JSX.Element[] = [];

    const showEllipsis = (page: number) => (
        <span key={page} className="px-2">
        ...
      </span>
    );

    for (let i = 1; i <= totalPages; i++) {
      if (
          i === 1 ||
          i === totalPages ||
          Math.abs(i - activePage) <= 1
      ) {
        pages.push(
            <button
                key={i}
                className={`px-3 py-1  ${
                    i === activePage
                        ? "bg-green-500 text-white"
                        : "bg-white text-green-500 hover:bg-green-100"
                } rounded`}
                onClick={() => navigateToPage(i)}
            >
              {i}
            </button>
        );
      } else if (
          (i === activePage - 2 || i === activePage + 2) &&
          !pages.includes(showEllipsis(i))
      ) {
        pages.push(showEllipsis(i));
      }
    }

    return pages;
  };

  return (
      <div className="flex justify-center items-center space-x-2 mt-4 flex-wrap gap-2 font-baskervville text-xl">
        <button
            disabled={activePage === 1}
            onClick={() => navigateToPage(activePage - 1)}
            className={`px-3 py-1  rounded ${
                activePage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-green-500 hover:bg-green-100"
            }`}
        >
          {t("Oldingi")}
        </button>

        <div className="hidden sm:flex space-x-1">
          {renderPageNumbers()}
        </div>

        <div className="sm:hidden">
          <select
              value={activePage}
              onChange={(e) => navigateToPage(Number(e.target.value))}
              className=" px-3 py-1 rounded bg-white text-green-500 hover:bg-green-100"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <option key={page} value={page}>
                  {t("Sahifa")} {page}
                </option>
            ))}
          </select>
        </div>

        <button
            disabled={activePage === totalPages}
            onClick={() => navigateToPage(activePage + 1)}
            className={`px-3 py-1  rounded ${
                activePage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-green-500 hover:bg-green-100"
            }`}
        >
          {t("Keyingi")}
        </button>
      </div>
  );
};
