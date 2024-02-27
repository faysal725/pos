'use client'


import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

export default function ItemCounter({ quantity = 1 , setQty}) {
    const [count, setCount] = useState(quantity)

    useEffect(() => {
      setCount(quantity)
    }, [quantity])

    const handleIncrease = () => {
      setQty(count+1)
    }

    const handleDecrease = () => {
      if (count > 1) {
        setQty(count - 1)
      }
    }
    
  return (
    <div className="flex gap-x-3 items-center justify-center">
      <button className="" onClick={() => handleDecrease()}>
        <MinusCircleIcon className="h-8 w-8 transition-all duration-150 hover:scale-110 hover:text-indigo-500" />
      </button>
      <span>{count}</span>
      <button>
        <PlusCircleIcon className="h-8 w-8 transition-all duration-150 hover:scale-110 hover:text-indigo-500" onClick={() => handleIncrease()}/>
      </button>
    </div>
  );
}
