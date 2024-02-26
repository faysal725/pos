'use client'


import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

export default function ItemCounter({ defaultValue = 1 }) {
    const [count, setCount] = useState(defaultValue)
  return (
    <div className="flex gap-x-3 items-center justify-center">
      <button className="" onClick={() => console.log('asdf')}>
        <MinusCircleIcon className="h-8 w-8" />
      </button>
      <span>{count}</span>
      <button>
        <PlusCircleIcon className="h-8 w-8" onClick={() => console.log('asdf')}/>
      </button>
    </div>
  );
}
