import { useEffect, useState } from "react";
import Image from "next/image";

const AnnouncementPopUp = ({ }) => {
  const [showPopup, setShowPopup] = useState(false); // Popup visibility state
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const savedExpiry = localStorage.getItem("dontShowPopupUntil");

    if (savedExpiry) {
      const expiryTime = Number(savedExpiry);
      const now = Date.now();

      if (now < expiryTime) {
        // Still within 24 hours – don’t show popup
        setShowPopup(false);
        return;
      } else {
        // Expired – remove it
        localStorage.removeItem("dontShowPopupUntil");
      }
    }

    // If no key or expired, show popup
    setShowPopup(true);
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);

    if (isChecked) {
      const expiryTime = Date.now() + 1000 * 60 * 60 * 24; // 24 hours
      localStorage.setItem("dontShowPopupUntil", expiryTime.toString());
    } else {
      localStorage.removeItem("dontShowPopupUntil");
    }
  };

  if (showPopup) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-lg relative">
          {/* Close Button (Top Right) */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute -top-4 -right-4 bg-white rounded-full shadow-md text-xl hover:text-red-500 transition z-10"
            aria-label="Close popup"
          >
            <Image
              src={"/images/home/close-button.png"}
              alt="Close"
              width={50}
              height={50}
            />
          </button>

          {/* Popup Banner Image */}
          <Image
            src={"/images/home/pop-out-promos.png"}
            alt="Promotional Banner"
            width={800}
            height={400}
          />
          {/* "Don't Show Again" Checkbox */}
          <label className="absolute bottom-3 left-3 flex items-center space-x-2 text-sm bg-white px-3 py-1 rounded shadow-sm">
            <input
              type="checkbox"
              className="accent-orange-500"
              checked={checked}
              onChange={handleChange}
            />
            <span style={{ color: "#000000" }}>Don't show again</span>
          </label>
        </div>
      </div>
    );
  }
};

export default AnnouncementPopUp;
