"use client";
import Image from "next/image";
import TrustpilotWidget from "../Trustpilot";
import { useEffect, useRef, useState } from "react";
import { HtmlText } from "../HtmlText";

type Props = {
  text: string;
  imageUrl: string;
  secretBtn?: boolean;
};

export const PageContent = ({ text, imageUrl, secretBtn }: Props) => {
  const purgedText = text.replace(/\{[^{}]*\}|\([^()]*\)|\[[^[\]]*\]/g, "");

  return (
    <>
      <section className="relative flex w-full min-[1366px]:h-dvh items-start justify-center overflow-hidden flex-col lg:flex-row gap-6 px-0">
        <div className="w-full 2xl:w-2/3 h-dvh relative overflow-hidden">
          <Image
            className="w-full object-top"
            src={imageUrl}
            alt={"Hero image"}
            style={{ objectFit: "cover" }}
            priority={true}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute z-10 bottom-0 w-full h-40 flex bg-gradient-to-t from-white to-white/0"></div>
      </section>
      <section className="flex flex-col px-5 md:px-10 lg:px-20 xl:px-36 lg:text-xl">
        <HtmlText html={purgedText} />
      </section>
      {secretBtn ? (
        <a href="http://gg0.us/jang">
          <p className="p-10 -mb-10"></p>
        </a>
      ) : null}
    </>
  );
};
