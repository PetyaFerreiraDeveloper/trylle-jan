"use client";
import React, { useState } from "react";
import Image from "next/image";
import LargeImage from "../LargeImage";

type Props = {
  photo: string;
  key: number;
};

const GalleryImage = (props: Props) => {
  const [largeImage, setLargeImage] = useState(false);
  const [imageDetails, setImageDetails] = useState({
    imageUrl: "",
    altText: "",
  });

  const { photo, key } = props;

  const onClickHandler = (photo: string) => {
    if (window.innerWidth >= 768) {
      setLargeImage(true);
      setImageDetails({ imageUrl: photo, altText: photo.slice(0,3).toString() });
    }
  };

  return (
    <>
      {largeImage ? (
        <LargeImage data={imageDetails} setLargeImage={setLargeImage} />
      ) : (
        <div
          key={key}
          className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          onClick={() => onClickHandler(photo)}
        >
          <Image
            className="rounded-lg object-top overflow-hidden"
            src={photo}
            alt={photo.slice(0,3).toString()}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </div>
      )}
    </>
  );
};

export default GalleryImage;
