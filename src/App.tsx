import React from "react";
// Layouts
import DefaultLayout from "./layouts/default";
// Components
import BaseButton from "./components/base/Button";
import BaseSection from "./components/base/Section";

function App() {
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
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers or your credit/debit card.
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

                {/* <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" /> */}
              </BaseButton>
            </div>
          </div>
          <div className="hidden sm:block col-span-12 lg:col-span-6">
            <div className="w-full">
              <img
                data-aos="fade-up"
                data-aos-once="true"
                // :src="require('~/assets/img/hero-image.webp')"
                className="-mt-4"
                alt=""
              />
            </div>
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            // :src="require('~/assets/img/pattern/ellipse-1.png')"
            className="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            // :src="require('~/assets/img/pattern/ellipse-2.png')"
            className="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            // :src="require('~/assets/img/pattern/ellipse-3.png')"
            className="hidden sm:block absolute bottom-56 right-24 w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            // :src="require('~/assets/img/pattern/star.png')"
            className="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
          />
          </BaseSection>
        </section>
      </DefaultLayout>
    </div>
  );
}

export default App;
