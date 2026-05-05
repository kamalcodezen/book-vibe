import { useContext } from "react";
import { bookContext } from "../../context/bookContext";
import BookCard from "../ui/BookCard";

const ListedWIshListBooks = () => {
  const { wishLisBookDetails } = useContext(bookContext);
  console.log(wishLisBookDetails);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
        {wishLisBookDetails.map((book) => (
          <BookCard book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedWIshListBooks;
