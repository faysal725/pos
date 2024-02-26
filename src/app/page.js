import Image from "next/image";
import ProductContainer from "@/containers/ProductContainer";
import CheckoutContainer from "@/containers/CheckoutContainer";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <CheckoutContainer/>
      </div>
      <div className="border border-l-2">
        <ProductContainer />
      </div>
    </main>
  );
}
