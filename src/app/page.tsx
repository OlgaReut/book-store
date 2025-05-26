"use client"

import DataList from "./components/Pagination/DataList";
import Subscribe from "./components/Subscribe/Subscribe";
import Title from "./components/Title/Title";
import useFetchCards from "./helpers/useFetchCards";

export default function Home() {
    const { booksCards } = useFetchCards()
    const books = booksCards || []
    return (
        <div className="max-w-[1120px] w-full m-auto">
            <Title title={"New Releases Books"} />
            <DataList books={booksCards}/>
            <Subscribe />
        </div>
    )
}