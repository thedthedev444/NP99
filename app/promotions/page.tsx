import PromotionsDesktop from "./desktop";

const Promotions = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <PromotionsDesktop />
      </div>
    </>
  );
};

export default Promotions;
