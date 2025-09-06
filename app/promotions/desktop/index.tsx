"use client";
import React, { useState } from "react";
import Link from "next/link";
import IMAGES from "@/app/constants/images";
import COLORS from "@/app/constants/colors";
import { HiOutlineChevronLeft } from "react-icons/hi";

const promotions = [
  {
    title: "Weekly Rescue Bonus",
    subtitle: "UP TO 50%",
    description:
      "Get your weekly boost! Claim the Weekly Rescue Bonus and enjoy extra rewards to keep the fun going. Available every week!",
    image: IMAGES.promo1Banner, // replace with your actual image path
    tag: "Welcome offer",
  },
  {
    title: "Fishing Games Welcome Bonus",
    subtitle: "150%",
    description:
      "Reel in big rewards! Sign up now and claim your Fishing Games Welcome Bonus for extra spins and bonuses to kickstart your fishing adventure. Don’t miss out!",
    image: IMAGES.promo1Banner,
    tag: "Fishing",
  },
  {
    title: "Sports Welcome Bonus",
    subtitle: "150%",
    description:
      "Kick off your winning streak! Sign up now and claim your Sports Welcome Bonus for extra rewards to boost your game. Start betting and winning today!",
    image: IMAGES.promo1Banner,
    tag: "Sports",
  },
  {
    title: "Live Casino Welcome Bonus",
    subtitle: "150%",
    description:
      "Join the action! Level up now and claim your Live Casino Welcome Bonus for exciting rewards to enhance your gameplay. The thrill starts here!",
    image: IMAGES.promo1Banner,
    tag: "Casino",
  },
];

const PromotionsDesktop = ({}) => {
  const [isDetails, setIsDetail] = useState(false);
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <>
      {isDetails ? (
        <div className="bg-black text-white py-10 px-20">
          <div className="mb-4 flex items-center">
            <button
              className="flex items-center text-orange-500 hover:underline"
              onClick={() => setIsDetail(false)}
            >
              <HiOutlineChevronLeft className="h-5 w-5 mr-1" /> Back
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-6">{"Weekly Rescue Bonus"}</h2>

          <div
            className=" rounded-xl overflow-hidden shadow-lg p-10"
            style={{ backgroundColor: COLORS.tertiary }}
          >
            <img
              src={IMAGES.promo1Banner}
              alt="Weekly Rescue Bonus"
              className="w-full  object-cover"
            />
            <div className=" space-y-6">
              <p>
                Get your weekly boost! Claim the Weekly Rescue Bonus and enjoy
                extra rewards to keep the fun going. Available every week!
              </p>

              <div>
                <h2 className="text-xl font-semibold text-orange-400">
                  Promotion Period :
                </h2>
                <p>
                  27th January 2025, 00:00:00 (GMT+8) – 31st March 2025,
                  23:59:59 (GMT+8)
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-orange-400">
                  Who To Qualify:
                </h2>
                <p>This promotion is open to all members.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-orange-400">
                  Event Details:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Members must apply manually after reaching the weekly loss
                    requirement within the same week.
                  </li>
                  <li>
                    Failure to apply in the same week disqualifies you from the
                    bonus.
                  </li>
                  <li>
                    The weekly period is from Monday, 00:00:00 to Sunday,
                    23:59:59 (GMT+8).
                  </li>
                  <li>
                    Only Net Loss is eligible (Net Loss = Gross Loss – Bonus –
                    Rebate).
                  </li>
                  <li>
                    Total Net Loss includes all providers except: Allbet,
                    918Kiss, Mega888, TG Gaming, GDL, 2D&Keno, WS168.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-orange-400">
                  How To Apply:
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Click the "Apply Now" button on the promotion page after
                    reaching the weekly loss requirement.
                  </li>
                  <li>
                    Fill in your Name, Phone Number, and Preferred Provider.
                  </li>
                  <li>
                    The bonus will be credited in Nepal Rupees (NPR) the
                    following Monday after verification (excluding certain
                    providers).
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-orange-400">
                  Terms & Conditions:
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Promotion only applies to listed TG game providers.</li>
                  <li>
                    Bonus can be claimed once per week upon Customer Service
                    confirmation.
                  </li>
                  <li>
                    Only valid win/loss wagers count toward turnover
                    requirement.
                  </li>
                  <li>
                    Voided/cancelled bets and opposite-side wagers are not
                    valid.
                  </li>
                  <li>
                    Turnover must be fulfilled before transfer or withdrawal.
                  </li>
                  <li>
                    Bonus is valid 7 days after issuance unless stated
                    otherwise.
                  </li>
                  <li>
                    Members with specific provider participation must transfer
                    to the same provider only.
                  </li>
                  <li>
                    Transfer only valid if promotion is not expired/canceled.
                  </li>
                  <li>
                    Outright bets and opposite-side betting are prohibited.
                  </li>
                  <li>This promo cannot be combined with other NPB9 offers.</li>
                  <li>
                    NPB9 reserves the right to alter, suspend, or terminate this
                    promo at any time.
                  </li>
                  <li>
                    Only for entertainment; abnormal activity will forfeit
                    bonuses and profits.
                  </li>
                  <li>
                    NPB9 may close accounts suspected of dishonesty or fraud.
                  </li>
                  <li>
                    Participation implies acceptance of all terms listed and
                    general NPB9 terms.
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md mt-4 w-40">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black text-white py-10 px-20">
          <h2 className="text-2xl font-bold mb-6">Promotions</h2>

          {/* Filters (Dummy buttons, can be wired up later) */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "All",
              "Welcome offer",
              "Sports",
              "Casino",
              "Slots",
              "Fishing",
            ].map((filter) => (
              <button
                onClick={() => setSelectedTab(filter)}
                key={filter}
                className={
                  selectedTab === filter
                    ? "bg-gray-700 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
                    : "bg-gray-900 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
                }
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className=" rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundColor: COLORS.tertiary }}
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full aspect-[5/2] object-cover"
                />
                <div className="p-5">
                  <h3 className="text-orange-500 font-bold text-lg mb-1">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-white mb-3">{promo.description}</p>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-40"
                    onClick={() => setIsDetail(true)}
                  >
                    More info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionsDesktop;
