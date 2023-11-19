import { FooterMenu } from "@/components/footer-menu"
import { Header } from "@/components/header"
import { ContributionProvider } from "@/context/ContributionContext"
import "leaflet/dist/leaflet.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "GreenMate",
  description: "Seja um amigo da natureza",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} min-h-screen `}>
        <ContributionProvider>
          <Header />
          <div className="pb-16">{children}</div>
          <FooterMenu />
        </ContributionProvider>
      </body>
    </html>
  )
}
