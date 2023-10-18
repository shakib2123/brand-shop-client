import Swal from "sweetalert2";

const CartProduct = ({ product, products, setProducts }) => {
  const { _id, brand, name, type, price, rating, description, photo } = product;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
      }
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
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
