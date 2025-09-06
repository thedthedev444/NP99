"use client";
import React from "react";
import Image from "next/image";
import IMAGES from "../../constants/images";

const VipDesktop = () => {
  return (
    <>
      <Image
        src={IMAGES.vipBanner}
        alt={"vip banner"}
        width={1920}
        height={600}
        priority
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />

      <div className="bg-black text-white px-40">
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-sm text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-base font-bold text-center h-48 align-top">
                <th className="w-1/5 text-left h-32 align-top">
                  <div className="flex flex-col justify-end h-full">
                    <span className="text-white">VIP Privileges</span>
                  </div>
                </th>
                {[
                  {
                    src: IMAGES.vipBronze,
                    label: "Bronze",
                    color: "text-orange-500",
                  },
                  {
                    src: IMAGES.vipSilver,
                    label: "Silver",
                    color: "text-gray-300",
                  },
                  {
                    src: IMAGES.vipGold,
                    label: "Gold",
                    color: "text-yellow-300",
                  },
                  {
                    src: IMAGES.vipPlatinum,
                    label: "Platinum",
                    color: "text-pink-400",
                  },
                  {
                    src: IMAGES.vipDiamond,
                    label: "Diamond",
                    color: "text-cyan-300",
                  },
                ].map((tier, index) => (
                  <th key={index}>
                    <div className="flex flex-col items-center justify-start h-32">
                      <Image
                        src={tier.src}
                        alt={tier.label}
                        width={160}
                        height={160}
                        className="mb-2"
                      />
                      <span className={tier.color}>{tier.label}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-white">
              {jsonData.map((item, index) => {
                return (
                  <React.Fragment key={`section-${index}`}>
                    <tr key={`title-${index}`}>
                      <td
                        colSpan={6}
                        className="text-orange-400 font-semibold pt-6 pb-2"
                      >
                        {item.title}
                      </td>
                    </tr>
                    {item.rows.map((row, idx) => (
                      <tr
                        key={`row-${index}-${idx}`}
                        className="border-b border-gray-600"
                      >
                        <td className="font-medium py-2">{row.name}</td>
                        {row.cols.map((col, colx) => (
                          <td key={`col-${colx}`} className="text-center py-2">
                            {col}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VipDesktop;

const jsonData = [
  {
    title: "Benefits",
    rows: [
      {
        id: 1,
        name: "Designated Account Manager",
        cols: ["-", "-", "-", "-", "-"],
      },
      {
        id: 2,
        name: "Maximum Daily Withdrawal Limits",
        cols: ["80,000", "80,000", "80,000", "80,000", "80,000"],
      },
      {
        id: 3,
        name: "- Daily Bank Withdrawal Limit",
        cols: ["60,000", "60,000", "60,000", "60,000", "60,000"],
      },
      {
        id: 4,
        name: "- Daily Crypto Withdrawal Limit",
        cols: ["80,000", "80,000", "80,000", "80,000", "80,000"],
      },
      {
        id: 5,
        name: "Daily Transaction Counts",
        cols: ["10", "10", "10", "10", "10"],
      },
      {
        id: 6,
        name: "Tier Upgrade Bonus",
        cols: ["100", "100", "100", "100", "100"],
      },
      {
        id: 7,
        name: "Weekly Rescue Bonus",
        cols: ["1,688", "1,688", "1,688", "1,688", "1,688"],
      },
      {
        id: 8,
        name: "Birthday Bonus",
        cols: ["288", "288", "288", "288", "288"],
      },
      {
        id: 9,
        name: "Special Birthday Gift",
        cols: ["-", "-", "-", "-", "-"],
      },
    ],
  },
  {
    title: "Special Rebate",
    rows: [
      {
        id: 1,
        name: "Sport Rebate (Daily Unlimited)",
        cols: ["0.20%", "0.20%", "0.20%", "0.20%", "0.20%"],
      },
      {
        id: 2,
        name: "NP99 Sports Rebate (Daily Unlimited)",
        cols: ["0.30%", "0.30%", "0.30%", "0.30%", "0.30%"],
      },
      {
        id: 3,
        name: "Live Casino Rebate (Daily Unlimited)",
        cols: ["0.30%", "0.30%", "0.30%", "0.30%", "0.30%"],
      },
      {
        id: 4,
        name: "- Baccarat",
        cols: ["0.20%", "0.20%", "0.20%", "0.20%", "0.20%"],
      },
      {
        id: 5,
        name: "- Roulette, Blackjack, Dragon Tiger, Sicbo",
        cols: ["0.20%", "0.20%", "0.20%", "0.20%", "0.20%"],
      },
      {
        id: 6,
        name: "Slot Rebate (Daily Unlimited)",
        cols: ["0.50%", "0.50%", "0.50%", "0.50%", "0.50%"],
      },
      {
        id: 7,
        name: "Virtual Sport Rebate (Daily Unlimited)",
        cols: ["0.40%", "0.40%", "0.40%", "0.40%", "0.40%"],
      },
    ],
  },
  {
    title: "Tier Upgrade Requirement",
    rows: [
      {
        id: 1,
        name: "Minimum Deposit Within a month",
        cols: ["20,000", "20,000", "20,000", "20,000", "20,000"],
      },
    ],
  },
  {
    title: "VIPs Maintenance Requirement",
    rows: [
      {
        id: 1,
        name: "Accumulated Deposit Within 3 months",
        cols: ["-", "-", "-", "-", "-"],
      },
      {
        id: 2,
        name: "Accumulated Turnover Within 3 months",
        cols: ["-", "-", "-", "-", "-"],
      },
      {
        id: 3,
        name: "Membership Renewal",
        cols: ["Lifetime", "Lifetime", "Lifetime", "Lifetime", "Lifetime"],
      },
    ],
  },
];
