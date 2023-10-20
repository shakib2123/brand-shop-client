import { useEffect, useState } from "react";
import IntelProduct from "./IntelProduct";

const IntelProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://brand-shop-server-1dl42k7ye-shakib2123.vercel.app/products/intel"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <IntelProduct key={product._id} product={product}></IntelProduct>
        ))}
      </div>
    </div>
  );
};
export default IntelProducts;
