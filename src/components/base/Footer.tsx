import React from "react";
import NavLink from "../NavLink";
import { ReactComponent as Logo } from "../../assets/img/logo/nefa.svg";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl px-8 mx-auto">
      <div className="w-full border-y border-[#DDDDDD]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]">
            <div className="sm:hidden xl:block mb-6 sm:mb-0">
              <a href="#">
                <Logo className="w-24 -mt-2"/>
              </a>
            </div>
            <ul className="space-y-4">
              <NavLink name="Cryptocurrency" url="#" />
              <NavLink name="Exchanges" url="#" />
              <NavLink name="Watchlist" url="#" />
              <NavLink name="Portfolio" url="#" />
              <NavLink name="NFT" url="#" />
            </ul>
          </div>
          <div className="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]">
            <ul className="space-y-4">
              <NavLink name="Products" url="#" />
              <NavLink name="About Us" url="#" />
              <NavLink name="Careers" url="#" />
              <NavLink name="Blog" url="#" />
              <NavLink name="Security" url="#" />
            </ul>
          </div>
          <div className="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]">
            <ul className="space-y-4">
              <NavLink name="Help Center" url="#" />
              <NavLink name="Contact Us" url="#" />
              <NavLink name="System Status" url="#" />
              <NavLink name="Area of Avaibility" url="#" />
              <NavLink name="Privacy Policy" url="#" />
            </ul>
          </div>
          <div className="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]">
            <h5 className="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">
              Newsletter
            </h5>
            <p className="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
              Never miss anything crypto when <br className="sm:hidden" />
              you're on the go
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                placeholder="Enter your email"
              />
              <button className="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
        &copy; Copyright 2022 NEFA LLC. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
