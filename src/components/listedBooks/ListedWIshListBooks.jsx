import { useContext, useState } from "react";
import { bookContext } from "../../context/bookContext";
import BookCard from "../ui/BookCard";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";

const ListedWIshListBooks = () => {
  const { wishLisBookDetails } = useContext(bookContext);
  const [filterShorting, setFilterShorting] = useState(wishLisBookDetails);




  
  if (filterShorting.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
        {filterShorting.map((book,ind) => (
          <BookCard key={ind} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedWIshListBooks;
