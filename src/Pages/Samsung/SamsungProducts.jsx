import { useEffect, useState } from "react";
import SamsungProduct from "./samsungProduct";

const SamsungProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://brand-shop-server-o37r0r355-shakib2123.vercel.app/products/samsung"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <SamsungProduct key={product._id} product={product}></SamsungProduct>
        ))}
      </div>
    </div>
  );
};

export default SamsungProducts;
