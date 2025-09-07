"use client";
import { useState } from "react";
// import Image from "next/image";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
// import IMAGES from "@/app/constants/images";
import LANGUAGES from "@/app/constants/languages";

const LanguageSelector = ({}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    ...LANGUAGES[0],
    lang: "English",
  });
  return (
    <div className="relative sm:block hidden">
      <button
        className="flex items-center gap-2 px-4 py-2 text-gray-500 bg-black rounded"
        onClick={() => setOpen(!open)}
      >
        <img src={selected.flag} alt={selected.code} className="w-8 h-8" />
        {selected.code} - {selected.lang}
        {open ? <SlArrowUp size={16} /> : <SlArrowDown size={16} />}
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-82 bg-gray-900 text-white rounded shadow-lg p-4">
          {LANGUAGES.map((item) => (
            <div key={item.code} className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-2 text-gray-500 w-[80px] shrink-0">
                <img src={item.flag} alt={item.code} className="w-8 h-8" />
                <span>{item.code}</span>
              </div>
              <div className="flex gap-2 justify-start">
                {item.options.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelected({ ...item, lang });
                      setOpen(false);
                    }}
                    className="bg-gray-700 hover:bg-gray-600 px-2 py-1 text-sm rounded w-24 text-center"
                    style={{
                      borderColor: "white",
                      borderWidth:
                        selected.code === item.code && selected.lang === lang
                          ? 1
                          : 0,
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
