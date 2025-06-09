"use client"

import SvgLoupe from "../svg/SvgLoupe"
import style from "./inputSearchStyles.module.scss"
import React, { useContext } from "react";
import { SearchContext } from "@/app/context/SearchContext";

const InputSearchBurger = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext)
    return (
        <>
            <div className={style.inputSearchWrapper}>
                <input
                    className={style.inputSearch}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button className={style.inputSearchBtn}><SvgLoupe /></button>
            </div>
        </>
    )
}

export default InputSearchBurger