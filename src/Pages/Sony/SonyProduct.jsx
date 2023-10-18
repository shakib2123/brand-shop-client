import { Link } from "react-router-dom";

const SonyProduct = ({ product }) => {
  const { _id, brand, name, type, price, rating, description, photo } = product;

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
        <div className="card-actions space-x-8">
          <Link to={`/detail/${_id}`}>
            <button className="btn btn-primary">See More</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-secondary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SonyProduct;
