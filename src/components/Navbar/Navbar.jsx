import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const navLink = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/addproduct">Add Product</NavLink>
    </li>
    <li>
      <NavLink to="/cart">My Cart</NavLink>
    </li>
  </>
);
const Navbar = () =>
{
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
    const handleLogOut = () => {
      logOut()
        .then((res) => console.log(res.user))
        .catch((err) => console.log(err));
    };
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown relative">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm absolute dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img
          className="w-2/3 "
          src="https://i.ibb.co/Cz0DbQj/Global-Tech-logos-transparent.png"
          alt="Global-Tech-logos-transparent"
          border="0"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>User: {user.displayName ? user.displayName : "Unknown"}</p>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn btn-sm bg-pink-600 hover:bg-pink-500 text-white">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
