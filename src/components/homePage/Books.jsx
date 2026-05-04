import BookCard from "../ui/BookCard";
import Loader from "../loader/Loader";
import { Link } from "react-router";
import useHooks from "../../hooks/useHooks";

const Books = () => {
  const { allBooks, loading } = useHooks();

  return (
    <div className="container  mx-auto my-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center mb-6">
        Books
      </h2>

      {loading ? (
        <Loader />
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
          {allBooks.slice(0, 6).map((book) => (
            <BookCard key={book.bookId} book={book}></BookCard>
          ))}
        </div>
      )}

      <div className="flex justify-center my-10">
        <Link to="/allBooks">
          <button className="py-2 px-6 rounded-md bg-green-600 hover:bg-green-700 transition text-sm font-medium text-gray-100">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Books;
