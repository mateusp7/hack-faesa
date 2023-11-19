import { Search } from "lucide-react"

export const SearchInput = () => {
  return (
    <div className="px-2 md:px-5 md:ml-10 py-2 rounded-full flex items-center justify-between shadow-box border border-[#BEC0CA]">
      <input
        type="search"
        placeholder="Pesquise um local"
        className="placeholder:text-[#BEC0CA] text-sm lg:flex hidden"
      />
      <div className="rounded-full bg-linear p-3 shadow-buttons">
        <Search className="h-4 w-4 text-white" />
      </div>
    </div>
  )
}
