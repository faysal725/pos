'use client'
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Modal({ shouldModalOpen,title, children, onClick }) {
  
  
  return (
    <div className={`fixed top-0 left-0 bg-slate-600/30 w-full h-full z-10 flex justify-center items-center ${!shouldModalOpen ? 'hidden' : ''}`}>
      <div className="p-3 px-6 pb-6 relative bg-white ">
        {/* settings */}
        <div>
          <div className="relative pb-8 text-center">
            <p className="text-2xl font-medium">{title}</p>
          </div>

          <div>
            {children}
          </div>
        </div>

        <ChevronLeftIcon
          onClick={onClick}
          className="h-10 w-10 absolute top-2 left-2 cursor-pointer transition-all duration-100 hover:scale-110 text-slate-600 "
        />
        
      </div>
    </div>
  );
}
