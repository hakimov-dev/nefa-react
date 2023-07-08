import React from "react";
// Layouts
import DefaultLayout from "./layouts/default";
// Components
import BaseButton from "./components/base/Button";
import BaseSection from "./components/base/Section";
import BaseAccordion from "./components/base/Accordion";
import LandingCryptoStatistic from "./components/landing/CryptoStatistic";
import LandingExchange from "./components/landing/Exchange";
import LandingListItem from "./components/landing/ListItem";
import LandingStep from "./components/landing/Step";

function App() {
  const trendings = [
    {
      id: 1,
      name: "Bitcoin",
      price: 43180.13,
      logo: "bitcoin.png",
      increase: true,
      data: [40, 35, 60, 75, 60, 75, 50],
    },
    {
      id: 2,
      name: "Ethereum",
      price: 3480.65,
      logo: "ethereum.png",
      increase: false,
      data: [25, 30, 60, 50, 80, 55, 80],
    },
    {
      id: 3,
      name: "Solana",
      price: 150.2,
      logo: "solana.png",
      increase: true,
      data: [40, 45, 40, 80, 50, 60, 35],
    },
    {
      id: 4,
      name: "Dogecoin",
      price: 0.1572,
      logo: "dogecoin.png",
      increase: true,
      data: [35, 70, 60, 80, 50, 60, 40],
    },
  ];
  const topGainers = [
    {
      id: 1,
      name: "PAPPAY",
      price: 0.00374,
      logo: "pappay.png",
      increase: true,
      data: [30, 50, 45, 60, 70, 40, 45],
    },
    {
      id: 2,
      name: "Bitcoin Asia",
      price: 0.02096,
      logo: "bitcoin-asia.png",
      increase: true,
      data: [25, 60, 50, 60, 35, 50, 70],
    },
    {
      id: 3,
      name: "MoonRock",
      price: 0.004907,
      logo: "moonrock.png",
      increase: true,
      data: [40, 35, 40, 25, 50, 70, 45],
    },
    {
      id: 4,
      name: "NinjaFloki",
      price: 0.000123,
      logo: "ninjafloki.png",
      increase: true,
      data: [45, 35, 40, 30, 25, 45, 35],
    },
  ];
  const recents = [
    {
      id: 1,
      name: "MetaCraft",
      price: 0.0608,
      logo: "metacraft.png",
      increase: false,
      data: [40, 50, 45, 60, 35, 40, 45],
    },
    {
      id: 2,
      name: "Frog",
      price: 0.5875,
      logo: "frog.png",
      increase: false,
      data: [25, 50, 45, 48, 40, 60, 45],
    },
    {
      id: 3,
      name: "Musk Doge",
      price: 0.04041,
      logo: "musk-doge.png",
      increase: true,
      data: [25, 35, 60, 45, 50, 45, 45],
    },
    {
      id: 4,
      name: "2SHARE",
      price: 1366.24,
      logo: "2share.png",
      increase: true,
      data: [35, 30, 60, 50, 35, 45, 40],
    },
  ];

  const currencies = [
    {
      img: "country-icon/eng.png",
      name: "USD",
    },
  ];

  const cryptoSelected = {
    img: "crypto-icon/bitcoin.png",
    name: "BTC",
  };
  const cryptocurrencies = [
    {
      img: "crypto-icon/bitcoin.png",
      name: "BTC",
    },
  ];

  const currencySelected = {
    img: "country-icon/eng.png",
    name: "USD",
  };

  const steps = [
    {
      img: "sign-up.png",
      title: "Sign Up",
      description:
        "Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile",
    },
    {
      img: "fund.png",
      title: "Fund",
      description:
        "Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet",
    },
    {
      img: "buy-crypto.png",
      title: "Buy Crypto",
      description:
        "Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere",
    },
  ];

  const accordions = [
    {
      title: "Why should I choose NEFA?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
    {
      title: "How secure is NEFA?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
    {
      title: "Do I have to buy a whole Bitcoin?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
    {
      title: "How do I actually buy Bitcoin?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
  ];

  return (
    <div className="App">
      <DefaultLayout>
        {/* <!-- Hero section --> */}
        <section id="hero" className="w-full pb-24">
          <BaseSection>
            <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <span
                data-aos="fade-right"
                data-aos-once="true"
                className="text-base text-gradient font-semibold uppercase"
              >
                Sign Up Today
              </span>
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
              >
                The World's{" "}
                <span className="text-header-gradient">Fastest Growing</span>{" "}
                Crypto Web App
              </h1>
              <p
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className="paragraph hidden sm:block"
              >
                Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                using bank transfers or your credit/debit card.
              </p>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="700"
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
              >
                <BaseButton style="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                  Get Started
                </BaseButton>
                <BaseButton style="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center">
                  <span>Download App</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-[#0c66ee]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </BaseButton>
              </div>
            </div>
            <div className="hidden sm:block col-span-12 lg:col-span-6">
              <div className="w-full">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  src={require("./assets/img/hero-image.webp")}
                  className="-mt-4"
                  alt="hero image"
                />
              </div>
            </div>
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-1.png")}
              className="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-2.png")}
              className="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-3.png")}
              className="hidden sm:block absolute bottom-56 right-24 w-6"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/star.png")}
              className="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
            />
          </BaseSection>
        </section>
        {/* <!-- Crypto statistic section --> */}
        <section data-aos="fade-up" className="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center">
            <LandingCryptoStatistic
              title="🔥 Trending"
              datasets={trendings}
              style="xl:border-r border-gray-200 lg:px-8"
            />
            <LandingCryptoStatistic
              title="🚀 Top Gainers"
              datasets={topGainers}
              style="xl:border-r border-gray-200 lg:px-8"
            />
            <LandingCryptoStatistic
              title="💎 Recently Added"
              datasets={recents}
              style="lg:px-8"
            />
          </div>
        </section>

        {/* <!-- Buy and trade section --> */}
        <section className="w-full my-24">
          <BaseSection>
            <div className="col-span-12 lg:col-span-6 sm:hidden mb-8">
              <div className="w-full">
                <img
                  src={require("./assets/img/buy-and-trade.webp")}
                  className="mt-4 sm:-mt-4"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4"
            >
              <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
                Buy & trade on the <br className="hidden sm:block" />
                original crypto exchange.
              </h2>
              <p className="paragraph">
                Buy now and get 40% extra bonus Minimum pre-sale amount 25
                Crypto Coin. We accept BTC crypto-currency
              </p>
              <div className="space-y-6 lg:pr-12">
                <LandingExchange
                  title="Amount"
                  name="amount"
                  type="number"
                  defaultValue="5.000"
                  exchangeSelected={currencySelected}
                  exchanges={currencies}
                />
                <LandingExchange
                  title="Get"
                  name="get"
                  type="number"
                  defaultValue="0.10901"
                  exchangeSelected={cryptoSelected}
                  exchanges={cryptocurrencies}
                />
                <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                  Buy Now
                </BaseButton>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-6 hidden sm:block"
              v-bind="$attrs"
            >
              <div className="w-full">
                <img
                  src={require("./assets/img/buy-and-trade.webp")}
                  className="mt-4 sm:-mt-4"
                  alt=""
                />
              </div>
            </div>
          </BaseSection>
        </section>
        {/* <!-- Partners section --> */}
        <section className="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
            <h3
              data-aos="flip-down"
              className="text-2xl text-neutral-800 font-semibold"
            >
              Trusted Partners Worldwide
            </h3>
            <p data-aos="flip-down" className="paragraph">
              We're partners with countless major organisations around the globe
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap items-center justify-center"
            >
              {[
                "clever.png",
                "diamon-cutts.png",
                "swiss-finance.png",
                "gambio.png",
              ].map((img) => {
                return (
                  <img
                    src={require(`./assets/img/partner/${img}`)}
                    className="sm:w-1/2 lg:w-72 mx-auto"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* <!-- Credit card section --> */}
        <section className="w-full my-36">
          <BaseSection data-aos="fade-down">
            <div className="col-span-12 lg:col-span-7">
              <div className="w-full">
                <img
                  src={require("./assets/img/nefa-cc.webp")}
                  className="w-[95%]"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
              <h2 className="text-4xl font-semibold">
                Introducing the{" "}
                <span className="text-header-gradient">NEFA</span> Credit Card
              </h2>
              <p className="paragraph">
                Subject to cardholder and rewards terms which will be available
                at application.
              </p>
              <ul className="space-y-4 sm:space-y-2">
                <LandingListItem title="Up to 3% back on purchases">
                  {" "}
                </LandingListItem>
                <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA">
                  {" "}
                </LandingListItem>
                <LandingListItem title="No annual fee"> </LandingListItem>
              </ul>
              <BaseButton style="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base">
                Join the waitlist
              </BaseButton>
            </div>
          </BaseSection>
        </section>
        {/* <!-- Advanced trading tools section --> */}
        <section className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
          <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 sm:hidden">
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/advanced-trading-tools.webp`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
            >
              <h2 className="text-4xl font-semibold">
                Advanced Trading{" "}
                <span className="text-header-gradient">Tools</span>
              </h2>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Professional Access, Non-stop Availability
                </h4>
                <p className="paragraph text-sm xl:text-base">
                  We provide premium access to crypto trading for both
                  individuals and institutions through high liquidity, reliable
                  order execution and constant uptime.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  A Range of Powerful Apis
                </h4>
                <p className="paragraph text-sm xl:text-base">
                  Set up your own trading interface or deploy your algorithmic
                  strategy with our high-performance FIX and HTTP APIs. Connect
                  to our WebSocket for real-time data streaming.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Customer Support</h4>
                <p className="paragraph text-sm xl:text-base">
                  Premium 24/7 support available to all customers worldwide by
                  phone or email. Dedicated account managers for partners.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <BaseButton style="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
                  Get Started
                </BaseButton>
                <BaseButton style="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full hover:shadow-none">
                  Learn More
                </BaseButton>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-6 hidden sm:block"
            >
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/advanced-trading-tools.webp`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Industry-leading security section --> */}
        <section className="w-full my-24">
          <div className="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
              <div className="w-full">
                <img
                  src={require("./assets/img/industry-leading-security.webp")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8"
            >
              <h2 className="text-4xl font-semibold">
                Industry-leading security from day one
              </h2>
              <ul className="space-y-8 sm:space-y-4">
                <LandingListItem title="Safety, security and compliance">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    NEFA is a licensed New York trust company that undergoes
                    regular bank exams and is subject to the cybersecurity
                    audits conducted by the New York Department of Financial
                    Services.
                    <span className="underline">Learn more</span> about our
                    commitment to security.
                  </p>
                </LandingListItem>
                <LandingListItem title="Hardware security keys">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    With NEFA you can secure your account with a hardware
                    security key via WebAuthn.
                  </p>
                </LandingListItem>
                <LandingListItem title="SOC Certifications">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    NEFA is <span className="underline">SOC 1 Type 2</span> and
                    <span className="underline">SOC 2 Type 2</span> compliant.
                    We are the world’s first cryptocurrency exchange and
                    custodian to complete these exams.
                  </p>
                </LandingListItem>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- Getting started section --> */}
        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full py-16 flex flex-col items-center">
            <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
            >
              Get started in just a few minutes
            </h2>
            <div
              data-aos="fade-up"
              className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
            >
              {steps.map((step) => {
                return <LandingStep step={step} />;
              })}
              <img
                src={require("./assets/img/getting-started/arrow.png")}
                className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
                alt=""
              />
              <img
                src={require("./assets/img/getting-started/arrow.png")}
                className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* <!-- FAQ section --> */}
        <section className="w-full my-24">
          <BaseSection>
            <div
              data-aos="fade-right"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6"
            >
              <div className="w-full">
                <img
                  src={require("./assets/img/faq.webp")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
            >
              <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
                Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
                Frequently asked questions
              </h2>

              <ul className="shadow-box">
                {accordions.map((accordion: any) => {
                  return <BaseAccordion accordion={accordion} />;
                })}
              </ul>
            </div>
          </BaseSection>
        </section>

        <div className="w-full my-10 flex justify-center">
          <a
            data-aos="flip-down"
            data-aos-delay="150"
            href="#"
            className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default App;
