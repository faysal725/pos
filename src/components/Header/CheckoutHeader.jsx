'use client'

import React, { useState } from "react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  PencilSquareIcon,
  PlusCircleIcon,
  ClockIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  Squares2X2Icon,
  MapPinIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";
import IconBtnSml from "../Button/IconBtnSml";
import Link from "next/link";

export default function CheckoutHeader() {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  return (
    
    <header className="px-8 py-4 flex items-start gap-x-9  ">
      <button onClick={() => setOpenSidebar(true)}>
        <Bars3Icon className="h-7 w-10 cursor-pointer" />
      </button>
      

      <div className="flex items-center gap-3 lg:gap-9 flex-wrap">
        <IconBtnSml
          icon={<PencilSquareIcon className="h-7 w-7" />}
          title="note"
        />
        <IconBtnSml
          icon={<PaperAirplaneIcon className="h-7 w-7" />}
          title="Shipping"
        />
        <IconBtnSml
          icon={<ClockIcon className="h-7 w-7" />}
          title="Hold Orders"
        />
        <IconBtnSml
          icon={<PlusCircleIcon className="h-7 w-7" />}
          title="new item"
        />
      </div>

      {/* sidebar  */}
      {openSidebar ? (
          <div className="fixed top-0 left-0 bg-slate-600/30 w-full h-full z-10 flex justify-start items-center">
            <div
              className={`p-8 relative bg-white w-96 h-full transform-all duration-150 ${
                openSidebar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* logo */}
              <div>
                <p className="text-3xl font-extrabold text-slate-800 text-center">
                  go<span className=" text-lime-500">B</span>illing
                </p>
              </div>

              {/* location  */}
              <div className="pt-10 pb-8">
                <p className="text-sm text-slate-600" >Location</p>
                <p className="font-semibold text-lg text-slate-800">Los Angeles, California</p>
              </div>

              {/* menu links  */}
              <ul className="flex flex-col gap-y-6">
                <li>
                  <Link href='/dashboard' className="flex items-center gap-5 text-2xl text-slate-600">
                    <Squares2X2Icon className="h-5 w-5" />
                    Dashboard</Link>
                </li>
                <li>
                  <Link href='#' className="flex items-center gap-5 text-2xl text-slate-600">
                    
                    <MapPinIcon className="h-5 w-5" />
                    Location</Link>
                </li>
                <li>
                  <Link href='#' className="flex items-center gap-5 text-2xl text-slate-600">
                    <CurrencyDollarIcon className="h-5 w-5" />
                    POS Invoices</Link>
                </li>
                <li>
                  <button onClick={() => {
                    setOpenSidebar(false)
                    setOpenModal(true)

                  }} className="flex items-center gap-5 text-2xl text-slate-600">
                    <Cog6ToothIcon className="h-5 w-5" />
                    Settings</button>
                </li>
              </ul>


              <XMarkIcon
                onClick={() => setOpenSidebar(false)}
                className="h-10 w-10 absolute top-3 right-9 md:top-6 md:-right-14 cursor-pointer transition-all duration-100 hover:scale-110 text-black md:text-white"
              />
            </div>
          </div>
        ) : (
          <></>
        )}


        {/* modal  */}
        {openModal ? (
          <div className="fixed top-0 left-0 bg-slate-600/30 w-full h-full z-10 flex justify-center items-center">
            <div
              className={`p-8 relative bg-white w-96 h-96 transform-all duration-150 `}
            >
              {/* logo */}
              <div>
                content
              </div>



              <XMarkIcon
                onClick={() => setOpenModal(false)}
                className="h-10 w-10 absolute top-3 right-9 md:top-6 md:-right-14 cursor-pointer transition-all duration-100 hover:scale-110 text-black md:text-white"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
    </header>
  );
}
