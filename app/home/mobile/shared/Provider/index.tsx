"use client";

import { useRef } from "react";
import Image from "next/image";
import COLORS from "@/app/constants/colors";
import IMAGES from "@/app/constants/images";

const Provider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = [
    { id: 1, name: "AG", imageLink: IMAGES.providerAG },
    { id: 2, name: "allbet", imageLink: IMAGES.providerAllbet },
    { id: 3, name: "aviatrix", imageLink: IMAGES.providerAviatrix },
    { id: 4, name: "BG", imageLink: IMAGES.providerBG },
    { id: 5, name: "big-time", imageLink: IMAGES.providerBigTime },
    { id: 6, name: "CMD", imageLink: IMAGES.providerCMD },
    { id: 7, name: "CQ9", imageLink: IMAGES.providerCQ9 },
    { id: 8, name: "DB", imageLink: IMAGES.providerDB },
    { id: 9, name: "DG", imageLink: IMAGES.providerDG },
    { id: 10, name: "dragoonsoft", imageLink: IMAGES.providerDragoonsoft },
    { id: 11, name: "evo", imageLink: IMAGES.providerEvo },
    { id: 12, name: "fachai", imageLink: IMAGES.providerFachai },
    { id: 13, name: "imperium", imageLink: IMAGES.providerImperium },
    { id: 14, name: "jili", imageLink: IMAGES.providerJili },
    { id: 15, name: "joker", imageLink: IMAGES.providerJoker },
    { id: 16, name: "king", imageLink: IMAGES.providerKing },
    { id: 17, name: "kingmaker", imageLink: IMAGES.providerKingmaker },
    { id: 18, name: "maxbet", imageLink: IMAGES.providerMaxbet },
    { id: 19, name: "netent", imageLink: IMAGES.providerNetent },
    { id: 20, name: "nextspin", imageLink: IMAGES.providerNextspin },
    { id: 21, name: "nolimit", imageLink: IMAGES.providerNolimit },
    { id: 22, name: "prag", imageLink: IMAGES.providerPrag },
    { id: 23, name: "red-tiger", imageLink: IMAGES.providerRedtiger },
    { id: 24, name: "saba", imageLink: IMAGES.providerSaba },
    { id: 25, name: "sexy", imageLink: IMAGES.providerSexy },
    { id: 26, name: "spadegaming", imageLink: IMAGES.providerSpadegaming },
    { id: 27, name: "Vpower", imageLink: IMAGES.providerVpower },
    { id: 28, name: "WM", imageLink: IMAGES.providerWM },
    { id: 29, name: "YB", imageLink: IMAGES.providerYB }, // fixed duplicate ID
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 pt-6 block md:hidden" style={{ backgroundColor: COLORS.tertiary }}>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[12px] text-white">{"Provider"}</h2>
        <div className="flex items-center gap-1">
          <button
            className="w-8 h-8 rounded-md flex justify-center items-center"
            onClick={() => scroll("left")}
          >
            <Image src={IMAGES.iconLeft} alt="left" width={24} height={24} />
          </button>
          <button
            className="w-8 h-8 rounded-md flex justify-center items-center"
            onClick={() => scroll("right")}
          >
            <Image src={IMAGES.iconRight} alt="right" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scroll-hide mt-4" ref={scrollRef}>
        <div className="flex gap-5">
          {data.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <Image
                src={item.imageLink}
                alt={item.name}
                width={100}
                height={80}
                className="rounded-md"
              />
              {/* Optional label */}
              {/* <p className="text-center mt-1 text-sm text-white">{item.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provider;
