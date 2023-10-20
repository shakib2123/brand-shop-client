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
import Intel from "../Pages/Intel/Intel";
import Asus from "../Pages/Asus/Asus";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://brand-shop-server-1dl42k7ye-shakib2123.vercel.app/cart"
          ),
      },
      {
        path: "/detail/:id",
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-1dl42k7ye-shakib2123.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-1dl42k7ye-shakib2123.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductUpdate></ProductUpdate>
          </PrivateRoute>
        ),
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
      {
        path: "/Intel",
        element: <Intel></Intel>,
      },
      {
        path: "/Asus",
        element: <Asus></Asus>,
      },
    ],
  },
]);

export default Router;
