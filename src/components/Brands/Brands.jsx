import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto text-center my-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Here Are Some Brands From Were You Can Shop!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {brands.map((brand) => (
          <Link to={brand.name} key={brand._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="w-full h-56">
                <img className="h-full w-full" src={brand.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{brand.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
