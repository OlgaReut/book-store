"use client"

import { useContext, useState } from "react"
import style from "./totalStyles.module.scss"
import { BookCardType } from "@/app/types/types"
import { CartContext } from "@/app/context/CartContext"

type TotalPriceType = {
    addedBook: BookCardType[]
}

const TotalPrice = ({ addedBook }: TotalPriceType) => {
    const cartCtx = useContext(CartContext);
    // const [sumTotal, setSumTotal] = useState(0)
    // const [vat, setVat] = useState(0)
    // const [total, setTotal] = useState(0)

    if (!cartCtx) {
        return null;
    }

    const handleCheckout = () => {
        let totalSum = 0;
        addedBook.forEach((book) => {
            const count = cartCtx.counters[book.isbn13.toString()] || 0;
            const priceNumber = parseFloat(book.price.replace(/[^0-9.-]+/g, ""));
            totalSum += priceNumber * count;   
        });
        const vatSum = parseFloat((totalSum * 0.18).toFixed(2)); 
        if (cartCtx) {
            cartCtx.setSumTotal(totalSum);
            cartCtx.setVat(vatSum);
        }
        cartCtx.setTotal(totalSum + vatSum);
    };

    return (
        <div className={style.totalContainer}>
            <div className={style.totalSumTotal}>
                <p className={style.totalSumName}>Sum total</p>
                <div className={style.totalSumValue}>$ {cartCtx?.sumTotal}</div>
            </div>
            <div className={style.totalVat}>
                <p className={style.totalVatName}>VAT</p>
                <div className={style.totalVatValue}>$ {cartCtx?.vat}</div>
            </div>
            <div className={style.totalTotal}>
                <p className={style.totalTotalName}>total:</p>
                <div className={style.totalTotalValue}>$ {cartCtx?.total}</div>
            </div>
            <button className={style.totalBtn} onClick={handleCheckout}>check out</button>
        </div>
    )
}

export default TotalPrice