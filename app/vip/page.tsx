import VipDesktop from "./desktop";

const Vip = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <VipDesktop />
      </div>
    </>
  );
};

export default Vip;
