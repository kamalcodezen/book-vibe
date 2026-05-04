import { Link } from "react-router";
import bannerImg from "../../assets/images/hero_img.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-base-200 px-6 gap-20">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Books to freshen up your bookshelf
        </h2>

        <p className="text-gray-500 mb-6">
          Discover amazing books and expand your knowledge with our curated
          collection.
        </p>

        <Link to="/allBooks">
          <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md">
            View The List
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-md lg:max-w-lg">
        <img
          className="w-full h-auto object-contain"
          src={bannerImg}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
