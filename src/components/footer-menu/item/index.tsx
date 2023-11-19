"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export const FooterItem = ({
  children,
  title,
  href,
}: {
  children: ReactNode
  title: string
  href: string
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className="relative h-full flex flex-col items-center justify-center"
    >
      <div
        className={`${
          isActive ? "bg-[#888888]" : "bg-none"
        }  h-1 w-full absolute top-0 transition-all duration-200 ease-linear`}
      />
      {children}
      <p className="text-white font-medium text-base">{title}</p>
    </Link>
  )
}
