import React from "react";

const Footer = () => {
  return (
    <div className={`flex flex-col justify-center items-center bg-gray-800 text-white mx-auto w-full py-5 px-5 md:px-10 lg:px-20 xl:px-36 text-sm mt-10` }>
      <p >Contact: info@TrylleJan.dk | Phone: 40 73 01 93</p>
      <p>&copy; TrylleJan {new Date().getFullYear()}. All rights reserved.</p>
    </div>
  );
};

export default Footer;
