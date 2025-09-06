import COLORS from "@/app/constants/colors";
import { useModal } from "../ModalContext";
import { useRouter } from "next/navigation";
import { saveLoginSession } from "@/app/utils/utility";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const { openModal } = useModal();
  const handleSignUpClick = () => {
    onClose(); // Close modal
    setTimeout(() => {
      router.push("/signup"); // Navigate after modal closes
    }, 300); // Delay to allow animation (if any)
  };

  const handleLoginClick = () => {
    saveLoginSession("Qq112233*");
    onClose(); // Close modal
    setTimeout(() => {
      window.location.href = "/"; // Navigate after modal closes
    }, 300); // Delay to allow animation (if any)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#111] text-white w-full max-w-sm rounded-lg shadow-lg relative">
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

        {/* Body */}
        <div className="p-4 space-y-4">
          {/* Username Field */}
          <div>
            <label className="text-sm">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md text-sm focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 bg-[#1e1e1e] border border-gray-700 rounded-md text-sm focus:outline-none"
            />
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-xs text-orange-500 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  openModal("resetpassword");
                }}
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <button
            className="w-full hover:bg-orange-600 text-white font-bold py-2 rounded-md shadow"
            style={{ backgroundColor: COLORS.primary }}
            onClick={handleLoginClick}
          >
            LOGIN
          </button>

          {/* Footer */}
          <div className="text-xs text-center mt-4">
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
    </div>
  );
}
