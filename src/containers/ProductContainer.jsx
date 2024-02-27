'use client'

import Filter from "@/components/Filter/Filter";
import SearchBar from "@/components/Inputs/SearchBar";
import React, { useState } from "react";
import { getAllProducts, getProductsByCategory } from "../../data/product-data";
import { getAllCategories } from "../../data/category-data";
import Card from "@/components/Card/Card";

export default function ProductContainer() {
  // const products = getAllProducts();
  const categories = getAllCategories();
  const [products, setProducts] = useState(getAllProducts())
  
  const handleSelectedCategory = (category) => {
    setProducts(getProductsByCategory(category))
  }
  return (
    <section className="relative">
      {/* search bar  */}
      <SearchBar />

      {/* filters  */}
      <div>
        <Filter filters={categories} selectedCategory={handleSelectedCategory}/>
        {/* selectedCategory={(cat) => handleSelectedCategory(cat)} */}
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "16px",
          paddingBottom: "50px",
        }}
        className="px-8"
      >
        {products.map((product, index) => (
          <Card productDetails={product} key={index} />
        ))}
      </ul>
    </section>
  );
}
