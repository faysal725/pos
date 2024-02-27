"use client";

import { setProduct, getProducts, setSubTotal, setTotal, emptyCart } from "@/features/cart/cartSlice";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Card({ productDetails }) {
  // for form submission
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const addToCart = async () => {
    dispatch(setProduct(productDetails));
  };

  useEffect(() => {
    if (products.length > 0) {
      dispatch(setSubTotal(products))
      
      
    }else{
      dispatch(setSubTotal([]))
    }
    dispatch(setTotal(products))
  }, [products])

  return (
    <div
      onClick={() => addToCart()}
      className="group relative max-w-72 border flex flex-col justify-between border-slate-400  rounded-sm w-40"
    >
      <div className="overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 h-40 w-40 p-2 mx-auto">
        <img
          src={productDetails.image}
          alt={productDetails.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-auto  py-1 text-center p-2">
        <p className="text-xl font-bold  text-gray-500">
          ${productDetails.price}
        </p>
      </div>
      <div className=" border border-t p-2">
        <h3 className="text-sm font-semibold text-gray-500 ">
          {productDetails.title.length > 12
            ? productDetails.title.slice(0, 12) + ". . ."
            : productDetails.title}
        </h3>
      </div>
    </div>
  );
}
