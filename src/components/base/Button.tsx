import React, { ReactNode } from "react";

interface SlotComponentProps {
    style: string,
    children: ReactNode;
  }

const BaseButton: React.FC<SlotComponentProps> = ({style, children }) => {
    return (
    <button
        className={`text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 ${style}`}
      >
        { children }
      </button>
    )
}

export default BaseButton