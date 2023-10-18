import Swal from "sweetalert2";

const SamsungProduct = ({ product }) => {
  const { brand, name, type, price, rating, description, photo } = product;
  const cart = {
    brand,
    name,
    type,
    price,
    rating,
    description,
    photo,
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
        Swal.fire("Success", "Successfully added on cart.", "success");
      });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="h-56">
        <img className="w-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <h2 className="card-title">{brand}</h2>
        <h2 className="card-title">${price}</h2>
        <h2 className="card-title">Rating: {rating}</h2>
        <h2 className="card-title">{type}</h2>
        <div className="card-actions">
          <button onClick={handleAdd} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SamsungProduct;
