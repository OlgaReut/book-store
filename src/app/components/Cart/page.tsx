"use client"

import Link from "next/link"
import style from "./cartStyles.module.scss"
import Title from "../Title/Title"
import SvgGoToBack from "../svg/SvgGoToBack"
import TotalPrice from "../TotalPrice/TotalPrice"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { BookCardType } from "@/app/types/types"
import { useContext, useEffect, useState } from "react"
import SvgDelete from "../svg/SvgDelete"
import { CartContext } from "@/app/context/CartContext"
import { removeAddedBook } from "@/app/redux/addCartSlice/addCartSlice"

export type CountersType = {
    [key: string]: number;
};

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const addedBook = useAppSelector(state => state.bookCart.addedBook)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (addedBook.length > 0 && cartCtx) {
            const newCounters: { [key: string]: number } = {};
            addedBook.forEach((book: BookCardType) => {
                const key = book.isbn13.toString();
                if (cartCtx.counters[key] === undefined) {
                    newCounters[key] = 0;
                }
            });
            if (Object.keys(newCounters).length > 0) {
                cartCtx.setCounters(prev => ({ ...prev, ...newCounters }));
            }
        }
    }, [addedBook, cartCtx?.counters]);

    const handleCounterPlus = (isbn13: number) => {
        const key = isbn13.toString();
        if (cartCtx) {
            cartCtx.setCounters(prev => ({
                ...prev,
                [key]: (prev[key] || 0) + 1
            }));
        }
    };

    const handleCounterMinus = (isbn13: number) => {
        const key = isbn13.toString();
        if (cartCtx) {
            cartCtx.setCounters(prev => ({
                ...prev,
                [key]: Math.max((prev[key] || 0) - 1, 0)
            }));
        }
    };

    const handleRemoveBook = (isbn13: number) => {
        dispatch(removeAddedBook(isbn13));
        if (cartCtx) {
            cartCtx.setSumTotal(0);
            cartCtx.setVat(0);
            cartCtx.setTotal(0);
        }
    }

    return (
        <>
            <div className="max-w-[1120px] w-full m-auto">
                <Link href="/" className={style.cartLink}><SvgGoToBack /></Link>
                <Title title={"Your cart"} />
                <div className={style.cartBooksCards}>
                    {addedBook.map((book: BookCardType) => (
                        <div key={book.isbn13} className={style.cartBookCard}>
                            <div className={style.cartWrapperImgTitle}>
                                <div className={style.cartWrapperImg}>
                                    <img src={book.image} alt={"Added"} className={style.cartImg} />
                                </div>
                                <div className={style.cartWrapperTitle}>
                                    <h3 className={style.cartTitle}>{book.title}</h3>
                                    <p className={style.cartSubtitle}>{book.subtitle}</p>
                                    <div className={style.cartWrapperCounter}>
                                        <button className={style.cartMinus} onClick={() => handleCounterMinus(book.isbn13)}>-</button>
                                        <p className={style.cartCounterValue}>{cartCtx?.counters[book.isbn13.toString()] || 0}</p>
                                        <button className={style.cartPlus} onClick={() => handleCounterPlus(book.isbn13)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cartWrapperPriceDelete}>
                                <p className={style.cartPrice}>{book.price}</p>
                                <button className={style.cartBtnDelete} onClick={() => handleRemoveBook(book.isbn13)}><SvgDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <TotalPrice addedBook={addedBook} />
            </div>
        </>
    )
}

export default Cart