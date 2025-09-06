import AboutUsDesktop from "./desktop";

const AboutUs = () => {
  const sections = [
    {
      title: "We Are NP99",
      content:
        "NP99 is Nepal’s premier online casino and sportsbook gaming establishment. Online casino gambling is a crucial component of the entertainment industry, and we think that everyone should have the opportunity to try their hand at some of the fun and games as long as they exercise restraint and boundaries.",
    },
    {
      title: "Our Games",
      content:
        "Play a variety of thrilling games, including card games like baccarat, blackjack, and poker, as well as traditional and progressive slots, European and American roulette, Sic Bo, Keno, the lottery, scratch cards, and more. Sports fans may participate in the game by cheering and wagering on their favourite sports team at any time and from any location. Allow our games to bring you surprising money gains and jackpots!",
    },
    {
      title: "Our Commitments",
      content:
        "We at NP99 work hard to deliver the greatest user experience to you.",
    },
    {
      title: "Quick & Easy Transactions",
      content:
        "We are aware of how eager you are to play and how much you detest waiting, so we ensure you that all deposit and withdrawal operations will be simple, quick, and safe.",
    },
    {
      title: "24-Hour Customer Support",
      content:
        "Our Live Chat customer service agents are available every day of the week, around-the-clock. Each of them has undergone extensive product, services, and hospitality training to guarantee that they will provide you with expert support and help.",
    },
    {
      title: "Transaction Methods",
      content:
        "Our primary mode of payment is online bank transfer. We also accept manual transfers through ATM (Automated Teller Machine) or CDM (Cash Deposit Machine) for people who do not have online banking. Credit card and third-party payment merchants are not presently accessible, but we are striving to introduce them in order to better serve you.",
    },
    {
      title: "Fully Licensed & Compliant",
      content:
        "NP99 is fully licensed in the Nepal under First Cagayan Leisure and Resort Corporation (FCLRC), which means we are required to follow the laws and regulations of one of the world’s most carefully supervised gaming regulatory jurisdictions. We never sell or disclose any of your information with outside parties, and all of your personal information is always kept secure and private using SSL encryption.",
    },
  ];
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <AboutUsDesktop sectionData={sections} />
      </div>
    </>
  );
};

export default AboutUs;
