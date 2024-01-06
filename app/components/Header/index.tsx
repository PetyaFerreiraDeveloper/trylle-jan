"use client"; // This is a client component 👈🏽

import Link from "next/link"
import Image from "next/image"
import { DesktopNav } from "../DesktopNav"
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const menuItems = [
  { name: "Galleri", href: "/galleri" },
  { name: "Referencer", href: "/referencer" },
  { name: "Magiske Emil", href: "/magiske-emil" },
  { name: "Kontakt & Booking", href: "/kontakt" },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 w-full bg-white mx-auto px-5 md:px-10 lg:px-20 xl:px-36 flex justify-between items-center pt-12 pb-2 shadow-md">
      <Link href="/" className="text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer w-[200px]">TrylleJan.dk</Link>
      <Image src="/hamburger.svg" alt="hamburger" width={ 35 } height={ 35 } className="lg:hidden pb-2" onClick={ () => setMenuOpen(true) }/>
      <DesktopNav menuItems={ menuItems } />
      <Transition show={ menuOpen } as={ Fragment }>
        <Dialog
          onClose={ () => setMenuOpen(false) }
          className="fixed inset-y-0 right-0 z-50 h-screen w-screen min-[1090px]:hidden"
        >
          <Transition.Child
            as={ Fragment }
            enter="ease-out duration-175"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-175"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-white/80" />
          </Transition.Child>
          <Transition.Child
            as={ Fragment }
            enter="transition ease-in-out duration-175 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-500"
            leave="transition ease-in-out duration-175 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <nav className="fixed flex flex-col inset-y-0 right-0 w-full items-end overflow-hidden md:w-6/12 pt-12 bg-gray-800 px-5 md:px-10 lg:px-20 xl:px-36 text-white">
              <Image src="/close.svg" alt="close" width={ 35 } height={ 35 } className="lg:hidden pb-6 text-white" onClick={ () => setMenuOpen(false) }/>
              <ul className={"flex flex-col w-full gap-y-6"}>
                { menuItems.map((item, index) =>
                  <li key={ `menu-item-${ index }` }>
                    <Link
                      href={ item.href }
                      className={ 'text-white underline-offset-8 hover:underline cursor-pointer focus:outline-none ui-focus-visible:outline-none' } // ui-focus-visible:ring-2 ui-focus-visible:ring-blue
                      onClick={ () => setMenuOpen(false) }
                    >
                      { item.name.toUpperCase() }
                    </Link>
                  </li>
                ) }
              </ul>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}
