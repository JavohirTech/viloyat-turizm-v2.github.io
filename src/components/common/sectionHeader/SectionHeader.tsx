import React, {FC} from 'react'

interface SectionHeaderProps {
  title: string;
  desc: string;
  rightSide: React.ReactNode;
}

export const SectionHeader:FC<SectionHeaderProps> = ({title, desc, rightSide}) => {
  return (
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500">{desc}</p>
          </div>
          <div>
            {rightSide}
          </div>
        </div>
      </div>
  )
}
