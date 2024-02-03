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
      <div className="fixed z-20 w-3/4 h-full inset-0 m-auto my-6">
        <div
          className="absolute top-2 right-2 z-20 cursor-pointer"
          onClick={() => setLargeImage(false)}
        >
          <IoClose className="bg-white text-gray-800 w-10 h-10 rounded-lg" />
        </div>
        <Image
          className="rounded-lg object-top"
          alt={ altText }
          src={ imageUrl }
          fill
          style={ { objectFit: "cover" } }
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
        />
      </div>
    </div>
  );
};

export default LargeImage;
