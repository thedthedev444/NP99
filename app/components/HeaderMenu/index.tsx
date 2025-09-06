"use client";
import React, { useState, useEffect } from "react";
import COLORS from "@/app/constants/colors";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { utcFormatTime } from "@/app/utils/utility";
import { usePathname } from "next/navigation";

const HeaderMenu = ({}) => {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState("");
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = utcFormatTime(now);
      setCurrentTime(formattedTime);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pathname.includes("sports")) {
      setActiveTab("sports");
    } else if (pathname.includes("casino")) {
      setActiveTab("casino");
    } else if (pathname.includes("slots")) {
      setActiveTab("slots");
    } else if (pathname.includes("fishing")) {
      setActiveTab("fishing");
    } else if (pathname.includes("promotions")) {
      setActiveTab("promotions");
    } else if (pathname.includes("vip")) {
      setActiveTab("vip");
    }
  }, [pathname]);
  return (
    <>
      <nav className="flex" style={{ backgroundColor: COLORS.tertiary }}>
        <div className="text-white py-2 flex items-center space-x-6 px-20 flex-6">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80"
          >
            <TiHome size={26} />
          </Link>

          <div className="h-5 border-l border-gray-600" />
          {["Sports", "Casino", "Slots", "Fishing", "Promotions", "VIP"].map(
            (item, index) => (
              <div key={item} className="flex items-center space-x-6">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={
                    activeTab === item.toLowerCase()
                      ? "hover:text-orange-400 font-medium border-b-2 border-white"
                      : "hover:text-orange-400 font-medium"
                  }
                >
                  {item}
                </Link>
                {index < 5 && <div className="h-5 border-l border-gray-600" />}
              </div>
            )
          )}
        </div>
        <div className="text-white py-2 flex justify-end space-x-6 px-20 flex-6">
          <span>{currentTime}</span>
        </div>
      </nav>
    </>
  );
};

export default HeaderMenu;
