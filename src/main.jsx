import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <Services />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },

      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/casestudy",
        element: <CaseStudy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
