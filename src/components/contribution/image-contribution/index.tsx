"use client"

import { Trash } from "lucide-react"
import Image from "next/image"

interface ImageContributionProps {
  photo: string
  onRemovePhoto: () => void
}

export const ImageContribution = ({
  onRemovePhoto,
  photo,
}: ImageContributionProps) => {
  return (
    <div className="relative">
      <button
        onClick={onRemovePhoto}
        type="button"
        className="bg-[#F3F3F3] shadow-box rounded-full p-1 flex items-center justify-center w-12 h-12 absolute right-4 top-4 border border-[#45464E]"
      >
        <Trash className="w-5 h-5 text-[#CC5F5F]" />
      </button>

      <Image
        src={photo}
        width={400}
        height={400}
        alt="Image Preview"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  )
}
