import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const cart = {
    brand: product.brand,
    name: product.name,
    type: product.type,
    price: product.price,
    rating: product.rating,
    description: product.description,
    photo: product.photo,
  };
  const handleAdd = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Success", "Successfully added in cart.", "success");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="card card-compact max-w-xl mx-auto my-16 bg-base-100 shadow-xl">
        <figure className="h-56">
          <img className="w-full" src={product.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <h2 className="card-title">{product.brand}</h2>
          <h2 className="card-title">${product.price}</h2>
          <h2 className="card-title">Rating: {product.rating}</h2>
          <h2 className="card-title">{product.type}</h2>
          <div className="card-actions">
            <button onClick={handleAdd} className="btn btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
