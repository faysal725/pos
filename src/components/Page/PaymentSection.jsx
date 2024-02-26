import { BanknotesIcon, CreditCardIcon, UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function PaymentSection() {

    const navigation = () => {
        return (
            <ul className="col-span-4 p-8 pr-0 flex flex-col gap-y-7">
            <li className="flex items-center gap-x-4 text-slate-500">
              <BanknotesIcon className="h-6 w-6 " />
              <Link href="/payment/cash" className="text-xl font-medium">Cash</Link>
            </li>
            <li className="flex items-center gap-x-4 text-slate-500">
              <CreditCardIcon className="h-6 w-6 " />
              <Link href="/payment/cash" className="text-xl font-medium">Card</Link>
            </li>
            <li className="flex items-center gap-x-4 text-slate-500">
              <UserIcon className="h-6 w-6 " />
              <Link href="/payment/cash" className="text-xl font-medium">On Account</Link>
            </li>
            <li className="flex items-center gap-x-4 text-slate-500">
              <CreditCardIcon className="h-6 w-6 " />
              <Link href="/payment/cash" className="text-xl font-medium">Checque</Link>
            </li>
          </ul>
        )
    }
  return (
    <div className="p-8 pb-0 h-screen">
      <div className=" grid grid-cols-12 divide-x border border-2 rounded  bg-slate-600">

        {navigation()}

        <div className="col-span-8 p-8 pr-0">
          <p>asdfsdf</p>
        </div>
      </div>
    </div>
  );
}
