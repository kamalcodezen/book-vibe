import BookCard from "../../components/ui/BookCard";
import Loader from "../../components/loader/Loader";
import useHooks from "../../hooks/useHooks";

const AllBooks = () => {
  const { allBooks, loading } = useHooks();

  return (
    <div className="container mx-auto my-7">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center mb-6">
            Books
          </h2>

          <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
            {allBooks.map((book) => (
              <BookCard key={book.bookId} book={book}></BookCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
