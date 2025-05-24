"use client"

import { useEffect, useState } from "react";
import { BookCardType } from "../types/types";
import { BLOG_PATH, ERROR_MSG, URL_API } from "./consts";

const useFetchCards = () => {
    const [booksCards, setBooksCards] = useState<BookCardType[]>([]);

    useEffect(() => {
        const getStructureCards = async () => {
            try {
                const response = await fetch(URL_API + BLOG_PATH);
                if (!response.ok) throw new Error(ERROR_MSG);

                const data = await response.json();
                setBooksCards(data.books)
                console.log(data.books)
            }
            catch (error) {
                console.error('Ошибка:', error)
            }
        };
        getStructureCards();
    }, []);

    return {booksCards}
}

export default useFetchCards