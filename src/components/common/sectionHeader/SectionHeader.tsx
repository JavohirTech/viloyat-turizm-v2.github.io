import React, { FC } from 'react';

interface SectionHeaderProps {
  title: string;
  desc: string;
  rightSide?: React.ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, desc, rightSide }) => {
  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="font-baskervville text-3xl md:text-5xl font-bold text-green-500 relative z-10">{title}</h2>
          <p className="text-gray-500 text-sm md:text-base">{desc}</p>
        </div>
        <div className="mt-4 md:mt-0">
          {rightSide}
        </div>
      </div>
    </div>
  );
};
