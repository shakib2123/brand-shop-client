import Navbar from "../../components/Navbar/Navbar";

const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = { name, photo };
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brand),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-8">
        <form onSubmit={handleAdd} className="card-body">
          {/* form row */}
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Product Name"
                className="input input-bordered w-full"
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
                placeholder="Product Type"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
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
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full"
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
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
