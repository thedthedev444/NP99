"use client";
import React, { useState } from "react";
import IMAGES from "../constants/images";
import COLORS from "../constants/colors";
import Image from "next/image";

// Replace these paths with your actual image imports or URLs
const flags = [
  {
    id: "us",
    activeIcon: IMAGES.flagUsa,
    inactiveIcon: IMAGES.flagUsa2,
  },
  {
    id: "np",
    activeIcon: IMAGES.flagNepal,
    inactiveIcon: IMAGES.flagNepal2,
  },
  {
    id: "my",
    activeIcon: IMAGES.flagMalaysia,
    inactiveIcon: IMAGES.flagMalaysia2,
  },
  {
    id: "cn",
    activeIcon: IMAGES.flagChina,
    inactiveIcon: IMAGES.flagChina2,
  },
  {
    id: "kr",
    activeIcon: IMAGES.flagSouthKorea,
    inactiveIcon: IMAGES.flagSouthKorea2,
  },
  {
    id: "in",
    activeIcon: IMAGES.flagIndia,
    inactiveIcon: IMAGES.flagIndia2,
  },
  {
    id: "jp",
    activeIcon: IMAGES.flagJapan,
    inactiveIcon: IMAGES.flagJapan2,
  },
];

const ContactUs = () => {
  const [activeFlag, setActiveFlag] = useState("us");

  return (
    <div className="px-4 py-10 md:px-20 md:py-20">
      <h2 className="font-bold text-xl">Contact Us</h2>
      <div className="text-white py-10 text-center bg-transparent md:bg-[#1f1f1f]">
        <p className="text-lg font-medium">
          Our support team is available to assist you around the clock,
          <br />
          24 hours a day, 7 days a week.
        </p>

        <p className="text-sm text-gray-400 mt-6">
          Choose your preferred language below.
        </p>

        <div className="flex justify-center mt-6 space-x-4">
          {flags.map((flag) => (
            <button
              key={flag.id}
              onClick={() => setActiveFlag(flag.id)}
              className="w-10 h-10"
            >
              <img
                src={
                  activeFlag === flag.id ? flag.activeIcon : flag.inactiveIcon
                }
                alt={`${flag.id} flag`}
                className="w-full h-full object-cover rounded-full transition"
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-8 flex-wrap">
          <div className="bg-[#111] rounded-md px-6 py-4 text-center flex flex-col items-center w-40">
            <p className="text-orange-500 font-semibold text-lg mb-2">
              LiveChat
            </p>
            <Image
              src={IMAGES.liveChat}
              alt="LiveChat Icon"
              width={40}
              height={40}
              className="mb-2"
            />
            <p className="text-sm mt-2 underline cursor-pointer">Chat now</p>
          </div>

          <div className="bg-[#111] rounded-md px-6 py-4 text-center flex flex-col items-center w-40">
            <p className="text-sky-500 font-semibold text-lg mb-2">Telegram</p>
            <Image
              src={IMAGES.telegram}
              alt="Telegram Icon"
              width={40}
              height={40}
              className="mb-2"
            />
            <p className="text-sm mt-2 underline cursor-pointer">Click here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
