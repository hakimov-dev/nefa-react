import React, { ReactNode } from 'react';
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'

interface SlotComponentProps {
    children: ReactNode;
  }

const Default: React.FC<SlotComponentProps> = ({ children }) =>  {
  return (
    <div className="min-h-screen font-sans antialiased relative">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"></div>
        <Navbar />
         
         {/* Content */}
         {children}

         <a title="Support project" target="_blank" className="fixed bottom-5 right-4 z-50" href="https://www.buymeacoffee.com/hakimovDev"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&amp;emoji=&amp;slug=hakimovDev&amp;button_colour=FFDD00&amp;font_colour=000000&amp;font_family=Lato&amp;outline_colour=000000&amp;coffee_colour=ffffff" /></a>
        <Footer/>
      </div>
    </div>
  );
};

export default Default;
