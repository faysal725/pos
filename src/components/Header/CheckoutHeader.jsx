"use client";

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
import SettingsModal from "../Modal/Modal";
import Modal from "../Modal/Modal";

export default function CheckoutHeader() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleChildClick = () => {
    setOpenModal(false); // Update parent state
  };

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
              <p className="text-sm text-slate-600">Location</p>
              <p className="font-semibold text-lg text-slate-800">
                Los Angeles, California
              </p>
            </div>

            {/* menu links  */}
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-5 text-2xl text-slate-600"
                >
                  <Squares2X2Icon className="h-5 w-5" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-5 text-2xl text-slate-600"
                >
                  <MapPinIcon className="h-5 w-5" />
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-5 text-2xl text-slate-600"
                >
                  <CurrencyDollarIcon className="h-5 w-5" />
                  POS Invoices
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setOpenSidebar(false);
                    setOpenModal(true);
                  }}
                  className="flex items-center gap-5 text-2xl text-slate-600"
                >
                  <Cog6ToothIcon className="h-5 w-5" />
                  Settings
                </button>
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

      <Modal
        onClick={handleChildClick}
        shouldModalOpen={openModal}
        title="Settings"
      >
        <div className="">
          <button className="border-b border-b-2 px-20 text-lg font-semibold text-slate-800 border-blue-500">
            Tax On
          </button>
          <button className="border-b border-b-2 px-20 text-lg font-semibold text-slate-400">
            Tax Type
          </button>
        </div>

        <div className="py-10 text-slate-700 flex flex-col gap-y-3">
          <label htmlFor="after" className="flex text-lg gap-x-3 items-center">
            <input type="radio" name="after" id="after" className="h-5 w-5" />
            <p>After Discount</p>
          </label>
          <label htmlFor="before" className="flex text-lg gap-x-3 items-center">
            <input type="radio" name="before" id="before" className="h-5 w-5" />
            <p>Before Discount</p>
          </label>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 w-full h-14 rounded text-white text-xl">
            Update
          </button>
        </div>
      </Modal>
    </header>
  );
}
