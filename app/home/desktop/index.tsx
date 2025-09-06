"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import COLORS from "@/app/constants/colors";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import BannerCarousel from "@/app/components/BannerCarousel";
import IMAGES from "@/app/constants/images";
import Marquee from "react-fast-marquee";
import Recommended from "./shared/Recommended";
import FeaturedGame from "./shared/FeaturedGame";
import UpcomingMatch from "./shared/UpcomingMatch";
import { IoClose } from "react-icons/io5";
import AnnouncementPopUp from "@/app/components/AnnouncementPopUp";

const HomeDesktop = ({}) => {
  return (
    <>
      <BannerCarousel
        banners={[
          { id: 1, title: "banner 1", image: IMAGES.homeBanner },
          { id: 2, title: "banner 2", image: IMAGES.homeBanner },
        ]}
        deviceType={"1"}
      />
      <div
        className="flex px-20 py-2"
        style={{ backgroundColor: COLORS.tertiary }}
      >
        <Image src={IMAGES.iconBell} alt="bell" width={24} height={24} />
        <Marquee speed={50} gradient={false}>
          <span style={{ color: "gray" }}>
            {
              "We wish to remind all members not to share their account and personal information channels that are not officially displayed on our website."
            }
          </span>
        </Marquee>
      </div>
      <Recommended />
      <UpcomingMatch />
      <FeaturedGame />
      <AnnouncementPopUp />
    </>
  );
};

export default HomeDesktop;
