"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GalleryPageType } from "@/app/lib/types";
import LargeImage from "../LargeImage";

type Props = {
  data: GalleryPageType;
  key: number;
};

const GalleryImage = (props: Props) => {
  const [largeImage, setLargeImage] = useState(false);
  const [imageDetails, setImageDetails] = useState({
    imageUrl: "",
    altText: "",
  });

  const { data, key } = props;

  const onClickHandler = (data: GalleryPageType) => {
    setLargeImage(true);
    setImageDetails({ imageUrl: data.source_url, altText: data.alt_text });
  };

  return (
    <>
      {largeImage ? (
        <LargeImage data={imageDetails} setLargeImage={setLargeImage} />
      ) : (
        <div
          key={key}
          className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          onClick={() => onClickHandler(data)}
        >
          <Image
            className="rounded-lg object-top overflow-hidden"
            src={data.source_url}
            alt={data.alt_text}
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
