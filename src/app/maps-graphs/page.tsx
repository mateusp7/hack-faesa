"use client"

import LeafLetMap from "@/components/map"
import { InformationPostItem, Post } from "@/components/post"

import { Calendar, Flame, MapPin } from "lucide-react"

import Queimadas_one from "../../../public/assets/desmatamento-1.png"
import Queimadas_two from "../../../public/assets/desmatamento-2.png"

export default function MapsGraphs() {
  const objTemp: InformationPostItem[] = [
    {
      icon: <MapPin className="text-[#CC5F5F] w-6 h-6" />,
      content: "Vitória - ES - Brasil",
    },
    {
      icon: <Calendar className="text-[#519C66] w-6 h-6" />,
      content: "19/11/23 - 09:00",
    },
    {
      icon: <Flame className="text-[#CC5F5F] w-6 h-6" />,
      content: "Desmatamento",
    },
  ]

  return (
    <div className="w-full px-6 py-4">
      <div className="px-5 py-6 w-full rounded-3xl flex  bg-white justify-between shadow-box border border-[#BEC0CA] flex-col">
        <h1 className="text-[#45464E] mb-4 font-semibold text-sm md:text-xl tracking-wide">
          Mais informações sobre Vitória - ES
        </h1>
        <LeafLetMap className="h-[400px] md:h-[600px]" />
      </div>
      <div className="px-5 py-6 w-full rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-white justify-between shadow-box border border-[#BEC0CA] flex-col mt-4">
        <h1 className="text-[#45464E] col-span-full font-semibold text-sm md:text-xl tracking-wide">
          Saiba do que estão falando nessa área
        </h1>
        <Post
          name="Heitor Assad"
          personPhoto="./assets/heitor-foto.svg"
          city="Vitória - ES"
          time="Nesse instante"
          content="Muitos casos de incêndios nessas áreas, uma perca muito triste para nossa região."
          image_one={Queimadas_one}
          image_two={Queimadas_two}
          informationPost={objTemp}
        />
        <Post
          name="Hassan"
          personPhoto="./assets/hassan-foto.svg"
          city="Vitória - ES"
          time="Nesse instante"
          content="MEU DEUS!!! Que cena horrivel"
          image_one={Queimadas_one}
          image_two={Queimadas_two}
          informationPost={objTemp}
        />
        <Post
          name="Joseph"
          personPhoto="./assets/joseph-foto.svg"
          city="Vitória - ES"
          time="Nesse instante"
          content="Sem palavras..."
          image_one={Queimadas_one}
          image_two={Queimadas_two}
          informationPost={objTemp}
        />
      </div>
    </div>
  )
}
