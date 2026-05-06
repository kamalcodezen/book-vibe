import { useState } from "react";
import { bookContext } from "./bookContext";
import toast from "react-hot-toast";
import {
  addReadListLocalDb,
  getReadListFromLocalDb,
} from "../utils/readList_localDb";
import {
  addWishListLocalDb,
  getWishListFromLocalDb,
} from "../utils/wishList_localDb";

const BooksProvider = ({ children }) => {
  const [readBookDetails, setReadBookDetails] = useState(() =>
    getReadListFromLocalDb(),
  );
  const [wishLisBookDetails, setWishLisBookDetails] = useState(() =>
    getWishListFromLocalDb(),
  );

  // read book
  const handleReadBook = (book) => {
    // localStorage function
    addReadListLocalDb(book);

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
    // localStorage function
    addWishListLocalDb(book);

    // jodi readlist a thake tahole wishList a add hobe na
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
