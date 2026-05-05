import { useContext, useEffect, useState } from "react";
import { bookContext } from "../../context/bookContext";
import BookCard from "../ui/BookCard";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";

const ListedReadBooks = ({ shorting }) => {
  const { readBookDetails } = useContext(bookContext);

  const [filterShorting, setFilterShorting] = useState(readBookDetails);

  // data sort
  useEffect(() => {
    if (shorting) {
      if (shorting === "pages") {
        const shortPage = [...readBookDetails].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilterShorting(shortPage);
      } else if (shorting === "rating") {
        const shortRating = [...readBookDetails].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilterShorting(shortRating);
      }
    }
  }, [readBookDetails, shorting]);

  if (filterShorting.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
      {filterShorting.map((book, ind) => (
        <BookCard key={ind} book={book}></BookCard>
      ))}
    </div>
  );
};

export default ListedReadBooks;
