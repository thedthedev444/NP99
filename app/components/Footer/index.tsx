"use client";
import IMAGES from "@/app/constants/images";

const Footer = ({ }) => {
  return (
    <>
      <footer className="block md:hidden bg-[#1a1a1a] text-white text-xl">
        <div className="max-w-full mx-auto px-6 py-6">
          {/* Top Section: Certification, Security, Payment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-left" style={{ alignContent: "start" }}>
            {/* Certification */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-2 text-[14px]">
                Certification
              </h4>
              <div className="flex md:justify-start gap-6">
                <img src={IMAGES.certBmm} alt="bmm" className="h-4" />
                <img src={IMAGES.certITechlab} alt="ITechlab" className="h-4" />
                <img src={IMAGES.certGlobal} alt="Global" className="h-4" />
                <img src={IMAGES.certGodaddy} alt="Godaddy" className="h-4" />
                <img src={IMAGES.certPayout} alt="Payout" className="h-4" />
              </div>
            </div>

            {/* Security */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-2 text-[14px]">Security</h4>
              <div className="flex md:justify-start gap-4">
                <img src={IMAGES.secIovation} alt="Iovation" className="h-6" />
                <img
                  src={IMAGES.secThreatMetrix}
                  alt="ThreatMetrix"
                  className="h-6"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-2 text-[14px]">
                Payment Method
              </h4>
              <div className="flex flex-wrap md:justify-start gap-3">
                <img src={IMAGES.payBitcoin} alt="BTC" className="h-6" />
                <img src={IMAGES.payUsdt} alt="USDT" className="h-6" />
                <img src={IMAGES.pay3} alt="ETH" className="h-6" />
                <img src={IMAGES.payDuitnow} alt="Duitnow" className="h-6" />
                <img src={IMAGES.pay5} alt="pay" className="h-6" />
                <img src={IMAGES.payTng} alt="Tng" className="h-6" />
                <img src={IMAGES.payEezie} alt="Eezie" className="h-6" />
                <img src={IMAGES.payHelp2pay} alt="Help2pay" className="h-6" />
                <img src={IMAGES.payGrab} alt="Grab" className="h-6" />
                <img src={IMAGES.payBoost} alt="Boost" className="h-6" />
              </div>
            </div>
          </div>

          <hr className="border-gray-600 my-6" />



            {/* Right-aligned copyright */}
            <div className="text-gray-400 text-[10px] text-center w-full">
              Copyright © 2022 NP99 All rights reserved. 18+
            </div>
          
        </div>
      </footer>

      <footer className="hidden md:block bg-[#1a1a1a] text-white text-xl">
        <div className="max-w-full mx-auto px-20 py-10">
          {/* Top Section: Certification, Security, Payment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Certification */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-2">
                Certification
              </h4>
              <div className="flex flex-wrap md:justify-start gap-3">
                <img src={IMAGES.certBmm} alt="bmm" className="h-6" />
                <img src={IMAGES.certITechlab} alt="ITechlab" className="h-6" />
                <img src={IMAGES.certGlobal} alt="Global" className="h-6" />
                <img src={IMAGES.certGodaddy} alt="Godaddy" className="h-6" />
                <img src={IMAGES.certPayout} alt="Payout" className="h-6" />
              </div>
            </div>

            {/* Security */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-2">Security</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <img src={IMAGES.secIovation} alt="Iovation" className="h-6" />
                <img
                  src={IMAGES.secThreatMetrix}
                  alt="ThreatMetrix"
                  className="h-6"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-2">
                Payment Method
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <img src={IMAGES.payBitcoin} alt="BTC" className="h-6" />
                <img src={IMAGES.payUsdt} alt="USDT" className="h-6" />
                <img src={IMAGES.pay3} alt="ETH" className="h-6" />
                <img src={IMAGES.payDuitnow} alt="Duitnow" className="h-6" />
                <img src={IMAGES.pay5} alt="pay" className="h-6" />
                <img src={IMAGES.payTng} alt="Tng" className="h-6" />
                <img src={IMAGES.payEezie} alt="Eezie" className="h-6" />
                <img src={IMAGES.payHelp2pay} alt="Help2pay" className="h-6" />
                <img src={IMAGES.payGrab} alt="Grab" className="h-6" />
                <img src={IMAGES.payBoost} alt="Boost" className="h-6" />
              </div>
            </div>
          </div>

          <div className="mt-8 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left-aligned links */}
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="hover:underline">
                Live Chat
              </a>
              <div className="w-px h-4 bg-gray-400" />
              <a href="#" className="hover:underline">
                About Us
              </a>
              <div className="w-px h-4 bg-gray-400" />
              <a href="#" className="hover:underline">
                Info
              </a>
              <div className="w-px h-4 bg-gray-400" />
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>

            {/* Right-aligned copyright */}
            <div className="text-gray-400 text-sm md:text-right">
              Copyright © 2022 NP99 All rights reserved. 18+
            </div>
          </div>

          <hr className="border-gray-600 mb-6" />

          {/* Legal / Copyright */}
          <div className="text-gray-400 text-sm leading-relaxed mt-6">
            <div className="max-w-full mx-auto">
              <p>
                NP99.com is owned and operated by NP99 Holdings Limited,
                registration number: 15839, registered address: Hamchako,
                Mutsamudu, Autonomous Island of Anjouan, Union of Comoros.
                Contact us: np99holdingslimited@gmail.com. NP99.com is licensed
                and regulated by the Government of the Autonomous Island of
                Anjouan, Union of Comoros and operates under license No.
                AI5C-20241030-FL. NP99.com has passed all regulatory compliance
                and is legally authorized to conduct gaming operations for any
                and all games of chance and wagering.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
