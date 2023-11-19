"use client"

import { ReactNode } from "react"

interface FooterItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  icon: ReactNode
}

export const FooterItem = ({ content, icon, ...props }: FooterItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        className="bg-linear shadow-buttons flex justify-center items-center rounded-full p-2 w-12 h-12"
        {...props}
      >
        {icon}
      </button>
      <p className="text-[#45464E] text-sm font-medium ">{content} </p>
    </div>
  )
}
