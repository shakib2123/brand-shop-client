import { useEffect, useState } from "react";
import AppleProduct from "./AppleProduct";

const AppleProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/apple")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <AppleProduct key={product._id} product={product}></AppleProduct>
        ))}
      </div>
    </div>
  );
};

export default AppleProducts;
