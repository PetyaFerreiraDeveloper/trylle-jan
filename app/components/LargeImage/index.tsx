"use client";
import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

type Props = {
  data: {
    imageUrl: string;
    altText: string;
  };
  setLargeImage: (value: boolean) => void;
};

const LargeImage = (props: Props) => {
  const { imageUrl, altText } = props.data;
  const { setLargeImage } = props;
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="flex fixed z-10 inset-0 bg-white/80 opacity-100" onClick={ () => setLargeImage(false) }></div>
      <div
        className={"fixed z-20 inset-0 m-auto py-4 flex justify-center items-center" }
      >
      {/*<div className="fixed z-20 w-fit h-full inset-0 m-auto">*/}
        <div className={"relative"}>
          <div
            className="absolute top-2 right-2 z-20 cursor-pointer"
            onClick={() => setLargeImage(false)}
          >
            <IoClose className="bg-white text-gray-800 w-10 h-10 rounded-lg" />
          </div>
          <Image
            className="rounded-lg w-fit h-fit"
            alt={ altText }
            src={ imageUrl }
            width={ 860 }
            height={ 1280 }
          />
        </div>
      </div>
    </div>
  );
};

export default LargeImage;
