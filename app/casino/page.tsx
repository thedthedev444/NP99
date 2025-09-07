
import CasinoDesktop from "./desktop";

const Casino = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <CasinoDesktop />
      </div>
    </>
  );
};

export default Casino;
