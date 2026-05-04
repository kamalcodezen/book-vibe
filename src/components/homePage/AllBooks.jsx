import { useEffect, useState } from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksDataFetch = async () => {
      const res = await fetch("booksData.json");
      const data = await res.json();
      setBooks(data);
    };

    booksDataFetch();
  }, []);

  console.log(books);

  return (
    <div className="container  mx-auto my-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center">Books</h2>
    </div>
  );
};

export default AllBooks;
