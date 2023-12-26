import Link from "next/link"
import Image from "next/image"
import { DesktopNav } from "../DesktopNav"

export const Header = () => {
  return (
    <header className="mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center pt-5">
      <Link href="/">TrylleJan.dk</Link>
      <Image src="/hamburger.svg" alt="hamburger" width={50} height={50} />
      <DesktopNav/>
    </header>
  )
}