import React from "react";

const Footer = () => {
  return (
    <div className="bg-black fixed p-4 bottom-0 w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="font-bold flex items-center justify-center rounded-lg text-md w-6 h-6 text-center bg-amber-50">
          <span>L</span>
        </div>
        <h1 className="text-md font-bold text-white">Lunar portal</h1>
      </div>
      <div>
        <p className="text-white text-sm">
          &copy;{new Date().getFullYear()} Lunar Portal. All right reserved.
        </p>
      </div>
      <div>
        <ul className="flex gap-3 list-none text-white text-sm">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Privacy</li>
          <li className="cursor-pointer">Terms</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
