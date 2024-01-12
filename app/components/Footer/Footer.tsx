import React from "react";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col gap-5 justify-center items-center bg-gray-800 text-white mx-auto w-full py-5 px-5 md:px-10 lg:px-20 xl:px-36 text-sm mt-10`}
    >
      <div className="flex gap-4">
        <p>
          <span>Email: </span>
          <a href="emailto:">info@tryllejan.dk</a>
        </p>
        <p>
          <span>Tlf: </span>
          <a href="tel">40 73 01 93</a>
        </p>
      </div>
      <p>&copy; TrylleJan {new Date().getFullYear()}. Alle rettigheder forbeholdt.</p>
    </footer>
  );
};

export default Footer;
