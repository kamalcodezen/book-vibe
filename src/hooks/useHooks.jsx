import { useEffect, useState } from "react";

const useHooks = () => {
  const [allBooks, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const booksDataFetch = async () => {
      const res = await fetch("/booksData.json");
      const data = await res.json();

      setTimeout(() => {
        setBooks(data);
        setLoading(false);
      },500 );
    };

    booksDataFetch();
  }, []);

  return { allBooks, loading };
};

export default useHooks;
