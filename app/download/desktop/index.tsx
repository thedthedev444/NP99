"use client";
import { BsChevronDown } from "react-icons/bs";
import IMAGES from "@/app/constants/images";
import COLORS from "@/app/constants/colors";

const games = [
  {
    name: "WM Casino",
    image: IMAGES.downloadWM,
  },
  {
    name: "Playtech",
    image: IMAGES.downloadPlaytech,
  },
  {
    name: "Mega888",
    image: IMAGES.downloadMega888,
  },
  {
    name: "918Kiss",
    image: IMAGES.download918Kiss,
  },
];

const DownloadDesktop = ({}) => {
  return (
    <div className="bg-black text-white py-10 px-20">
      <h2 className="text-2xl font-bold mb-6">APP Download</h2>
      <p>
        Get the APP to unlock exclusive games and offers, explore a handpicked
        collection of slots, table games and more, all in one place, and earn
        rewards with every spin and win wherever you go!
      </p>

      <div className="bg-black min-h-screen flex flex-col items-start py-6 space-y-6">
        <div className="relative inline-block">
          <select
            className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-md appearance-none"
            style={{ backgroundColor: COLORS.tertiary }}
          >
            <option>Android</option>
            <option>iOS</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
            <BsChevronDown className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <div
          className="bg-gray-900 p-4 rounded-lg w-full overflow-x-auto"
          style={{ backgroundColor: COLORS.tertiary }}
        >
          <div className="flex space-x-4">
            {games.map((game, idx) => (
              <div
                key={idx}
                className="relative bg-black border border-gray-700 rounded-lg overflow-hidden w-40 shrink-0"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full aspect-[3/5] object-cover"
                />
                <div className="absolute bottom-0 p-2">
                  <button className="w-36 bg-gray-900 text-white border border-white rounded-md py-1 text-sm hover:bg-white hover:text-black transition">
                    DOWNLOAD NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadDesktop;
