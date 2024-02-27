import React from "react";
import Link from "next/link";

export default function FilterBtn({ url, title , onClick}) {
  return (
    <button
      onClick={onClick}
      className="rounded-md capitalize bg-white px-3.5 py-2.5 text-base font-semibold text-gray-700 shadow-sm ring-2 ring-inset ring-gray-400 hover:bg-blue-500 hover:text-white hover:ring-blue-500 transition-all duration-150"
    >
      {title}
    </button>
  );
}
