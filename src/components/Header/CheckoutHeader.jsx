import React from "react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  PencilSquareIcon,
  PlusCircleIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import IconBtnSml from "../Button/IconBtnSml";

export default function CheckoutHeader() {
  return (
    <header className="p-8 flex items-center gap-x-9  h-16">
      <Bars3Icon className="h-7 w-10 cursor-pointer" />


      <IconBtnSml icon={<PencilSquareIcon className="h-7 w-7" />} title="note"/>
      <IconBtnSml icon={<PaperAirplaneIcon className="h-7 w-7" />} title="Shipping"/>
      <IconBtnSml icon={<ClockIcon className="h-7 w-7" />} title="Hold Orders"/>
      <IconBtnSml icon={<PlusCircleIcon className="h-7 w-7" />} title="new item"/>

      
    </header>
  );
}
