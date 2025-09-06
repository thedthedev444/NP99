"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import COLORS from "@/app/constants/colors";
import IMAGES from "@/app/constants/images";

const UpcomingMatch = ({ }) => {
  const data = [
    {
      id: 1,
      name: "ICC Champion Trophy 2025",
      bgImage: IMAGES.upcomingBg1,
      countryImage1: IMAGES.iconBangladesh,
      countryName1: "Bangladesh",
      countryImage2: IMAGES.iconIndia,
      countryName2: "India",
      dateTime: "20 Feb 2025 | 8.00PM",
    },
    {
      id: 2,
      name: "ICC Champion Trophy 2025",
      bgImage: IMAGES.upcomingBg2,
      countryImage1: IMAGES.iconIndonesia,
      countryName1: "Indonesia",
      countryImage2: IMAGES.iconThailand,
      countryName2: "Thailand",
      dateTime: "8 March 2025 | 7.30PM",
    },
    {
      id: 3,
      name: "ICC Champion Trophy 2025",
      bgImage: IMAGES.upcomingBg1,
      countryImage1: IMAGES.iconBangladesh,
      countryName1: "Bangladesh",
      countryImage2: IMAGES.iconIndia,
      countryName2: "India",
      dateTime: "20 Feb 2025 | 8.00PM",
    },
    {
      id: 4,
      name: "ICC Champion Trophy 2025",
      bgImage: IMAGES.upcomingBg2,
      countryImage1: IMAGES.iconIndonesia,
      countryName1: "Indonesia",
      countryImage2: IMAGES.iconThailand,
      countryName2: "Thailand",
      dateTime: "8 March 2025 | 7.30PM",
    },
  ];

  const scroll = (direction: string) => {
    const container = document.getElementById("scroll-box-upcoming-match");
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };
  return (
    <>

      <div className="px-6 pt-6 block md:hidden" style={{ backgroundColor: COLORS.tertiary }}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[12px] text-white">{"Upcoming Match"}</h2>
          </div>
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

        <div
          className="overflow-x-auto scroll-hide mt-4"
          id="scroll-box-upcoming-match"
        >
          <div className="flex gap-5">
            {data.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div
                  className="relative w-[330px] h-[180px] rounded-2xl overflow-hidden shadow-2xl text-white bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 grid grid-cols-3 h-full items-center p-6 text-white">
                    {/* Left Column - Bangladesh */}
                    <div className="flex flex-col items-center">
                      <img
                        src={item.countryImage1}
                        alt={item.countryName1}
                        className="w-10 h-10 rounded-md border border-white"
                      />
                      <span
                        className="mt-2 font-semibold"
                        style={{ color: COLORS.primary, fontSize: 12 }}
                      >
                        {item.countryName1}
                      </span>
                    </div>

                    {/* Middle Column - Title, Time, Button */}
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h2 className="text-[12px] font-bold text-center">
                        {item.name}
                      </h2>
                      <p className="text-[9px] text-center">{item.dateTime}</p>
                      <span className="text-[12px] font-bold mt-1 mb-1">VS</span>
                      <button
                        className="mt-2 hover:bg-orange-600 text-black font-bold py-2 px-2 rounded-md"
                        style={{ backgroundColor: COLORS.primary, fontSize: 12 }}
                      >
                        Bet Now
                      </button>
                    </div>

                    {/* Right Column - India */}
                    <div className="flex flex-col items-center">
                      <img
                        src={item.countryImage2}
                        alt={item.countryName2}
                        className="w-10 h-10 rounded-md border border-white"
                      />
                      <span
                        className="mt-2 font-semibold"
                        style={{ color: COLORS.primary, fontSize: 12 }}
                      >
                        {item.countryName2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>





      <div className="px-20 py-10 hidden md:block" style={{ backgroundColor: COLORS.tertiary }}>
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="font-bold text-xl">{"Upcoming Match"}</h2>
          </div>
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

        <div
          className="overflow-x-auto scroll-hide mt-4"
          id="scroll-box-upcoming-match"
        >
          <div className="flex gap-5">
            {data.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div
                  className="relative w-[630px] h-[250px] rounded-2xl overflow-hidden shadow-2xl text-white bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 grid grid-cols-3 h-full items-center p-6 text-white">
                    {/* Left Column - Bangladesh */}
                    <div className="flex flex-col items-center">
                      <img
                        src={item.countryImage1}
                        alt={item.countryName1}
                        className="w-20 h-20 rounded-md border border-white"
                      />
                      <span
                        className="mt-2 font-semibold"
                        style={{ color: COLORS.primary, fontSize: 20 }}
                      >
                        {item.countryName1}
                      </span>
                    </div>

                    {/* Middle Column - Title, Time, Button */}
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h2 className="text-lg font-bold text-center">
                        {item.name}
                      </h2>
                      <p className="text-sm text-center">{item.dateTime}</p>
                      <span className="text-lg font-bold mt-1 mb-1">VS</span>
                      <button
                        className="mt-2 hover:bg-orange-600 text-black font-bold py-2 px-6 rounded-md"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        Bet Now
                      </button>
                    </div>

                    {/* Right Column - India */}
                    <div className="flex flex-col items-center">
                      <img
                        src={item.countryImage2}
                        alt={item.countryName2}
                        className="w-20 h-20 rounded-md border border-white"
                      />
                      <span
                        className="mt-2 font-semibold"
                        style={{ color: COLORS.primary, fontSize: 20 }}
                      >
                        {item.countryName2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default UpcomingMatch;
