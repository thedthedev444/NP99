import DownloadDesktop from "./desktop";

const Sports = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <DownloadDesktop />
      </div>
    </>
  );
};

export default Sports;
