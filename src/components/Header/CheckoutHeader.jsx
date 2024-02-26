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
    // h-16
    <header className="px-8 py-4 flex items-start gap-x-9  ">
      <Bars3Icon className="h-7 w-10 cursor-pointer" />

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
    </header>
  );
}
