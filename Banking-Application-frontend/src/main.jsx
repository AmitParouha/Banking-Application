import React from "react";
import ReactDOM from "react-dom";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import SignIn from "../src/Components/LoginPages/SignIn";
// import SignUp from "../src/Components/LoginPages/SignUp";
// import Layout from "./Common/Layout";
// import LandingPage from "./Components/LandingPage.jsx";
// import Services from "./Components/Services";
import App from "../src/App";
import "./index.css";

// const router = createBrowserRouter({
//   path: "",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <LandingPage />,
//     },
//     {
//       path: "signin",
//       element: <SignIn />,
//     },
//     {
//       path: "signup",
//       element: <SignUp />,
//     },
//     {
//       path: "services",
//       element: <Services />,
//     },
//   ],
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
