import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import BooksProvider from "./context/BooksProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  </StrictMode>,
);
