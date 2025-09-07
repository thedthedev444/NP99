"use client";

import { useRef } from "react";
import Image from "next/image";
import COLORS from "@/app/constants/colors";
import IMAGES from "@/app/constants/images";

const Recommended = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = [
    { id: 1, name: "AG", imageLink: IMAGES.gameAg },
    { id: 2, name: "Aviatrix", imageLink: IMAGES.gameAviatrix },
    { id: 3, name: "BTG", imageLink: IMAGES.gameBtg },
    { id: 4, name: "CQ9", imageLink: IMAGES.gameCq9 },
    { id: 5, name: "Dragon", imageLink: IMAGES.gameDragon },
    { id: 6, name: "Fa Cai", imageLink: IMAGES.gameFacai },
    { id: 7, name: "Imperium", imageLink: IMAGES.gameImperium },
    { id: 8, name: "JILI", imageLink: IMAGES.gamejili },
    { id: 9, name: "Joker", imageLink: IMAGES.gameJoker },
    { id: 10, name: "King Maker", imageLink: IMAGES.gameKingmaker },
    { id: 11, name: "Live 22", imageLink: IMAGES.gameLive22 },
    { id: 12, name: "Net Ent", imageLink: IMAGES.gameNetEnt },
    { id: 13, name: "Nextspin", imageLink: IMAGES.gameNextSpin },
    { id: 14, name: "No Limit", imageLink: IMAGES.gameNoLimit },
    { id: 15, name: "Prag", imageLink: IMAGES.gamePrag },
    { id: 16, name: "Red Tiger", imageLink: IMAGES.gameRedTiger },
    { id: 17, name: "Spade", imageLink: IMAGES.gameSpade },
    { id: 18, name: "V Power", imageLink: IMAGES.gameVpower },
    { id: 19, name: "WM", imageLink: IMAGES.gameWm },
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
      <div className="block md:hidden" style={{ backgroundColor: COLORS.tertiary }}>
        <div className="overflow-x-auto scroll-hide p-4" ref={scrollRef}>
          <div
            className="grid gap-4"
            style={{
              gridAutoFlow: "column",
              gridTemplateRows: "repeat(2, auto)",
              gridAutoColumns: "min-content",
            }}
          >
            {data.map((item) => (
              <div key={item.id} className="w-[104px] flex flex-col items-center">
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

      {/* Desktop View */}
      <div className="px-20 py-10 hidden md:block" style={{ backgroundColor: COLORS.secondary }}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">Recommended</h2>
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

export default Recommended;
