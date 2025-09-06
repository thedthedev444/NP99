import SlotsDesktop from "./desktop";

const Sports = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <SlotsDesktop />
      </div>
    </>
  );
};

export default Sports;
