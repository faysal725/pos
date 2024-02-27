import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export default function SearchBar({searchString}) {

  const handleChange = (name) => {
    searchString(name)
  }
  return (
    <div className="border border-b shadow-xl px-8" >
      <div className="relative flex flex-1 h-16 " >
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-0 top-4 h-8 w-8 text-gray-600"
          aria-hidden="true"
        />
        <input
          id="search-field"
          className="block h-full w-full border-0 py-0 pl-14 pr-0 text-gray-900 placeholder:text-gray-400  text-lg focus:outline-none"
          placeholder="Search Products..."
          type="search"
          name="search"
          onChange={(e) => handleChange(e.target.value)}
        />

        <img src="/barcode.png" alt="" className="absolute top-3 right-0 h-9 w-9"/>
      </div>
    </div>
  );
}
