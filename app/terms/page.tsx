"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import COLORS from "../constants/colors";
const sections = [
  {
    title: "1. Definitions",
    content: `1.1 The following provisions define the terms and conditions that govern your access and participation in any "play for real" services provided by The Company or collectively referred to as "The Company", "we", or "us" as the context requires. These provisions are intended to be read in conjunction with "Betting Rules", "Privacy Policy" and any other Terms and Conditions governing the use of the Services and Website(s) and the information comprised therein (collectively these "Terms and Conditions").
      
      1.2 "Games" means internet gaming system accessible and/or offered on the Site, "betting" or "bet(s)", for the purpose of these Terms and Conditions includes, without limitation, wagering, gaming and gambling conducted in relation to any and/or all of the Service(s) offered on the Website(s).
      
      1.3 "Device(s)" mean any application access devices, including but not limited to personal computers, laptops, mobile phones, personal digital assistants, PDA phones, hand-held devices employed for the use of the Website(s) and Services.
      
      1.4 "Software" means any computer programme, data file or any other content (including any user information relating to the foregoing) that is required to be installed on your Device to enable you to use and access the Website(s) and Services.
      
      1.5 "Sportsbook" means the internet gaming system accessible and/or offered at the part of the Website and all related services and online gaming activities.
      
      1.6 "Services" means the Software and Games together made available from time to time.
      
      1.7 "Your account or Account" means an account opened by you to be used to manage the payment of funds in relation to your use of the Website and Services.`,
  },
  { title: "2. Use of Site", content: "" },
  { title: "3. Modification", content: "" },
  { title: "4. Intellectual Property", content: "" },
  { title: "5. Conditions of Use", content: "" },
  { title: "6. Registration and Membership", content: "" },
  { title: "7. Placement of Bets", content: "" },
  { title: "8. Software Licence", content: "" },
  { title: "9. Settlement of Transactions", content: "" },
  { title: "10. Collection of Winnings", content: "" },
  { title: "11. Promotions", content: "" },
  { title: "12. Promotional abuse and irregular play", content: "" },
  { title: "13. Indemnity", content: "" },
  { title: "14. Disclaimer", content: "" },
  {
    title: "15. Cancellation, Termination and Suspension of Account",
    content: "",
  },
  { title: "16. External Websites", content: "" },
  { title: "17. Adding or Discontinuing", content: "" },
  { title: "18. Violation", content: "" },
  { title: "19. Miscellaneous", content: "" },
];

const Terms = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="px-4 pt-6 md:px-20 md:pt-10 pb-10 md:pb-20">
      <h2 className="font-bold text-xl mb-6">Terms and Conditions</h2>
      <div
        className="text-white px-4 md:px-10 py-8 md:py-10 space-y-4 w-full mx-auto rounded-xl"
        style={{ backgroundColor: COLORS.tertiary }}
      >
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left py-4 font-semibold text-orange-500 flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span className="text-gray-400">
                {expandedIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </span>
            </button>
            {expandedIndex === index && (
              <div className="text-sm text-gray-300 whitespace-pre-line pb-4">
                {section.content || "Content goes here..."}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
