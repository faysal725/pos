import Image from "next/image";
import ProductContainer from "@/containers/ProductContainer";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="bg-gray-500">asdfsdf</div>
      <div >
        <ProductContainer />
      </div>
    </main>
  );
}
