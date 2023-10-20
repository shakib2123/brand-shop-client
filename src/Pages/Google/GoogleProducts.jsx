import { useEffect, useState } from "react";

import GoogleProduct from "./GoogleProduct";

const GoogleProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://brand-shop-server-o37r0r355-shakib2123.vercel.app/products/google"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <GoogleProduct key={product._id} product={product}></GoogleProduct>
        ))}
      </div>
    </div>
  );
};
export default GoogleProducts;
