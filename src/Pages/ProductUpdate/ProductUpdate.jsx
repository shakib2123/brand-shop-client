import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";

const ProductUpdate = () => {
  const loadedProduct = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const product = {
      brand,
      name,
      type,
      price,
      rating,
      description,
      photo,
    };

    fetch(`http://localhost:5000/products/${loadedProduct._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Product updated successfully.", "success");
        }
      });
    form.reset();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-8">
        <form onSubmit={handleUpdate} className="card-body">
          {/* form row */}
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.brand}
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.name}
                required
              />
            </div>
          </div>
          {/* form row */}
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Product Type"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.type}
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.price}
                required
              />
            </div>
          </div>
          {/* form row */}
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.rating}
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Product Name"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.description}
                required
              />
            </div>
          </div>
          {/* form row */}
          <div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Brand Name"
                className="input input-bordered w-full"
                defaultValue={loadedProduct.photo}
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
