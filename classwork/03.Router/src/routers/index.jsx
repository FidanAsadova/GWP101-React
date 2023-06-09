import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
