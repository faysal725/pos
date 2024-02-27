'use client'
import React from 'react'
import {
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
  } from "@heroicons/react/20/solid";
import CheckoutHeader from '@/components/Header/CheckoutHeader';
import ProfileSection from '@/components/Page/ProfileSection';
import ProductTable from '@/components/Table/ProductTable';
import { getAllProducts } from '../../data/product-data';
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, setQuantity } from '@/features/cart/cartSlice';


export default function CheckoutContainer() {
  
  const { products, subTotal,total, tax, shipping, discount   } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleQty = (qty, index) => {
    let quantityChangeProduct = {
      index: index,
      quantity: qty
    }

    dispatch(setQuantity(quantityChangeProduct))
  }
  return (
    <section>
        <CheckoutHeader />
        <ProfileSection />

        {/* {
          products? <ProductTable tableData={products} subTotal={subTotal} tax={tax} shipping={shipping} total={total} discount={discount}/>
          :
          <></>
        } */}
        <ProductTable tableData={products} subTotal={subTotal} tax={tax} shipping={shipping} total={total} discount={discount} deleteByIndex={(index) => dispatch(removeProduct(index))} setQuantity={(qty, index) => handleQty(qty, index)}/>
    </section>
  )
}
