"use client";

import Link from "next/link";
import clsx from "clsx";
import { DesktopNav } from "../DesktopNav";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Hamburger from "@/app/components/Hamburger";
import Image from "next/image";

const menuItems = [
  { name: "Forside", href: "/" },
  { name: "Galleri", href: "/galleri" },
  { name: "Referencer", href: "/referencer" },
  { name: "Magiske Emil", href: "/290-2" },
  { name: "Kontakt & Booking", href: "/kontakt" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed z-20 top-0 w-full mx-auto px-5 md:px-10 xl:px-36 flex justify-between items-center py-2 md:py-5 shadow-md bg-white/60">
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
              priority
              className=""
            />
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-bold self-end">
            Tryllejan.dk
          </span>
        </Link>
        <DesktopNav menuItems={menuItems} />
        <Transition show={menuOpen} as={Fragment}>
          <Dialog
            onClose={() => setMenuOpen(false)}
            className="fixed inset-y-0 right-0 z-40 h-screen w-screen lg:hidden"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-175"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-175"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="hidden md:flex absolute inset-0 bg-white/80" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-175 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-500"
              leave="transition ease-in-out duration-175 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <nav className="fixed flex flex-col inset-y-0 right-0 w-full items-end overflow-hidden md:w-6/12 pt-10 bg-gray-800 px-5 md:px-10 lg:px-20 xl:px-36 text-white">
                <ul className={"flex flex-col w-full gap-y-6 pt-12"}>
                  {menuItems.map((item, index) => (
                    <li
                      key={`menu-item-${index}`}
                      className={"text-white fill-white cursor-pointer"}
                    >
                      <Link
                        href={item.href}
                        className={
                          "text-white underline-offset-8 hover:underline focus:outline-none ui-focus-visible:outline-none"
                        } // ui-focus-visible:ring-2 ui-focus-visible:ring-blue
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Transition.Child>
          </Dialog>
        </Transition>
      </header>
      <div
        className={clsx(
          "fixed top-0 pt-5 md:pt-10 px-5 md:px-10 right-0 z-50 lg:hidden",
          menuOpen ? "text-white" : "text-black"
        )}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={
            "focus-outline mr-2 lg:hidden p-2 hover:text-hover sm:pl-0"
          }
          aria-label={menuOpen ? "close" : "open"}
          data-testid="menu-tablet"
        >
          <Hamburger open={menuOpen} animate />
        </button>
      </div>
    </>
  );
};
