import { useContribution } from "@/hooks/useContribution"
import {
  Axe,
  Bird,
  ChevronLeft,
  Factory,
  Flame,
  Footprints,
  Globe,
  Leaf,
  Mountain,
  Shrub,
  Trash,
  Trees,
  Waves,
} from "lucide-react"
import { AttributeHeader } from "./components/attribute-header"
import { AttributeItem } from "./components/attribute-item"

export const AttributeForm = () => {
  const { setCurrentForm } = useContribution()

  return (
    <>
      <header className="flex flex-row items-center p-3 bg-[#F8F8F8] rounded-t-lg border-b border-[#BEC0CA]">
        <button type="button" onClick={() => setCurrentForm("default_form")}>
          <ChevronLeft className="text-[#151618] w-7 h-7 hover:text-[#CC5F5F]" />
        </button>
        <h1 className="text-[#151618] font-semibold text-base mx-auto">
          Escolha a característica da sua foto
        </h1>
      </header>
      <main className="mt-4">
        <AttributeHeader title="Atividades" />
        <ul className="px-4 py-2 mt-2 flex flex-col gap-4">
          <li>
            <AttributeItem
              content="Caminhada Ecológica"
              icon={<Footprints className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Replantio"
              icon={<Shrub className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Coleta de Lixo"
              icon={<Trash className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Limpeza de praias"
              icon={<Waves className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Educação Ambiental"
              icon={<Globe className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Turismo Ecológico"
              icon={<Leaf className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Passeios"
              icon={<Footprints className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Trilha Ecológica"
              icon={<Footprints className="text-[#33343A] h-7 w-7" />}
              hasBorder={false}
            />
          </li>
        </ul>
        <AttributeHeader title="Controles" />
        <ul className="px-4 py-2 mt-2 flex flex-col gap-4">
          <li>
            <AttributeItem
              content="Desmatamento"
              icon={<Trees className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Incêndio"
              icon={<Flame className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Queimadas"
              icon={<Flame className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Enchentes"
              icon={<Waves className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Corte ilegal"
              icon={<Axe className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Destruição de manânciais"
              icon={<Waves className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Poluição"
              icon={<Factory className="text-[#33343A] h-7 w-7" />}
            />
          </li>
          <li>
            <AttributeItem
              content="Erosão"
              icon={<Mountain className="text-[#33343A] h-7 w-7" />}
              hasBorder={false}
            />
          </li>
          <li>
            <AttributeItem
              content="Extinção de espécies"
              icon={<Bird className="text-[#33343A] h-7 w-7" />}
              hasBorder={false}
            />
          </li>
        </ul>
      </main>
    </>
  )
}
