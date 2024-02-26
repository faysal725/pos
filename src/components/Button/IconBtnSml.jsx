import React from "react";

export default function IconBtnSml({ icon, title }) {
  return (
    <button className="rounded-md capitalize bg-indigo-100 px-3.5 py-2 text-base font-semibold text-indigo-500 shadow-sm  hover:bg-indigo-500 flex items-center gap-2 hover:text-white">
      {icon}
      {title}
    </button>
  );
}
