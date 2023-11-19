"use client"

import { StaticImageData } from "next/image"
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react"

export interface Photo {
  image: string | null | StaticImageData
}

interface FooterItemImageProps {
  content: string
  icon: ReactNode
  setPhoto: Dispatch<SetStateAction<Photo>>
}

export const FooterItemImage = ({
  content,
  icon,
  setPhoto,
}: FooterItemImageProps) => {
  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    if (!target.files) return

    const file = target.files?.[0]

    if (
      file &&
      target.validity.valid &&
      target.files &&
      target.files.length > 0
    ) {
      const imageURL = URL.createObjectURL(file)
      setPhoto({
        image: imageURL,
      })
    }
  }

  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer">
      <label className="bg-linear shadow-buttons flex justify-center items-center rounded-full p-2 w-12 h-12 cursor-pointer">
        {icon}
        <input type="file" required onChange={onChange} hidden />
      </label>
      <p className="text-[#45464E] text-sm font-medium cursor-pointer">
        {content}{" "}
      </p>
    </div>
  )
}
