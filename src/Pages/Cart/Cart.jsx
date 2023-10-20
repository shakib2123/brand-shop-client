import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import CartProduct from "./CartProduct";

const Cart = () => {
  const loadedProduct = useLoaderData();
  const [products, setProducts] = useState(loadedProduct);
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      {products.length >0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-16">
          {isShow
            ? products?.map((product) => (
                <CartProduct
                  key={product._id}
                  product={product}
                  products={products}
                  setProducts={setProducts}
                ></CartProduct>
              ))
            : products
                ?.slice(0, 3)
                .map((product) => (
                  <CartProduct
                    key={product._id}
                    product={product}
                    products={products}
                    setProducts={setProducts}
                  ></CartProduct>
                ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Nothing purchased by you...
          </h2>
        </div>
      )}
      {products && (
        <div className="flex justify-center mb-9">
          {products.length > 3 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn btn-secondary"
            >
              {isShow ? "See Less" : "Show More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
