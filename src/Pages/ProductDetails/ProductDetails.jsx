import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";
import Rating from "react-rating";

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
    fetch("https://brand-shop-server-1dl42k7ye-shakib2123.vercel.app/cart", {
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
          <h2 className="card-title">
            {" "}
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={product.rating}
              readonly
            />
          </h2>
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
