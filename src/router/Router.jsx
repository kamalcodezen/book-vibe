import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import HomePage from "../pages/homePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
    errorElement: <NotFoundPage />,
  },
]);
