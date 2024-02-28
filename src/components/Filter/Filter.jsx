"use client";
import React, { useState } from "react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import FilterBtn from "../Button/FilterBtn";

export default function Filter({ filters = ["all-category", "electronics"], selectedCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-8 px-8 flex  relative items-start">
        <div className="flex justify-start  gap-4 flex-wrap">
          <FilterBtn  url='' title="All" onClick={() => selectedCategory('all')}/>
          {filters.map((filter, index) => (
            <FilterBtn key={index} url={"/" + filter} title={filter} onClick={() => selectedCategory(filter)}/>
          ))}
        </div>
        <button className="ml-auto" onClick={() => setOpen(true)}>
          <EllipsisVerticalIcon className="h-7 w-7" />
        </button>

        {open ? (
          <div className="fixed top-0 left-0 bg-slate-600/30 w-full h-full z-10 flex justify-end items-center">
            <div
              className={`p-8 relative bg-white w-full md:w-[850px] h-full transform-all duration-150 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div>
                <p className="text-xl font-medium text-slate-800 text-center">
                  Categories
                </p>
              </div>

              <div className="flex justify-start gap-x-4 py-8">
              <FilterBtn  url='' title="All" onClick={() => {
                selectedCategory('all')
                setOpen(false)
              }}/>
                {filters.map((filter, index) => (
                  <FilterBtn key={index} url={"/" + filter} title={filter} onClick={() => {

                    selectedCategory(filter)
                    setOpen(false)
                  }}/>
                ))}
              </div>

              <XMarkIcon
                onClick={() => setOpen(false)}
                className="h-10 w-10 absolute top-5 -left-14 cursor-pointer transition-all duration-100 hover:scale-110 text-white"
              />

              <XMarkIcon
                onClick={() => setOpen(false)}
                className="h-10 w-10 absolute md:hidden top-6 right-2 cursor-pointer transition-all duration-100 hover:scale-110 text-black"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
