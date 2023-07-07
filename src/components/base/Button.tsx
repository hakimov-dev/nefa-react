import React, { ReactNode } from "react";

interface SlotComponentProps {
    children: ReactNode;
  }

const BaseButton: React.FC<SlotComponentProps> = ({ children }) => {
    return (
    <button
        className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"
      >
        { children }
      </button>
    )
}

export default BaseButton