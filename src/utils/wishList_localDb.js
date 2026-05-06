
const getWishListFromLocalDb = () => {
    const getWishListBook = localStorage.getItem("wishList")
    if (getWishListBook) return JSON.parse(getWishListBook);
    return [];
}

const addWishListLocalDb = (book) => {

    const wishListBook = getWishListFromLocalDb()
    const isExitsBook = wishListBook.find(bk => bk.BookId == book.BookId)
    if (~isExitsBook) {
        wishListBook.push(book)
        localStorage.setItem("wishList", JSON.stringify(wishListBook))
    }

}

export { addWishListLocalDb, getWishListFromLocalDb }