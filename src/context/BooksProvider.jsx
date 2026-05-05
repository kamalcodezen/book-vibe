import { useState } from "react";
import { bookContext } from "./bookContext";

const BooksProvider = ({ children }) => {
  const [readBookDetails, setReadBookDetails] = useState([]);

  const handleReadBook = (book) => {
    const readBook = readBookDetails.find(
      (bookRead) => bookRead.bookId === book.bookId,
    );
    if (readBook) {
      alert("book already added");
    } else {
      alert("book added");
      setReadBookDetails([...readBookDetails, book]);
    }
  };

  
  const data = { handleReadBook, readBookDetails };

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default BooksProvider;
