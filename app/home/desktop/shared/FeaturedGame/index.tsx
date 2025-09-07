"use client";

import React, { useRef } from "react";
import Image from "next/image";
import COLORS from "@/app/constants/colors";
import IMAGES from "@/app/constants/images";

const FeaturedGame = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = [
    { id: 1, name: "Game 1", imageLink: IMAGES.featuredGame1 },
    { id: 2, name: "Game 2", imageLink: IMAGES.featuredGame2 },
    { id: 3, name: "Game 3", imageLink: IMAGES.featuredGame3 },
    { id: 4, name: "Game 4", imageLink: IMAGES.featuredGame4 },
    { id: 5, name: "Game 5", imageLink: IMAGES.featuredGame1 },
    { id: 6, name: "Game 6", imageLink: IMAGES.featuredGame2 },
    { id: 7, name: "Game 7", imageLink: IMAGES.featuredGame3 },
    { id: 8, name: "Game 8", imageLink: IMAGES.featuredGame4 },
    { id: 9, name: "Game 9", imageLink: IMAGES.featuredGame1 },
    { id: 10, name: "Game 10", imageLink: IMAGES.featuredGame2 },
    { id: 11, name: "Game 11", imageLink: IMAGES.featuredGame3 },
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
    <>
      {/* Mobile View */}
      <div className="px-6 pt-6 block md:hidden" style={{ backgroundColor: COLORS.tertiary }}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[12px] text-white">Featured Games</h2>
          <div className="flex items-center gap-1">
            <button onClick={() => scroll("left")} className="w-8 h-8 flex justify-center items-center">
              <Image src={IMAGES.iconLeft} alt="left" width={24} height={24} />
            </button>
            <button onClick={() => scroll("right")} className="w-8 h-8 flex justify-center items-center">
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
                  width={67}
                  height={30}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="px-20 py-10 hidden md:block" style={{ backgroundColor: COLORS.secondary }}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">Featured Games</h2>
          <div className="flex items-center gap-1">
            <button onClick={() => scroll("left")} className="w-8 h-8 flex justify-center items-center">
              <Image src={IMAGES.iconLeft} alt="left" width={24} height={24} />
            </button>
            <button onClick={() => scroll("right")} className="w-8 h-8 flex justify-center items-center">
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
                  width={176}
                  height={80}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedGame;
