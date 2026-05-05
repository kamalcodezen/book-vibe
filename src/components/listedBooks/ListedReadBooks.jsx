import { useContext } from "react";
import { bookContext } from "../../context/bookContext";
import BookCard from "../ui/BookCard";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";

const ListedReadBooks = () => {
  const { readBookDetails } = useContext(bookContext);

  if (readBookDetails.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
      {readBookDetails.map((book) => (
        <BookCard book={book}></BookCard>
      ))}
    </div>
  );
};

export default ListedReadBooks;
