"use client"

import { ControllerContainer } from "@/components/controller"
import { TextArea } from "@/components/inputs/text-area"
import { ContentContributionSchema } from "@/configs/schemas"
import { ContentContributionData } from "@/configs/validations"
import { useContribution } from "@/hooks/useContribution"
import { zodResolver } from "@hookform/resolvers/zod"
import { Boxes, Calendar, Image as LucideImage, MapPin, X } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import { FooterItem } from "../../footer-item"
import { FooterItemImage } from "../../footer-item-image"
import { ImageContribution } from "../../image-contribution"
import { DateForm } from "../date-form"
import { InformationItem } from "./information-item"

interface DefaultFormProps {
  onCloseModal: Dispatch<SetStateAction<boolean>>
}

export const DefaultForm = ({ onCloseModal }: DefaultFormProps) => {
  const {
    onDeletePhoto,
    photo,
    setPhoto,
    setCurrentForm,
    attribute,
    location,
    date,
  } = useContribution()

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContentContributionData>({
    resolver: zodResolver(ContentContributionSchema),
    defaultValues: {
      content: "",
    },
  })

  const [showDate, setShowDate] = useState(false)

  const canEnableButton = photo.image && attribute && location && date

  const handleCreateContribution = (data: ContentContributionData) => {
    onCloseModal(false)
  }

  return (
    <div className="relative">
      <header className="flex flex-row items-center justify-between p-3 bg-[#F8F8F8] rounded-t-lg border-b border-[#BEC0CA]">
        <button type="button" onClick={() => onCloseModal(false)}>
          <X className="text-[#151618] w-7 h-7 hover:text-[#CC5F5F]" />
        </button>
        <h1 className="text-[#151618] font-semibold text-base">
          Criar publicação
        </h1>
        <button
          onClick={handleSubmit(handleCreateContribution)}
          disabled={!canEnableButton}
          type="submit"
          className={` text-white shadow-box text-sm px-4 py-1 rounded-full ${
            canEnableButton ? "bg-linear" : "bg-[#C2C2C2]"
          }`}
        >
          Contribuir
        </button>
      </header>
      <main className="p-3">
        <div className="flex items-start gap-4">
          <Image
            src="./assets/perfil-logado.svg"
            alt="Perfil logado"
            className="rounded-full object-cover"
            width={50}
            height={50}
          />
          <p className="text-[#45464E]">Juliana Nunes</p>
        </div>
        <ControllerContainer
          control={control}
          name="content"
          render={({ field }) => <TextArea error={errors.content} {...field} />}
        />
        {photo?.image && (
          <ImageContribution
            onRemovePhoto={onDeletePhoto}
            photo={photo.image as string}
          />
        )}
        <section className="mt-4 flex flex-row  flex-wrap gap-4">
          {attribute && <InformationItem content={attribute} />}
          {location && <InformationItem content={location} />}
          {date && <InformationItem content={date} />}
        </section>
        <footer className="flex flex-row justify-center mt-6 items-center gap-8">
          <FooterItemImage
            icon={<LucideImage className="text-white w-6 h-6" />}
            content="Mídia"
            setPhoto={setPhoto}
          />
          <FooterItem
            onClick={() => setCurrentForm("attribute_form")}
            icon={<Boxes className="text-white w-6 h-6" />}
            content="Atributo"
          />
          <FooterItem
            onClick={() => setCurrentForm("location_form")}
            icon={<MapPin className="text-white w-6 h-6" />}
            content="Local"
          />
          <FooterItem
            onClick={() => setShowDate((prev) => !prev)}
            icon={<Calendar className="text-white w-6 h-6" />}
            content="Data"
          />
        </footer>
      </main>
      {showDate && <DateForm setIsOpen={setShowDate} />}
    </div>
  )
}
