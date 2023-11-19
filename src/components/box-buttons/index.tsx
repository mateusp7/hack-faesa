import { ReactNode } from "react"

export const BoxButton = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={`bg-[#F4F4F4] p-1 rounded-lg flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  )
}
