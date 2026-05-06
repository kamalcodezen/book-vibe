
const getReadListFromLocalDb = () => {
    const getReadListBook = localStorage.getItem("readList")
    if (getReadListBook) return JSON.parse(getReadListBook);
    return [];
}


const addReadListLocalDb = (book) => {
    const addReadListBook = getReadListFromLocalDb()
    const exitsBook = addReadListBook.find((bk) => bk.bookId == book.bookId)
    if (!exitsBook) {
        addReadListBook.push(book)
        localStorage.setItem("readList", JSON.stringify(addReadListBook))
    }

}

export { getReadListFromLocalDb, addReadListLocalDb }