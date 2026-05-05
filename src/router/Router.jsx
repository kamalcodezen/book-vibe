import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import HomePage from "../pages/homePage/HomePage";
import AllBooks from "../pages/allBooks/AllBooks";
import BookDetails from "../pages/bookDetails/BookDetails";
import AllListedBooks from "../pages/allListedBooks/AllListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/allListedBooks", element: <AllListedBooks /> },
      { path: "/allBooks", element: <AllBooks /> },
      { path: "/bookDetails/:id", element: <BookDetails /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);
