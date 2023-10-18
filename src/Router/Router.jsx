import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Samsung from "../Pages/Samsung/Samsung";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ProductUpdate from "../Pages/ProductUpdate/ProductUpdate";
import Apple from "../Pages/Apple/Apple";
import Sony from "../Pages/Sony/Sony";
import Google from "../Pages/Google/Google";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/Samsung",
        element: <Samsung></Samsung>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/detail/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductUpdate></ProductUpdate>,
      },
      {
        path: "/Apple",
        element: <Apple></Apple>,
      },
      {
        path: "/Sony",
        element: <Sony></Sony>,
      },
      {
        path: "/Google",
        element: <Google></Google>,
      },
    ],
  },
]);

export default Router;
