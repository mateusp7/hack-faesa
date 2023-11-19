import { useContribution } from "@/hooks/useContribution"

interface LocationItemProps {
  location: string
  distance: string
}

export const LocationItem = ({ distance, location }: LocationItemProps) => {
  const { setLocation, setCurrentForm } = useContribution()

  const handleSetLocation = () => {
    setLocation(location)
    setCurrentForm("default_form")
  }

  return (
    <button
      onClick={handleSetLocation}
      className="border-b-2 w-full flex flex-col items-start mt-4 border-[#e6e6e8] pb-2"
    >
      <div className="text-[#151618] font-semibold text-sm">{location}</div>
      <span className="text-xs text-[#45464E]">
        {distance} km - {location}
      </span>
    </button>
  )
}
