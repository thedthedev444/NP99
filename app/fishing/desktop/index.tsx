"use client";
import Image from "next/image";
import IMAGES from "../../constants/images";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const tabs = ["Recommend", "Latest", "A-Z"];

const games = [
  {
    title: "BG",
    imgUrl: IMAGES.fishBG, // replace with actual image path or URL
  },
  {
    title: "CQ9",
    imgUrl: IMAGES.fishCQ9,
  },
  {
    title: "Dragoon Soft",
    imgUrl: IMAGES.fishDragoonSoft,
  },
  {
    title: "Fa Cai",
    imgUrl: IMAGES.fishFacai,
  },
  {
    title: "Jili",
    imgUrl: IMAGES.fishJili,
  },
  {
    title: "Joker",
    imgUrl: IMAGES.fishJoker,
  },
  {
    title: "Spade",
    imgUrl: IMAGES.fishSpade,
  },
  {
    title: "Vpower",
    imgUrl: IMAGES.fishVpower,
  },
];

const FishingDesktop = ({}) => {
  const [activeTab, setActiveTab] = useState<string>("Recommend");
  return (
    <>
      <Image
        src={IMAGES.fishBanner}
        alt={"fishing banner"}
        width={1920}
        height={600}
        priority
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div className="bg-zinc-900 text-white px-20 py-2 flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center space-x-2">
          <FiSearch className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-800 text-sm text-white placeholder-gray-400 rounded px-2 py-1 focus:outline-none"
          />
        </div>

        {/* Sort Tabs */}
        <div className="flex items-center text-sm space-x-4">
          <span className="text-gray-400">Sort :</span>
          <div className="flex items-center space-x-4 border-l border-gray-600 pl-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-0.5 ${
                  activeTab === tab
                    ? "border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen py-10">
        <div className="max-w-full mx-auto px-20">
          <div className="flex flex-wrap gap-2 justify-start">
            {games.map((game, index) => (
              <div
                key={index}
                className="flex-[0_0_calc(14.2857%-0.5rem)] bg-gradient-to-t from-gray-900 to-black rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={game.imgUrl}
                  alt={`Game ${index}`}
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FishingDesktop;
