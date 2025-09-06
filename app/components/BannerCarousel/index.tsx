import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
import COLORS from "@/app/constants/colors";

// Define custom dot button styles
const customDotButton = {
  backgroundColor: "white", // Default dot color
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  transition: "background-color 0.3s ease",
  border: "none",
  cursor: "pointer",
  margin: "5px",
};

const customDotActive = {
  ...customDotButton,
  backgroundColor: COLORS.primary, // Active dot color
};

const BannerCarousel = ({
  banners,
  deviceType,
}: {
  banners: { id: number; title: string; image: string }[];
  deviceType: string;
}) => {
  //   const { t } = useTranslation();
  const isSingleImage = banners.length === 1; // ✅ Check if only one image

  return (
    <Carousel
      swipeable={!isSingleImage}
      draggable={!isSingleImage}
      showDots={!isSingleImage} // ✅ Show dots only if more than one image
      responsive={{
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      }}
      ssr
      infinite={!isSingleImage}
      autoPlay={!isSingleImage}
      autoPlaySpeed={3000}
      keyBoardControl={!isSingleImage}
      customTransition="all .5s ease"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={
        isSingleImage ? ["desktop", "tablet", "mobile"] : []
      } // ✅ Show arrows only if more than one image
      deviceType={deviceType}
      dotListClass="custom-dot-list" // ✅ Custom dot list class
      customDot={<CustomDot />} // ✅ Always pass CustomDot for proper dot rendering
    >
      {banners.map((banner) => (
        <div
          key={banner.id}
          style={{
            position: "relative",
          }}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            width={1920}
            height={600}
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

// Create a custom dot component
const CustomDot = ({
  onClick,
  active,
}: {
  onClick?: () => void;
  active?: boolean;
}) => (
  <button
    style={active ? customDotActive : customDotButton}
    onClick={onClick}
  />
);

export default BannerCarousel;
