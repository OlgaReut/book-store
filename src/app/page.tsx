"use client"

import ListCards from "./components/ListCards/ListCards";
import Subscribe from "./components/Subscribe/Subscribe";
import Title from "./components/Title/Title";
import useFetchCards from "./helpers/useFetchCards";

export default function Home() {
    const { booksCards } = useFetchCards()
    return (
        <div className="max-w-[1120px] w-full m-auto py-[72px]">
            <Title title={"New Releases Books"} />
            <ListCards books={booksCards} />
            <Subscribe />
        </div>
    )
}