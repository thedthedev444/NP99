"use client";

import COLORS from "@/app/constants/colors";

interface Section {
  title: string;
  content: string;
}

interface Props {
  sectionData: Section[];
}

const AboutUsDesktop: React.FC<Props> = ({ sectionData }) => {
  return (
    <div className="p-20">
      <h2 className="font-bold text-xl">About Us</h2>
      <div
        className="text-white px-6 py-10 space-y-8 max-w-full mx-auto mt-5 rounded-xl"
        style={{ backgroundColor: COLORS.tertiary }}
      >
        {sectionData.map((section, index) => (
          <div key={index}>
            <h2 className="text-orange-500 font-semibold text-lg mb-2">
              {section.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsDesktop;
