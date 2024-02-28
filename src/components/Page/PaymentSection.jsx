"use client";

import {
  BanknotesIcon,
  CreditCardIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";
import FormInput from "../Inputs/FormInput";
import IconBtnLg from "../Button/IconBtnLg";
import { useRouter } from "next/navigation";

export default function PaymentSection() {
  const router = useRouter();
  const [userData, setUserData] = useState({});

  const navigation = () => {
    return (
      <ul className="col-span-4 p-8 pr-0 flex flex-col gap-y-7 border-r">
        <li className="flex items-center gap-x-4 text-slate-500">
          <BanknotesIcon className="h-6 w-6 " />
          <Link href="/payment/cash" className="text-xl font-medium">
            Cash
          </Link>
        </li>
        <li className="flex items-center gap-x-4 text-indigo-500">
          <CreditCardIcon className="h-6 w-6 " />
          <Link href="/payment/cash" className="text-xl font-medium ">
            Card
          </Link>
        </li>
        <li className="flex items-center gap-x-4 text-slate-500">
          <UserIcon className="h-6 w-6 " />
          <Link href="/payment/cash" className="text-xl font-medium">
            On Account
          </Link>
        </li>
        <li className="flex items-center gap-x-4 text-slate-500">
          <CreditCardIcon className="h-6 w-6 " />
          <Link href="/payment/cash" className="text-xl font-medium">
            Checque
          </Link>
        </li>
      </ul>
    );
  };
  return (
    <div className="p-8 pb-0 h-[80vh]">
      <div className=" grid grid-cols-12 divide-x border border-2 rounded   h-full">
        {navigation()}

        <div className="col-span-8 p-8  flex flex-col gap-y-8">
          <label className="block">
            <FormInput
              changedValue={(card_name) =>
                setUserData({ ...userData, card_name: card_name })
              }
              type="text"
              label="Card Name"
              placeholder=""
            />
          </label>

          <label className="block">
            <FormInput
              changedValue={(card_number) =>
                setUserData({ ...userData, card_number: card_number })
              }
              type="text"
              label="Card Number"
              placeholder=""
            />
          </label>

          <label className="block">
            <FormInput
              changedValue={(card_expire_date) =>
                setUserData({ ...userData, card_expire_date: card_expire_date })
              }
              type="text"
              label="Card_Expire_Date"
              placeholder=""
            />
          </label>

          <label className="block">
            <FormInput
              changedValue={(card_secret) =>
                setUserData({ ...userData, card_secret: card_secret })
              }
              type="text"
              label="Card_Secret"
              placeholder=""
            />
          </label>

          <div className=" flex justify-start gap-2 mt-auto">
            <IconBtnLg
              icon={<XCircleIcon className="h-10 w-10" />}
              classes="bg-red-100 text-red-500 hover:bg-red-500"
              title="Cancel"
              onClick={() => router.push("/")}
            />

            <IconBtnLg
              icon={<BanknotesIcon className="h-10 w-10" />}
              classes="bg-blue-500 text-blue-100 hover:bg-blue-100 hover:text-blue-500"
              title="Complete Payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
