import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import CartProduct from "./CartProduct";

const Cart = () => {
  const loadedProduct = useLoaderData();
  const [products, setProducts] = useState(loadedProduct);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-16">
        {products.map((product) => (
          <CartProduct
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default Cart;
