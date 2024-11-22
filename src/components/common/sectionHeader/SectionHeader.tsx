import React, {FC} from 'react'

interface SectionHeaderProps {
  title: string;
  desc: string;
  rightSide?: React.ReactNode;
}

export const SectionHeader:FC<SectionHeaderProps> = ({title, desc, rightSide}) => {
  return (
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-baskervville text-5xl font-bold text-green-500 relative z-10">{title}</h2>
            <p className="text-gray-500">{desc}</p>
          </div>
          <div>
            {rightSide}
          </div>
        </div>
      </div>
  )
}
