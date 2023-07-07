import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState<Boolean>(false)
    const [dropdownNavbar, setDropDown] = useState<Boolean>(false)

    return (
        <nav id="navbar" className="relative z-10 w-full text-neutral-800">
        <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
          <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
            <div className="w-full flex flex-row items-center justify-between py-6">
              <div>
                <img 
                // :src="require('~/assets/img/logo/nefa.svg')" 
                className="w-24 xl:w-28" alt="Nefa Logo" />
              </div>
              <button className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" 
            //   @click="open = !open"
              >
                {/* // <SegmentIcon v-if="!open" :size="24" />
                // <CloseIcon v-else :size="24" /> */}
              </button>
            </div>
            <ul
            //   :class="[open ? 'flex' : 'hidden lg:flex']"
            className="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
            >
              {/* <NavLink name="Cryptocurrency" url="#" />
              <NavLink name="Exchanges" url="#" />
              <NavLink name="Watchlist" url="#" />
              <NavLink name="NFT" url="#" />
              <NavLink name="Portfolio" url="#" /> */}
              <li className="relative group">
                <button
                  className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
                //   @click="dropdownToggler"
                //   @blur="dropdownToggler"
                >
                  <span>Products</span>
                  {/* <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
                  <ChevronDownIcon v-else :size="16" /> */}
                </button>
                {/* <transition name="transform-fade-down"> */}
                  <ul
                    // v-if="dropdownNavbar"
                    className="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
                  >
                    <li>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Exchange</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Wallet</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Explorer</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Charts</a>
                    </li>
                  </ul>
                {/* </transition> */}
              </li>
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
    )
}

export default Navbar