import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col gap-5 justify-center items-center bg-gray-800 text-white mx-auto w-full py-5 px-5 md:px-10 lg:px-20 xl:px-36 text-sm mt-10`}
    >
      <div className="flex gap-4 text-2xl">
        <a href="https://www.facebook.com/TrylleJan">
          <p className="p-5">
            <FaFacebookF />
          </p>
        </a>
        <a href="mailto:info@tryllejan.dk">
          <p className="p-5">
            <MdOutlineMarkEmailRead />
          </p>
        </a>
        <a href="tel:40730193">
          <p className="p-5">
            <BsTelephoneOutboundFill />
          </p>
        </a>
      </div>

      <p>
        &copy; TrylleJan {new Date().getFullYear()}. Alle rettigheder
        forbeholdt.
      </p>
    </footer>
  );
};

export default Footer;
