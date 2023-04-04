import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "index.css";

import Quiz from "pages/quiz";
import Index from "pages/index";

const router = createBrowserRouter([
  {
    path: "/quiz/:id",
    element: <Quiz />,
  },
  {
    path: "/",
    element: <Index />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
