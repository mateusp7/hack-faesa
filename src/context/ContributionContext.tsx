"use client"

import { Photo } from "@/components/contribution/footer-item-image"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react"

export type CurrentFormType =
  | "default_form"
  | "attribute_form"
  | "location_form"

type ContributionContextData = {
  photo: Photo
  currentForm: CurrentFormType
  attribute: string
  location: string
  date: string
  setCurrentForm: Dispatch<SetStateAction<CurrentFormType>>
  setDate: Dispatch<SetStateAction<string>>
  setLocation: Dispatch<SetStateAction<string>>
  setPhoto: Dispatch<SetStateAction<Photo>>
  setAttribute: Dispatch<SetStateAction<string>>
  onDeletePhoto: () => void
}

export const ContributionContext = createContext({} as ContributionContextData)

export const ContributionProvider = ({ children }: { children: ReactNode }) => {
  const [currentForm, setCurrentForm] =
    useState<CurrentFormType>("default_form")

  const [photo, setPhoto] = useState<Photo>({
    image: null,
  })
  const [attribute, setAttribute] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  const onDeletePhoto = () => {
    setPhoto({
      image: null,
    })
  }

  return (
    <ContributionContext.Provider
      value={{
        photo,
        currentForm,
        attribute,
        location,
        date,
        setDate,
        setAttribute,
        setLocation,
        setCurrentForm,
        setPhoto,
        onDeletePhoto,
      }}
    >
      {children}
    </ContributionContext.Provider>
  )
}
