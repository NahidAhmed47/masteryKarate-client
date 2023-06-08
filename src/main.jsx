import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import ThemeProviders from "./Providers/ThemeProviders";
import AuthProviders from "./Providers/AuthProviders";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProviders>
        <AuthProviders>
          <RouterProvider router={router}></RouterProvider>
        </AuthProviders>
      </ThemeProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
