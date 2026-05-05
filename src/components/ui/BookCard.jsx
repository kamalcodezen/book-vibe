
import { Link } from "react-router";


const BookCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    bookId,
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="group relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-500 mx-auto">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={bookName}
            className="w-full h-[380px] group-hover:scale-105 transition duration-500"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Rating badge */}
          <div className="absolute top-3 right-3 bg-white/90 text-black px-2 py-1 rounded-md text-xs font-semibold shadow">
            ⭐ {rating}
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 w-full p-5 text-white">
          <h2 className="text-lg font-bold leading-tight">{bookName}</h2>
          <p className="text-sm text-gray-300 mb-2">by {author}</p>

          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="bg-green-600/80 px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-gray-300">{yearOfPublishing}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/20 backdrop-blur px-2 py-1 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-md bg-green-600 hover:bg-green-700 transition text-sm font-medium">
              📖 Read
            </button>

            <button className="flex-1 py-2 rounded-md border border-white/60 hover:bg-white hover:text-black transition text-sm font-medium">
              🤍 Wishlist
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
