import { useContribution } from "@/hooks/useContribution"
import { ReactNode } from "react"

interface AttributeItemProps {
  icon: ReactNode
  content: string
  hasBorder?: boolean
}

export const AttributeItem = ({
  content,
  icon,
  hasBorder = true,
}: AttributeItemProps) => {
  const { setAttribute, setCurrentForm } = useContribution()

  const handleSelectAttribute = () => {
    setAttribute(content)
    setCurrentForm("default_form")
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleSelectAttribute}
        className={`flex  w-full pb-4 ${
          hasBorder && " border-b-2 border-[#BEC0CA]"
        }flex-row items-center gap-2 cursor-pointer text-[#33343A] text-base font-medium tracking-wide`}
      >
        {icon}
        {content}
      </button>
    </div>
  )
}
