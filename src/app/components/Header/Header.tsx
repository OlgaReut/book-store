import Link from "next/link"
import InputSearch from "../InputSearch/InputSearch"
import SvgBasket from "../svg/SvgBasket"
import SvgFavorites from "../svg/SvgFavorites"
import SvgLogo from "../svg/SvgLogo"
import SvgProfile from "../svg/SvgProfile"
import style from "./headerStyles.module.scss"

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <Link href="/" className={style.headerLogo}>
                <SvgLogo />
            </Link>
            <InputSearch />
            <div className={style.headerButtons}>
                <button className={style.headerWrapperButton}><SvgFavorites /></button>
                <Link href="/components/Cart"><button className={style.headerWrapperButton}><SvgBasket /></button></Link>
                <button className={style.headerWrapperButton}><SvgProfile /></button>
            </div>
        </div>
    )
}

export default Header