import { ReactNode } from "react"

import { Share2, ThumbsUp } from "lucide-react"
import Image, { StaticImageData } from "next/image"

export interface InformationPostItem {
  icon?: ReactNode
  content: string
}

interface PostProps {
  name: string
  city: string
  time: string
  content: string
  image_one: StaticImageData
  image_two: StaticImageData
  informationPost: InformationPostItem[]
  personPhoto: string
}

export const Post = ({
  city,
  name,
  time,
  content,
  image_one,
  image_two,
  informationPost,
  personPhoto,
}: PostProps) => {
  return (
    <div className="p-4 rounded-3xl flex flex-col items-start gap-4 w-full bg-white justify-between shadow-box border border-[#BEC0CA] mt-8">
      <header className="flex items-center gap-2 md:gap-4">
        <div className="border border-[#8AC926] rounded-full p-1 overflow-hidden w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
          <Image
            src={personPhoto}
            alt="Perfil postando contribuição"
            className="rounded-full w-fullh-full object-cover"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-sm md:text-base text-[#45464E] tracking-wide">
            {name} <span className="text-[#A6A8B1]">- {city}</span>
          </h1>
          <span className="text-[#BEC0CA] text-xs md:text-sm tracking-wide">
            {time}
          </span>
        </div>
      </header>
      <main>
        <p className="text-[#33343A] text-xs md:text-sm font-semibold tracking-wide leading-5 md:leading-6">
          {content}
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Image src={image_one} alt="Viagem 1" className="rounded-lg " />
          <Image
            src={image_two}
            alt="Viagem 1"
            className="rounded-lg md:flex hidden"
          />
        </section>
        <div className="mt-8 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          <ul className="flex flex-col gap-4">
            {informationPost.map((information) => (
              <li key={information.content} className="flex items-center gap-2">
                {information.icon}
                <p className="font-medium text-sm md:text-base text-[#45464E]">
                  {information.content}
                </p>
              </li>
            ))}
          </ul>
          <section className="flex flex-row items-center gap-5">
            <button className="p-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#A6A8B1] shadow-like-button flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-[#33343A]" />
            </button>
            <button className="p-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear shadow-buttons flex items-center justify-center">
              <Share2 className="w-6 h-6 text-white " />
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
