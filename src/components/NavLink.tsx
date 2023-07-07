import React from "react";

interface MyComponentProps {
  url: String;
  name: String;
}

const NavLink = (props: MyComponentProps) => {
  return (
    <li className="w-full">
      <a
        className="md:px-4 font-sans py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900"
        href={`${props.url}`}
      >
        {props.name}
      </a>
    </li>
  );
};

export default NavLink;
