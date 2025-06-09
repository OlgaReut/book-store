"use client"

import Link from "next/link"
import InputSearch from "../InputSearch/InputSearch"
import SvgBasket from "../svg/SvgBasket"
import SvgFavorites from "../svg/SvgFavorites"
import SvgLogo from "../svg/SvgLogo"
import SvgProfile from "../svg/SvgProfile"
import style from "./headerStyles.module.scss"
import { useAppSelector } from "@/app/redux/hooks"
import SvgFavoritesAdded from "../svg/SvgFavoritesAdded"
import SvgBasketAdded from "../svg/SvgBasketAdded"
import { useState } from "react"
import BurgerMenu from "./BurgerMenu/BurgerMenu"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(prevState => !prevState)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }

    const favorites = useAppSelector(state => state.favoritesBooks.favorites)
    const addedBook = useAppSelector(state => state.bookCart.addedBook)
    const profileEmail = useAppSelector(state => state.profile.email)
    return (
        <>
            {openMenu && <div className={style.overlay} onClick={closeMenu}></div>}
            <div className={style.headerContainer}>
                <Link href="/" className={style.headerLogo}>
                    <SvgLogo />
                </Link>
                <InputSearch />
                <div className={style.headerButtons}>
                    <Link href="/components/Favorites" className={style.headerLinkButton}><button className={style.headerWrapperButton}>
                        {favorites?.length ? <SvgFavoritesAdded /> : <SvgFavorites />}</button></Link>
                    <Link href="/components/Cart"><button className={style.headerWrapperButton}>{addedBook?.length ? <SvgBasketAdded /> : <SvgBasket />}</button>
                    </Link>
                    <button className={style.headerBurger} onClick={toggleMenu}>
                        <div className={style.headerBurgerLineUp}></div>
                        <div className={style.headerBurgerLineMiddle}></div>
                        <div className={style.headerBurgerLineDown}></div>
                    </button>
                    {profileEmail ? <Link href="/components/Account" className={style.headerLinkButton}><button className={style.headerWrapperButton}><SvgProfile /></button></Link> : <Link href="/components/SignIn" className={style.headerLinkButton}><button className={style.headerWrapperButton}><SvgProfile /></button></Link>}
                </div>
            </div>
            {openMenu && <BurgerMenu onClose={closeMenu} />}
        </>
    )
}

export default Header