import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo/nefa.svg";
import NavLink from "../NavLink";

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <nav id="navbar" className="relative z-10 w-full text-neutral-800">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div className="w-full flex flex-row items-center justify-between py-6">
            <div>
              <Logo />
            </div>
            <button
              className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
              //   @click="open = !open"
            >
              {!open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              {open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`${
              open ? "flex" : "hidden lg:flex"
            } w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0`}
          >
            <NavLink name="Cryptocurrency" url="#" />
            <NavLink name="Exchanges" url="#" />
            <NavLink name="Watchlist" url="#" />
            <NavLink name="NFT" url="#" />
            <NavLink name="Portfolio" url="#" />
          </ul>
        </div>
        <div
          //   :class="[open ? 'flex' : 'hidden lg:flex']"
          className="space-x-3"
        >
          {/* <base-button class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
              Login
            </base-button> */}
          {/* <base-button class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
              Sign Up
            </base-button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
