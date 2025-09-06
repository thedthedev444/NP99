"use client";
import React, { useState } from "react";
import COLORS from "@/app/constants/colors";
import IMAGES from "@/app/constants/images";
import Image from "next/image";

interface Props {
  signUpSuccess: boolean;
  onPressSubmit: () => void;
}

const SignUpDesktop: React.FC<Props> = ({ signUpSuccess, onPressSubmit }) => {
  const [nextPage, setNextPage] = useState(false);
  return (
    <div className="px-20 py-10">
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-start">
        {/* Left: Sign up form */}
        <div className="w-full md:w-1/2 max-w-md space-y-4">
          {signUpSuccess ? (
            <div className="w-full md:w-full max-w-full space-y-3 bg-black text-white py-6 rounded-lg text-center">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-30 h-30 rounded-2xl bg-gradient-to-b from-white to-gray-200 flex items-center justify-center shadow">
                  <Image
                    src={IMAGES.signUpSuccess}
                    alt="Success Icon"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-base font-bold">Congratulation !</h2>
              <p className="text-lg font-semibold text-gray-300 -mt-4">
                Sign up successfully
              </p>

              {/* Description */}
              <p className="text-xs text-gray-400 px-1">
                Welcome to NP99! We are excited to have you onboard! Feel free
                to browse around, just make sure you don’t miss out our welcome
                offers!
              </p>

              {/* Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 text-sm w-full rounded shadow mt-10">
                DEPOSIT NOW
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-orange-500 text-xl font-semibold border-b border-orange-500 pb-2">
                Sign up
              </h2>
              {!nextPage ? (
                <>
                  <div>
                    <label className="text-sm">Username</label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm">New password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                    />
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full mt-2 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Choose currency</label>
                    <select className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none text-white">
                      <option value="NPR">🇳🇵 NPR</option>
                      <option value="MYR">🇲🇾 MYR</option>
                      <option value="THB">🇹🇭 THB</option>
                      <option value="IDR">🇮🇩 IDR</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm">Refer code (Optional)</label>
                    <input
                      type="text"
                      placeholder="Enter refer code"
                      className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                    />
                  </div>

                  <button
                    className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-md mt-2 shadow-lg"
                    onClick={() => setNextPage(true)}
                  >
                    NEXT
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-sm">Full legal name</label>
                    <input
                      type="text"
                      placeholder="Enter your full legal name"
                      className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Phone number</label>
                    <div className="flex gap-2 mt-1">
                      <div className="w-1/3">
                        <select className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none text-white">
                          <option value="+977">+977</option>
                          <option value="+60">+60</option>
                          <option value="+66">+66</option>
                        </select>
                      </div>
                      <input
                        type="tel"
                        placeholder="--- --- ----"
                        className="w-2/3 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 mt-2">
                    <input type="checkbox" className="mt-1 accent-orange-500" />
                    <p className="text-xs">
                      I confirm that I am 18 years old and I have read the{" "}
                      <span className="text-orange-500 underline cursor-pointer">
                        Terms & Conditions
                      </span>
                      .
                    </p>
                  </div>

                  <button
                    className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-md shadow-lg"
                    onClick={onPressSubmit}
                  >
                    SIGN UP
                  </button>
                </>
              )}
            </>
          )}
        </div>
        {/* Right: Banner */}
        <div className="hidden md:flex md:w-full justify-center mt-10 md:mt-0 pl-10">
          <div className="relative w-full h-[500px]">
            <Image
              src={IMAGES.signUpWelcome}
              alt="Welcome Banner"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpDesktop;
