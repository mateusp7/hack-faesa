import { SendContribution } from "@/components/contribution/send-contribution"
import { InformationPostItem, Post } from "@/components/post"
import { Deforestation } from "@/components/right-side/deforestation"
import { DestructionWaterSourcer } from "@/components/right-side/destruction-water-sources"
import { EnvironmentalEducation } from "@/components/right-side/environmental-education"

import { Calendar, Flame, MapPin, TreePine } from "lucide-react"
import Queimadas_one from "../../public/assets/desmatamento-1.png"
import Queimadas_two from "../../public/assets/desmatamento-2.png"

import Viagem1 from "../../public/assets/viagem-1.png"
import Viagem2 from "../../public/assets/viagem-2.png"

import dynamic from "next/dynamic"

const MapLiveDynamic = dynamic(
  () => import("../components/right-side/map-live/index"),
  {
    ssr: false,
  }
)

export default function Home() {
  const objTemp: InformationPostItem[] = [
    {
      icon: <MapPin className="text-[#CC5F5F] w-6 h-6" />,
      content: "Pedra Azul - ES - Brasil",
    },
    {
      icon: <Calendar className="text-[#519C66] w-6 h-6" />,
      content: "15/06/23 - 11:54",
    },
    {
      icon: <TreePine className="text-[#8AC926] w-6 h-6" />,
      content: "Trilha ecológica",
    },
  ]

  const objTempTwo: InformationPostItem[] = [
    objTemp[0],
    objTemp[1],
    {
      icon: <Flame className="text-[#CC5F5F] w-6 h-6" />,
      content: "Queimadas",
    },
  ]

  return (
    <div className="flex gap-4 w-full mt-0 md:mt-8 relative">
      <div className="w-full lg:w-3/5 bg-[#FAFAFA] px-6 py-4">
        <SendContribution />

        <Post
          name="Larissa Storch"
          personPhoto="./assets/carol-foto.svg"
          city="Pedra Azul"
          time="Há duas horas atras"
          content="Bela paisagem
          #Feliz #Viagem"
          image_one={Viagem1}
          image_two={Viagem2}
          informationPost={objTemp}
        />

        <Post
          name="Julia Machado"
          personPhoto="./assets/julia-foto.svg"
          city="Los Angeles"
          time="Há duas horas atras"
          content="Como é triste ver a destruição causada pelo homem
          #Tristeza #Queimadas"
          image_one={Queimadas_one}
          image_two={Queimadas_two}
          informationPost={objTempTwo}
        />
      </div>
      <div className="w-2/5 pr-6 lg:block hidden">
        <MapLiveDynamic />
        <EnvironmentalEducation />
        <DestructionWaterSourcer />
        <Deforestation />
      </div>
    </div>
  )
}
