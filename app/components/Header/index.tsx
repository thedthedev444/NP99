"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useModal } from "../ModalContext";

import IMAGES from "@/app/constants/images";
import LanguageSelector from "../LanguageSelector";
import HeaderLogo from "../HeaderLogo";
import COLORS from "@/app/constants/colors";
import HeaderMenu from "../HeaderMenu";
import { CgProfile } from "react-icons/cg";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";
import { LuRefreshCcw } from "react-icons/lu";
import { isUserLoggedIn, logout } from "@/app/utils/utility";
import LANGUAGES from "@/app/constants/languages";

// import {
//   FaHandHoldingUsd,
//   FaExchangeAlt,
//   FaMoneyBillAlt,
//   FaSearchDollar,
//   FaEnvelope,
// } from "react-icons/fa";
import {
  RiEyeFill,
  RiEyeOffFill,
  // RiRefreshFill,
  // RiArrowUpSFill,
  // RiArrowDownSFill,
} from "react-icons/ri";

const Header = ({ }) => {
  const { openModal } = useModal();
  const [isMobileView, setIsMobileView] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());
  const [showActions, setShowActions] = useState(false);
  const [showAmount, setShowAmount] = useState(false);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    ...LANGUAGES[0],
    lang: "English",
  });

  const handleLogoutClick = () => {
    logout();
    setTimeout(() => {
      window.location.href = "/";
    }, 300); // Delay to allow animation (if any)
  };


  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    // Run on mount
    checkMobileView();

    // Listen to window resize
    window.addEventListener("resize", checkMobileView);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };

  }, []);


  return (
    <>
      <div className="block md:hidden">
        <div
          className="flex items-center justify-between text-white px-4 py-3 "
          style={{ backgroundColor: COLORS.secondary }}
        >
          <div className="flex-[7] flex gap-2 items-center">
            <RxHamburgerMenu size={30} color={COLORS.primary} />
            <HeaderLogo />
          </div>

          <div className="flex-[7] flex justify-end gap-2">
            <button className="bg-orange-600 hover:bg-orange-300 text-white font-bold py-1 px-1 rounded w-16 text-[10px]">
              LOGIN
            </button>
            <button className="bg-black hover:bg-gray-500 text-white font-bold py-1 px-1 rounded w-16 border-white border-2 text-[10px]">
              SIGN UP
            </button>
            <button
              className="flex items-center gap-2 text-gray-500 bg-black"
              onClick={() => setOpen(!open)}
            >
              <img src={selected.flag} alt={selected.code} className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div
          className="flex items-center justify-between text-white px-20 py-3"
          style={{ backgroundColor: COLORS.secondary }}
        >
          <div className="flex-[6] flex">
            <HeaderLogo />
            <div className="border-gray-500 border-1 w-0 h-10 mx-4" />
            <LanguageSelector />
          </div>
          <div className="flex-[6] flex justify-end gap-2">
            {!isLoggedIn ? (
              <>
                <button
                  className="bg-orange-600 hover:bg-orange-300 text-white font-bold py-2 px-2 rounded w-26"
                  onClick={() => openModal("login")}
                >
                  LOGIN
                </button>
                <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-2 rounded w-26 border-white border-2">
                  SIGN UP
                </button>
              </>
            ) : (
              <>
                <div className="relative bg-black text-white">
                  {/* Top Wallet Section */}
                  {/* <div className="flex justify-between items-center bg-white rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">
                        ₹
                      </div>
                      <span className="text-lg tracking-widest text-black">
                        ******
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RiEyeFill
                        className="text-black cursor-pointer"
                        size={26}
                      />
                      <LuRefreshCcw
                        className="text-black cursor-pointer"
                        size={26}
                      />
                      <div
                        className="bg-orange-500 p-1 rounded-sm cursor-pointer"
                        onClick={() => setShowActions(!showActions)}
                      >
                        {showActions ? (
                          <HiOutlineChevronUp className="text-white text-xl" />
                        ) : (
                          <HiOutlineChevronDown className="text-white text-xl" />
                        )}
                      </div>
                    </div>
                  </div> */}
                  <div className="flex items-center rounded-lg overflow-hidden w-fit">
                    {/* Left part: ₹ + balance + icons */}
                    <div className="flex items-center bg-gradient-to-b from-[#f6f6f6] to-[#d9d9d9] px-2 py-1 space-x-2">
                      {/* ₹ Icon */}
                      <div className="bg-green-600 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        ₹
                      </div>

                      {/* Balance */}
                      <span className="tracking-widest text-black text-base font-medium">
                        {showAmount ? "100,000.00" : "******"}
                      </span>

                      {/* Eye Icon */}
                      {showAmount ? (
                        <RiEyeOffFill
                          className="text-black cursor-pointer"
                          size={30}
                          onClick={() => setShowAmount(false)}
                        />
                      ) : (
                        <RiEyeFill
                          className="text-black cursor-pointer"
                          size={30}
                          onClick={() => setShowAmount(true)}
                        />
                      )}

                      {/* Refresh Icon */}
                      <LuRefreshCcw
                        className="text-black cursor-pointer"
                        size={30}
                      />
                    </div>

                    {/* Right part: Toggle button */}
                    <div
                      className="bg-orange-600 px-2 py-2 cursor-pointer"
                      onClick={() => setShowActions(!showActions)}
                    >
                      {showActions ? (
                        <HiOutlineChevronUp
                          className="text-white text-lg"
                          size={22}
                        />
                      ) : (
                        <HiOutlineChevronDown
                          className="text-white text-lg"
                          size={22}
                        />
                      )}
                    </div>
                  </div>

                  {/* Action Buttons - Collapsible */}
                  {showActions && (
                    <div className="absolute right-0 z-50 mt-3 flex justify-between bg-[#000000] p-3 pb-4 rounded-lg transition-all duration-300 gap-2">
                      {[
                        { icon: IMAGES.btnDeposit, label: "Deposit" },
                        { icon: IMAGES.btnTransfer, label: "Transfer" },
                        { icon: IMAGES.btnWithdraw, label: "Withdraw" },
                        { icon: IMAGES.btnHistory, label: "History" },
                        { icon: IMAGES.btnMsg, label: "Message", badge: 6 },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="relative flex flex-col items-center bg-black rounded-md hover:bg-[#2a2a2a] w-[100px] h-[100px]"
                        >
                          <Image
                            src={item.icon}
                            alt={item.label}
                            width={100}
                            height={100}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <CgProfile
                  size={43}
                  style={{ backgroundColor: COLORS.primary, borderRadius: 50 }}
                />
                <button
                  className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-2 rounded w-26 border-white border-2"
                  onClick={handleLogoutClick}
                >
                  LOG OUT
                </button>
              </>
            )}
          </div>
        </div>
        <HeaderMenu />
      </div>
    </>
  );
};

export default Header;
