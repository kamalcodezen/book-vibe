import BookCard from "../../components/ui/BookCard";
import Loader from "../../components/loader/Loader";
import useHooks from "../../hooks/useHooks";
import { Link } from "react-router";

const AllBooks = () => {
  const { allBooks, loading } = useHooks();

  return (
    <div className="container mx-auto my-7">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {/* heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center mb-6">
            Books
          </h2>

          {/* all card */}
          <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 md:gap-10 w-full">
            {allBooks.map((book) => (
              <BookCard key={book.bookId} book={book}></BookCard>
            ))}
          </div>

          {/* home button */}
          <div className="min-h-[200px] flex items-center justify-center">
            <Link to="/">
              <button
                className="group relative px-8 py-3 rounded-xl text-white font-semibold 
        bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 
        shadow-lg hover:shadow-2xl 
        transition duration-300 
        hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                {/* Glow effect */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                {/* Button Content */}
                <span className="relative flex items-center gap-2">
                  🏠 <span>Go Home</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
