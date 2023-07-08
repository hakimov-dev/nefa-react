import React, { useState } from "react";

interface propsType {
  title: string;
  name: string;
  defaultValue: any;
  exchangeSelected: any;
  exchanges: any;
  type: string;
}

interface itemType {
  name: string;
  img: string;
}

const Exchange = (props: propsType) => {
  const [openDropdown, setDropDown] = useState<Boolean>(false);

  function toggleDropDown() {
    setDropDown(!openDropdown);
  }

  console.log(props);
  return (
    <div className="flex items-center space-x-4">
      <div className="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
        <span className="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">
          {props.title}{" "}
        </span>
        <input
          type={props.type}
          className="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
          name={props.name}
          value={props.defaultValue}
        />
      </div>
      <div className="relative w-full max-w-[106px] sm:max-w-[159px]">
        <button
          type="button"
          className="w-full flex items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
          onClick={toggleDropDown}
        >
          <img
            src={require(`../../assets/img/${props.exchangeSelected.img}`)}
            alt=""
            className="flex-shrink-0 h-6 w-6 rounded-full"
          />
          <span className="ml-3 block truncate">
            {props.exchangeSelected.name}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {openDropdown && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border border-[#0c66ee]"
            onClick={toggleDropDown}
          >
            {props.exchanges.map((exchange: itemType) => {
              return (
                <li
                id="listbox-option-0"
                className="text-gray-900 cursor-default select-none relative px-3 sm:px-5 py-2"
                role="option"
              >
                <div className="flex items-center">
                  <img
                    src={require(`../../assets/img/${exchange.img}`)}
                    alt=""
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                  />
                  <span className="font-normal ml-3 block truncate">
                    {exchange.name}
                  </span>
                </div>
              </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Exchange;
