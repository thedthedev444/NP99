import Link from "next/link";
import Image from "next/image";

import IMAGES from "@/app/constants/images";

const HeaderLogo = ({}) => {
  return (
    <>
      <div className="block md:hidden">
        <Link href={"/"}>
          <Image
            src={IMAGES.headerLogo}
            alt="np99 logo"
            width={80}
            height={10}
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <Link href={"/"}>
          <Image
            src={IMAGES.headerLogo}
            alt="np99 logo"
            width={140}
            height={10}
          />
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
