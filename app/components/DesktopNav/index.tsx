import Link from "next/link"

export const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex gap-x-3 font-bold">
      <Link href="/galleri">{"Galleri".toUpperCase()}</Link>
      <Link href="/referencer">{"Referencer".toUpperCase()}</Link>
      <Link href="/magiske-emil">{"Magiske Emil".toUpperCase()}</Link>
      <Link href="/kontakt">{"Kontakt & Booking".toUpperCase()}</Link>
    </nav>
  )
}
