"use client";
import React, { useState } from "react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import FilterBtn from "../Button/FilterBtn";

export default function Filter({ filters = ["all-category", "electronics"] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="py-8 px-8 flex  relative">
      <div className="flex justify-start gap-x-4">
        {filters.map((filter, index) => (
          <FilterBtn key={index} url={"/" + filter} title={filter} />
        ))}
      </div>
      <button className="ml-auto" onClick={() => setOpen(true)}>
        <EllipsisVerticalIcon className="h-7 w-7" />
      </button>


{open ? (
        <div className="fixed top-0 left-0 bg-slate-600 w-full h-full z-10 flex justify-end items-center">
          <div className=" bg-white w-96 h-full">


            asdfsd
          </div>
        </div>
      ) : (
        <></>
      )}

    </div>

    {/* {open ? (
        <div className="absolute top-0 left-0 bg-slate-600 w-full h-full z-10">

        </div>
      ) : (
        <></>
      )} */}
    </>
  );
}
