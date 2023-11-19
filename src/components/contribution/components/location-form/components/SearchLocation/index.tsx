import { Search } from "lucide-react"

export const SearchLocation = () => {
  return (
    <div className="px-2 md:px-5 py-1 rounded-full flex items-center justify-between shadow-box border border-[#BEC0CA]">
      <p className="text-[#BEC0CA] text-sm">Pesquise um local...</p>
      <div className="rounded-full bg-linear p-2 shadow-buttons">
        <Search className="h-4 w-4 text-white" />
      </div>
    </div>
  )
}
