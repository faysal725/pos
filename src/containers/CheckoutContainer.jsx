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

export default function CheckoutContainer() {
  const products = getAllProducts()
  return (
    <section>
        <CheckoutHeader />
        <ProfileSection />
        <ProductTable tableData={products}/>
    </section>
  )
}
