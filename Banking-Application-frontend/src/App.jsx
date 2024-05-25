import React from "react";
import LandingPage from "./Components/LandingPage";
import Layout from "../src/Common/Layout";
import SignIn from "../src/Components/LoginPages/SignIn";
import SignUp from "../src/Components/LoginPages/SignUp";

import Services from "../src/Components/Services";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
