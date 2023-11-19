"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { FormContribution } from "../form-contribution"

export const SendContribution = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="px-5 py-2 rounded-3xl flex items-center w-full bg-white justify-between shadow-box border border-[#BEC0CA]">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            src="./assets/perfil-logado.svg"
            alt="Perfil logado"
            className="rounded-full hidden md:flex"
            width={60}
            height={60}
          />
          <p className="text-[#BEC0CA] text-sm md:text-base">
            Inicie uma contribuição
          </p>
        </div>

        <Dialog.Root open={isOpenModal}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              onClick={() => setIsOpenModal(true)}
              className="flex uppercase font-medium tracking-wide text-white rounded-full flex-row gap-1 items-center bg-linear p-1 md:px-6 md:py-1"
            >
              <span className="hidden md:flex">Contribuir</span>
              <Plus className="w-6 h-6 text-white " />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 fixed inset-0 z-20" />
            <Dialog.Content className=" fixed rounded-lg top-[50%] z-30 left-[50%] w-[600px] translate-x-[-50%] translate-y-[-50%] bg-white focus:outline-none">
              <FormContribution onCloseModal={setIsOpenModal} />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  )
}
