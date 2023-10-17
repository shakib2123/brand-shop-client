import { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto text-center my-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Here Are Some Brands From Were You Can Shop!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure className="w-full h-56">
              <img className="h-full w-full" src={brand.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{brand.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
