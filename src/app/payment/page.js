import Image from "next/image";
import ProductContainer from "@/containers/ProductContainer";
import CheckoutContainer from "@/containers/CheckoutContainer";
import PaymentContainer from "@/containers/PaymentContainer";

export default function Payment() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <CheckoutContainer/>
      </div>
      <div className="border border-l-2">
        <PaymentContainer />
      </div>
    </main>
  );
}
