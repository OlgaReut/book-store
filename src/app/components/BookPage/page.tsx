"use client"

import Link from "next/link"
import style from "./bookStyles.module.scss"
import Title from "../Title/Title"
import ImageBook from "../ImageBook/ImageBook"
import DescBook from "../DescBook/DescBook"
import TabsBook from "../TabsBook/TabsBook"
import SocialMedia from "../SocialMedia/SocialMedia"
import Subscribe from "../Subscribe/Subscribe"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import SimilarBooks from "../SimilarBooks/SimilarBooks"
import useFetchCards from "@/app/helpers/useFetchCards"
import SvgGoToBack from "../svg/SvgGoToBack"
import { openAddedBook } from "@/app/redux/addCartSlice/addCartSlice"
import { BookCardType } from "@/app/types/types"
import { addFavorite, removeFavorite } from "@/app/redux/favoritesSlice/favoritesSlice"

const BookPage = () => {
    const { booksCards } = useFetchCards()

    const selectedBook = useAppSelector(state => state.bookPage.selectedBook[1]);

    const addedBookObj: BookCardType = {
        image: useAppSelector(state => state.bookPage.selectedBook[0]),
        title: useAppSelector(state => state.bookPage.selectedBook[1]),
        subtitle: useAppSelector(state => state.bookPage.selectedBook[2]),
        price: useAppSelector(state => state.bookPage.selectedBook[3]),
        isbn13: useAppSelector(state => state.bookPage.selectedBook[4])
    }

    const dispatch = useAppDispatch()

    const handleAddToCart = () => {
        dispatch(openAddedBook(addedBookObj))
    }

    const handleAddFavorite = () => {
        dispatch(addFavorite(addedBookObj));
    }

    if (!selectedBook) {
        return <div className={style.mainContainer}>Загрузка...</div>;
    }

    return (
        <>
            <div className={style.mainContainer}>
                <Link href="/" className={style.pageLink}><SvgGoToBack /></Link>
                <Title title={selectedBook} />
                <div className={style.bookVisual}>
                    <ImageBook onAddFavorite={handleAddFavorite} />
                    <DescBook onAddToCart={handleAddToCart} />
                </div>
                <TabsBook />
                <SocialMedia />
                <Subscribe />
                <SimilarBooks books={booksCards} />
            </div>
        </>

    )
}

export default BookPage