"use client";
import { UpdatedReferenceCardDataType } from "@/app/referencer/page";
import React, { useRef } from "react";
import { ReferenceCard } from "../ReferenceCard";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

type Props = {
  data: UpdatedReferenceCardDataType[];
};

const ScrollBarReviews = (props: Props) => {
  const { data } = props;
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {

    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      <div className="hidden md:flex md:flex-col md:items-center snap-x">
        <div className="flex rounded-full border-2 border-[currentColor]">
          <button
            className="box-content flex h-12 w-12 items-center justify-center pl-4 transition-opacity disabled:opacity-50 cursor-pointer"
            onClick={() => scroll(-300)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="box-content flex h-12 w-12 items-center justify-center pr-4 transition-opacity disabled:opacity-50 cursor-pointer"
            onClick={() => scroll(300)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-8 md:flex-row overflow-x-scroll"
        ref={ ref }
      >
        { data.map((card) => (
          <ReferenceCard review={ card } key={ card.title } />
        )) }
      </div>
    </div>
  );
};

export default ScrollBarReviews;
