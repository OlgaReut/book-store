import { useState } from "react";
import ListCards from "../ListCards/ListCards";
import Pagination from "./Pagination";
import { BooksCardsType } from "@/app/types/types";

const DataList = ({ books }: BooksCardsType) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalPages = Math.ceil(books.length / itemsPerPage);

    const displayedItems = books.slice(
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