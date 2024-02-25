import Filter from "@/components/Filter/Filter";
import SearchBar from "@/components/Inputs/SearchBar";
import React from "react";
import { getAllProducts } from "../../data/product-data";
import { getAllCategories } from "../../data/category-data";
import Card from "@/components/Card/Card";

export default function ProductContainer() {
  const products = getAllProducts();
  const categories = getAllCategories();
  console.log(categories);

  const ProductRow = (allProducts) => {
    return (
      <ul className="mt-6 flex flex-wrap justify-start gap-6 px-8 h-full">
        {allProducts.map((product, index) => (
          <Card productDetails={product} key={index} />
        ))}
      </ul>
    );
  };
  return (
    <section className="relative">
      {/* search bar  */}
      <SearchBar />

      {/* filters  */}
      <div >
        <Filter filters={categories} />
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "16px",
          paddingBottom: '50px'
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
