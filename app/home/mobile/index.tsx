import COLORS from "@/app/constants/colors";
import IMAGES from "@/app/constants/images";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import BannerCarousel from "@/app/components/BannerCarousel";
import Recommended from "../desktop/shared/Recommended";
import UpcomingMatch from "../desktop/shared/UpcomingMatch";
import FeaturedGame from "../desktop/shared/FeaturedGame";
import AnnouncementPopUp from "@/app/components/AnnouncementPopUp";
import Provider from "./shared/Provider";

const HomeMobile = ({ }) => {
  return (
    <>

      <div
        className="flex px-6 py-1"
        style={{ backgroundColor: COLORS.tertiary }}
      >
        <Image src={IMAGES.iconBell} alt="bell" width={18} height={10} />
        <Marquee speed={50} gradient={false}>
          <span style={{ color: "gray", fontSize: 10 }}>
            {
              "We wish to remind all members not to share their account and personal information channels that are not officially displayed on our website."
            }
          </span>
        </Marquee>
      </div>
      <Recommended />
      <Provider />
      <UpcomingMatch />
      <FeaturedGame />
    </>
  );
};

export default HomeMobile;
