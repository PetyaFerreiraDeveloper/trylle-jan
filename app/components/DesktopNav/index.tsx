import Link from "next/link"

type Props = {
  menuItems: { name: string; href: string }[];
}
export const DesktopNav = ({ menuItems }: Props) => {

  return (
    <>
      <nav className="hidden lg:flex gap-x-6 font-bold">
        { menuItems.map((item, index) =>
          <Link
            key={ `menu-item-${ index }` }
            href={ item.href }
            className={ 'underline-offset-8 hover:underline cursor-pointer' }
          >
            { item.name.toUpperCase() }
          </Link>
        ) }
      </nav>
    </>
  )
}
