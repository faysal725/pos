import React from "react";

export default function IconBtnLg({
  icon,
  classes = "text-indigo-500 bg-indigo-100 hover:bg-indigo-500",
  title,
  onClick
}) {
  return (
    <button
      className={`rounded capitalize  px-6 py-4 text-3xl font-semibold  ${classes} shadow-sm   flex items-center gap-5 hover:text-white`}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
}
