import { useState } from "react";
import { bookContext } from "./bookContext";
import toast from "react-hot-toast";

const BooksProvider = ({ children }) => {
  const [readBookDetails, setReadBookDetails] = useState([]);
  const [wishLisBookDetails, setWishLisBookDetails] = useState([]);

  // read book
  const handleReadBook = (book) => {
    const readBook = readBookDetails.find(
      (bookRead) => bookRead.bookId === book.bookId,
    );
    if (readBook) {
      toast.error(`${book.bookName} Book already added!`);
    } else {
      toast.success(`${book.bookName} Book added`);
      setReadBookDetails([...readBookDetails, book]);
    }
  };

  // wishLis Book
  const handleWishListBook = (book) => {
    const readList = readBookDetails.find(
      (readBook) => readBook.bookId == book.bookId,
    );
    if (readList) {
      toast.error(`${book.bookName} This book already in read list`);
      return;
    }

    const exitsWishList = wishLisBookDetails.find(
      (wishBook) => wishBook.bookId == book.bookId,
    );
    if (exitsWishList) {
      toast.error(`${book.bookName} Book already added!`);
    } else {
      toast.success(`${book.bookName} Book added`);
      setWishLisBookDetails([...wishLisBookDetails, book]);
    }
  };

  const data = {
    handleReadBook,
    readBookDetails,
    handleWishListBook,
    wishLisBookDetails,
  };

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default BooksProvider;
