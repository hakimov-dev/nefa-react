import React, { ReactNode } from 'react';

interface SlotComponentProps {
    children: ReactNode;
  }

const Default: React.FC<SlotComponentProps> = ({ children }) =>  {
  return (
    <div className="min-h-screen font-sans antialiased relative">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"></div>
        {/* Navbar's place */}
         
         {/* Content */}
         {children}

        {/* Footer's place */}
      </div>
    </div>
  );
};

export default Default;
