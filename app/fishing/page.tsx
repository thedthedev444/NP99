import FishingDesktop from "./desktop";

const Sports = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <FishingDesktop />
      </div>
    </>
  );
};

export default Sports;
