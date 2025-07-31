"use client"

import { useContext, useEffect, useState } from "react";
import DataList from "./components/Pagination/DataList";
import Subscribe from "./components/Subscribe/Subscribe";
import Title, { TitleType } from "./components/Title/Title";
import useFetchCards from "./helpers/useFetchCards";
import { SearchContext } from "./context/SearchContext";
import style from "./components/BookPage/bookStyles.module.scss"

export default function Home() {
    const { booksCards } = useFetchCards()
    const books = booksCards || []

    const { searchTerm } = useContext(SearchContext);
    const [title, setTitle] = useState("New Releases Books");

    useEffect(() => {
        let title: TitleType;
        if (searchTerm.trim() === '') {
            setTitle("New Releases Books");
        } else {
            setTitle(`'${searchTerm}' search results`);
        }
    }, [searchTerm]);

    return (
        <div className={style.mainContainer}>
            <Title title={title} />
            <DataList books={booksCards} />
            <Subscribe />
        </div>
    )
}