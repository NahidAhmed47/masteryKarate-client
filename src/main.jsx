import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import ThemeProviders from "./Providers/ThemeProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviders>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProviders>
  </React.StrictMode>
);
