import { BoxButton } from "@/components/box-buttons"
import { Bell, ChevronDown, Maximize } from "lucide-react"
import Image from "next/image"

export const User = () => {
  return (
    <div className="px-2 md:px-5 py-2 rounded-full flex items-center justify-between w-full lg:w-[300px] shadow-box border border-[#BEC0CA]">
      <div className="flex flex-row items-center justify-between w-full">
        <nav className=" flex-row gap-4 items-center mr-10 hidden lg:flex">
          <BoxButton>
            <Maximize className="w-6 h-6 text-[#45464E]" />
          </BoxButton>
          <BoxButton className="relative">
            <div className="rounded-full p-1 absolute -top-2 -right-3 bg-linear w-5 h-5 flex items-center justify-center text-xs text-white">
              3
            </div>
            <Bell className="w-6 h-6 text-[#45464E]" />
          </BoxButton>
        </nav>
        <div className="flex flex-row gap-2 items-center">
          <ChevronDown className="w-6 h-6 text-[#33343A] hidden md:flex" />
          <Image
            src="./assets/perfil-logado.svg"
            alt="Perfil logado"
            className="rounded-full w-10 h-10 md:w-12 md:h-12"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}
