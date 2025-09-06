import HomeDesktop from "./desktop";
import HomeMobile from "./mobile";

const Home = () => {
  return (
    <>
      <div className="block md:hidden">
        <HomeMobile/>
      </div>
      <div className="hidden md:block">
        <HomeDesktop />
      </div>
    </>
  );
};

export default Home;
