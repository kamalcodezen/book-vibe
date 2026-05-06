import { useParams, useNavigate } from "react-router";
import useHooks from "../../hooks/useHooks";
import Loader from "../../components/loader/Loader";
import { useContext } from "react";
import { bookContext } from "../../context/bookContext";

const BookDetails = () => {
  const { id } = useParams();
  const { allBooks, loading } = useHooks();
  const navigate = useNavigate();
  const { handleReadBook, handleWishListBook } =
    useContext(bookContext);

  const book = allBooks.find((b) => b.bookId === parseInt(id));

  if (loading) {
    return <Loader />;
  }

  if (!book) {
    return <p className="text-center mt-10 text-red-500">Book not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-accent font-medium text-sm text-black mb-4 hover:underline"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-full h-[420px]"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
            {book.bookName}
          </h1>

          <p className="text-sm text-gray-500">by {book.author}</p>

          {/* Rating + Category */}
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-green-600 text-white px-2 py-1 rounded">
              ⭐ {book.rating}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded">
              {book.category}
            </span>
            <span className="text-gray-400">{book.yearOfPublishing}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            {book.review}
          </p>

          {/* Info */}
          <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 pt-2">
            <p>📄 Pages: {book.totalPages}</p>
            <p>🏢 {book.publisher}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => handleReadBook(book)}
              className="flex-1 py-2 rounded-md text-sm text-white bg-green-600 hover:bg-green-700 transition"
            >
              📖 Read
            </button>

            <button
              onClick={() => handleWishListBook(book)}
              className="flex-1 py-2 rounded-md text-sm border border-gray-300 hover:bg-gray-100 transition"
            >
              🤍 Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
