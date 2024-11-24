import React, { FC } from 'react';
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface ButtonProps {
  href?: string;
  text: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ href, text, className = "", ...props }) => {
  const t = useTranslations();

  const baseStyles = "inline-block uppercase font-baskervville text-green-500 border rounded border-green-500 px-4 py-2 md:px-10 md:py-3";
  const hoverStyles = "transition-all hover:bg-green-500 hover:text-white";

  const combinedStyles = `${baseStyles} ${href ? hoverStyles : ""} ${className}`.trim();

  return href ? (
      <Link
          {...props}
          href={href}
          className={combinedStyles}
      >
        {t(text)}
      </Link>
  ) : (
      <button
          {...props}
          className={combinedStyles}
      >
        {t(text)}
      </button>
  );
};
