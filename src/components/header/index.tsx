import Image from "next/image"
import Link from "next/link"
import { SearchInput } from "./search"
import { User } from "./user"

export const Header = () => {
  return (
    <header className="p-6">
      <div className="flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center gap-4">
          <Image
            src="./assets/green-mate-logo.svg"
            alt="Logo do site"
            width={50}
            height={50}
            className="md:flex hidden"
          />
          <Image
            src="./assets/green-mate-text.svg"
            alt="Logo do site"
            width={150}
            height={150}
          />
        </Link>
        <div className=" flex flex-row items-center gap-2 md:gap-8">
          <SearchInput />
          <User />
        </div>
      </div>
    </header>
  )
}
