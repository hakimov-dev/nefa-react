import React, { ReactNode } from "react";

interface SlotComponentProps {
    children: ReactNode;
  }

const BaseSection: React.FC<SlotComponentProps> = ({ children }) => {
    return (
        <div className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden">
            { children }
        </div>
    )
}

export default BaseSection