import { useContext, useState } from "react";
import ListCards from "../ListCards/ListCards";
import Pagination from "./Pagination";
import { BooksCardsType } from "@/app/types/types";
import { SearchContext } from "@/app/context/SearchContext";

const DataList = ({ books }: BooksCardsType) => {
    const { searchTerm } = useContext(SearchContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const displayedItems = filteredBooks.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <ListCards books={displayedItems} />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)} />
        </>
    )
}

export default DataList