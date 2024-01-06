import Link from "next/link"

const menuItems = [
  { name: "Galleri", href: "/galleri" },
  { name: "Referencer", href: "/referencer" },
  { name: "Magiske Emil", href: "/magiske-emil" },
  { name: "Kontakt & Booking", href: "/kontakt" },
]
export const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex gap-x-6 font-bold">
      {menuItems.map( (item, index) =>
        <Link key={`menu-item-${index}`} href={item.href}>{item.name.toUpperCase()}</Link>
      )}
    </nav>
  )
}
