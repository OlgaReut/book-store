"use client"

import { useState } from "react"
import style from "./totalStyles.module.scss"

const TotalPrice = () => {
    const [sumTotal, setSumTotal] = useState(0)
    const [vat, setVat] = useState(0)
    const [total, setTotal] = useState(0)

    return (
        <div className={style.totalContainer}>
            <div className={style.totalSumTotal}>
                <p className={style.totalSumName}>Sum total</p>
                <div className={style.totalSumValue}>$ {sumTotal}</div>
            </div>
            <div className={style.totalVat}>
                <p className={style.totalVatName}>VAT</p>
                <div className={style.totalVatValue}>$ {vat}</div>
            </div>
            <div className={style.totalTotal}>
                <p className={style.totalTotalName}>total:</p>
                <div className={style.totalTotalValue}>$ {total}</div>
            </div>
            <button className={style.totalBtn}>check out</button>
        </div>
    )
}

export default TotalPrice