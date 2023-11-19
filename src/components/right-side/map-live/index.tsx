"use client"

import LeafLetMap from "@/components/map"
import { Maximize } from "lucide-react"
import { useRouter } from "next/navigation"

const MapLive = () => {
  const router = useRouter()

  const handleGoToMaps = () => {
    router.push("/maps")
  }

  return (
    <div className="px-5 py-6 w-full rounded-3xl flex  bg-white justify-between shadow-box border border-[#BEC0CA] flex-col">
      <header className="flex flex-row items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <h1 className="text-[#45464E] font-semibold text-lg tracking-wide">
            Informações ao vivo
          </h1>
          <span className="bg-red-500 w-fit rounded px-2 text-base text-white uppercase flex flex-row items-center gap-1">
            <div className="bg-white  w-4 h-4 rounded-full" />
            LIVE
          </span>
        </div>
        <button
          onClick={handleGoToMaps}
          className="rounded-full p-1 hover:scale-105 transition-transform duration-200 ease-linear bg-linear shadow-buttons w-12 h-12 flex items-center justify-center"
        >
          <Maximize className="text-white w-7 h-7" />
        </button>
      </header>
      <LeafLetMap className="w-full h-[400px]" />
    </div>
  )
}

export default MapLive
