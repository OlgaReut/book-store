"use client"

import Link from "next/link"
import style from "./cartStyles.module.scss"
import Title from "../Title/Title"
import SvgGoToBack from "../svg/SvgGoToBack"
import TotalPrice from "../TotalPrice/TotalPrice"
import { useAppSelector } from "@/app/redux/hooks"
import { BookCardType } from "@/app/types/types"
import { useState } from "react"
import SvgDelete from "../svg/SvgDelete"

const Cart = () => {
    const [counter, setCounter] = useState(0)
    const addedBook = useAppSelector(state => state.bookCart.addedBook)

    const handleCounterPlus = () => {
        setCounter(prev => prev + 1)
    }
    const handleCounterMinus = () => {
        setCounter(prev => prev - 1)
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
                                    <img src={book.image} alt={"Added"} className={style.cartImg}/>
                                </div>
                                <div className={style.cartWrapperTitle}>
                                    <h3 className={style.cartTitle}>{book.title}</h3>
                                    <p className={style.cartSubtitle}>{book.subtitle}</p>
                                    <div className={style.cartWrapperCounter}>
                                        <button className={style.cartMinus} onClick={handleCounterMinus}>-</button>
                                        <p className={style.cartCounterValue}>{counter}</p>
                                        <button className={style.cartPlus} onClick={handleCounterPlus}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cartWrapperPriceDelete}>
                                <p className={style.cartPrice}>{book.price}</p>
                                <button className={style.cartBtnDelete}><SvgDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <TotalPrice />
            </div>
        </>
    )
}

export default Cart