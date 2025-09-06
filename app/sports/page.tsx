import SportsDesktop from "./desktop";

const Sports = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <SportsDesktop />
      </div>
    </>
  );
};

export default Sports;
