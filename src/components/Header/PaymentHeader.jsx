'use client'
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PaymentHeader() {
  const { products, subTotal,total, tax, shipping, discount   } = useSelector((state) => state.cart);
  return (
    <div className="p-8 pb-0">
      <div className="flex justify-between items-center border border-2 p-5 px-8 rounded">
        <p className="text-xl text-slate-500 font-medium">Order Amount</p>
        <p className="text-4xl font-semibold">${total}.00</p>
      </div>
    </div>
  );
}
