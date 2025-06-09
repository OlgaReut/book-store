"use client"

import Link from "next/link"
import style from "./burgerMenu.module.scss"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { useRouter } from "next/navigation"
import { logout } from "@/app/redux/profileSlice/profileSlice"
import { useEffect } from "react"
import InputSearchBurger from "../../InputSearchBurger/InputSearchBurger"

type BurgerMenuType = {
    onClose: () => void
}

const BurgerMenu = ({ onClose }: BurgerMenuType) => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const profileEmail = useAppSelector(state => state.profile.email)

    const handleRedirect = () => {
        router.push("/")
    }

    const handleLogOut = () => {
        dispatch(logout())
    }
    const userEmail = useAppSelector(state => state.profile.email)
    useEffect(() => {
        if (!userEmail) {
            handleRedirect()
        }
    }, [userEmail])
    
    return (
        <div className={style.burgerContainer}>
            <div className={style.burgerHeader}>
                <button className={style.burgerBtnClose} onClick={onClose}>
                    <div className={style.headerBurgerLineUp}></div>
                    <div className={style.headerBurgerLineDown}></div>
                </button>
            </div>
            <div className={style.burgerContainerDesc}>
                <div className={style.burgerDesc}>
                    <InputSearchBurger />
                    {profileEmail ? 
                    <Link href="/components/Favorites" className={style.burgerLink} onClick={onClose}>Favorites</Link> : <div></div>} 
                    {profileEmail ? 
                    <Link href="/components/Cart" className={style.burgerLink} onClick={onClose}>Cart</Link> : <div></div>}
                </div>
                {profileEmail ?
                <button className={style.burgerBtn} onClick={handleLogOut}>Log Out</button> :
                <Link href="/components/SignIn" className={style.burgerSign} onClick={onClose}><button className={style.burgerBtn}>Sign In</button></Link>}
            </div>
        </div>
    )
}

export default BurgerMenu