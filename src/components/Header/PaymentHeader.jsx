import React from "react";

export default function PaymentHeader() {
  return (
    <div className="p-8 pb-0">
      <div className="flex justify-between items-center border border-2 p-5 px-8">
        <p className="text-xl text-slate-500 font-medium">Order Amount</p>
        <p className="text-4xl font-semibold">$500.5205</p>
      </div>
    </div>
  );
}
