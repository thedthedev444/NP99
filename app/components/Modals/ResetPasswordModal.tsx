"use client";
import COLORS from "@/app/constants/colors";
import { useState } from "react";
import { useModal } from "../ModalContext";
import { useRouter } from "next/navigation";

export default function ResetPasswordModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");
  const { openModal } = useModal();
  const handleSignUpClick = () => {
    onClose(); // Close modal
    setTimeout(() => {
      router.push("/signup"); // Navigate after modal closes
    }, 300); // Delay to allow animation (if any)
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-lg max-w-sm w-full text-white relative">
        {/* Header */}
        <div
          className=" text-white text-sm font-semibold px-4 py-3 rounded-t-lg flex justify-between items-center"
          style={{ backgroundColor: COLORS.primary }}
        >
          <span>Welcome to NP99</span>
          <button className="text-white text-xl leading-none" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="p-6">
          {/* Tabs */}
          <div className="flex mb-4 rounded overflow-hidden border border-gray-700">
            <button
              className={`w-1/2 py-2 text-sm font-semibold ${
                activeTab === "email"
                  ? "bg-white text-black"
                  : "bg-[#2a2a2a] text-white"
              }`}
              onClick={() => setActiveTab("email")}
            >
              Email
            </button>
            <button
              className={`w-1/2 py-2 text-sm font-semibold ${
                activeTab === "phone"
                  ? "bg-white text-black"
                  : "bg-[#2a2a2a] text-white"
              }`}
              onClick={() => setActiveTab("phone")}
            >
              Phone
            </button>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="text-sm mb-1 block">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none text-white"
            />
          </div>

          {/* Conditional Fields */}
          {activeTab === "email" ? (
            <div className="mb-4">
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none text-white"
              />
            </div>
          ) : (
            <div className="mb-4">
              <label className="text-sm mb-1 block">Phone number</label>
              <div className="flex gap-2">
                <select className="w-[30%] px-2 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none text-white">
                  <option value="+977">+977</option>
                  <option value="+60">+60</option>
                  <option value="+66">+66</option>
                </select>
                <input
                  type="tel"
                  placeholder="--- --- ----"
                  className="w-[70%] px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md focus:outline-none text-white"
                />
              </div>
            </div>
          )}

          {/* Back to Login */}
          <div
            className="text-right text-sm text-gray-400 underline cursor-pointer mb-4"
            onClick={() => openModal("login")}
          >
            Back to Login
          </div>

          {/* Reset Button */}
          <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-md mb-4">
            RESET PASSWORD
          </button>

          {/* Footer */}
          <p
            className="text-center text-sm text-gray-400"
            onClick={handleSignUpClick}
          >
            Do not have an account?{" "}
            <span className="text-orange-500 underline cursor-pointer">
              Sign Up now!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
