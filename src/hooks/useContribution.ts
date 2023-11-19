import { ContributionContext } from "@/context/ContributionContext"
import { useContext } from "react"

export const useContribution = () => {
  return useContext(ContributionContext)
}
