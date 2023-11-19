"use client"

import { CurrentFormType } from "@/context/ContributionContext"
import { useContribution } from "@/hooks/useContribution"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { AttributeForm } from "../components/attribute-form"
import { DefaultForm } from "../components/default-form"
import { LocationForm } from "../components/location-form"

interface FormContributionProps {
  onCloseModal: Dispatch<SetStateAction<boolean>>
}

export const FormContribution = ({ onCloseModal }: FormContributionProps) => {
  const { currentForm } = useContribution()

  const mappedForm: Record<CurrentFormType, ReactNode> = {
    default_form: <DefaultForm onCloseModal={onCloseModal} />,
    attribute_form: <AttributeForm />,
    location_form: <LocationForm />,
  }

  return (
    <div className="h-full md:max-h-[85vh] overflow-y-auto">
      {mappedForm[currentForm]}
    </div>
  )
}
