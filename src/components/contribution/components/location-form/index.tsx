"use client"

import { useContribution } from "@/hooks/useContribution"
import { Navigation } from "lucide-react"
import { LocationItem } from "./components/LocationItem"
import { SearchLocation } from "./components/SearchLocation"

export const LocationForm = () => {
  const { setCurrentForm } = useContribution()

  return (
    <>
      <header className="flex flex-row items-center p-3 bg-[#F8F8F8] rounded-t-lg border-b border-[#BEC0CA]">
        <Navigation className="text-[#33343A] w-6 h-6" />
        <h1 className="text-[#151618] font-semibold text-base mx-auto">
          Localizações
        </h1>
        <button type="button" onClick={() => setCurrentForm("default_form")}>
          Cancelar
        </button>
      </header>
      <main className="mt-4 p-4">
        <SearchLocation />
        <LocationItem distance="2.0" location="Vitória - Espírito Santo" />
        <LocationItem distance="3.5" location="Vila Velha - Espírito Santo" />
        <LocationItem distance="6.5" location="Serra - Espírito Santo" />
      </main>
    </>
  )
}
