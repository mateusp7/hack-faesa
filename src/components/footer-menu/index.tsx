import { Home, LocateFixed } from "lucide-react"
import { FooterItem } from "./item"

export const FooterMenu = () => {
  return (
    <div className="fixed md:hidden h-16 gap-12 bottom-0 left-0 right-0 bg-[#151618] z-50 flex items-center justify-center">
      <FooterItem title="Início" href="/">
        <Home className="text-white w-6 h-6" />
      </FooterItem>
      <FooterItem title="Mapa" href="/maps-graphs">
        <LocateFixed className="text-white w-6 h-6" />
      </FooterItem>
    </div>
  )
}
