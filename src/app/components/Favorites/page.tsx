"use client"

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import style from "./favoritesStyles.module.scss"
import Title from "../Title/Title"
import Link from "next/link"
import SvgGoToBack from "../svg/SvgGoToBack"
import { BookCardType } from "@/app/types/types"
import SvgDarkStar from "../svg/SvgDarkStar"
import SvgLightStar from "../svg/SvgLightStar"
import SvgFavoritesRed from "../svg/SvgFavoritesRed"
import { removeFavorite } from "@/app/redux/favoritesSlice/favoritesSlice"
import SvgFavorites from "../svg/SvgFavorites"
import PopularBooks from "../PopularBooks/PopularBooks"
import useFetchCards from "@/app/helpers/useFetchCards"

const Favorites = () => {
    const { booksCards } = useFetchCards()
    const favorites = useAppSelector(state => state.favoritesBooks.favorites)
    const dispatch = useAppDispatch()

    const handleRemoveFavorite = (isbn13: number) => {
        dispatch(removeFavorite(isbn13));
    }

    if (!favorites?.length) {
        return (
            <>
                <div className="max-w-[1120px] w-full m-auto">
                    <Title title={"Favorites"} />
                    <p className={style.favoritesText}>No favorite posts yet.</p>
                </div>

            </>
        )
    }
    return (
        <>
            <div className={style.favoritesContainer}>
                <Link href="/" className={style.favoritesLink}><SvgGoToBack /></Link>
                <Title title={"Favorites"} />
                <div className={style.favoritesBooksCards}>
                    {favorites.map((book: BookCardType) => (
                        <div key={book.isbn13} className={style.favoritesBookCard}>
                            <div className={style.favoritesWrapperImgTitle}>
                                <div className={style.favoritesWrapperImg}>
                                    <img src={book.image} alt={"Favorite"} className={style.favoritesImg} />
                                </div>
                                <div className={style.favoritesWrapperTitle}>
                                    <h3 className={style.favoritesTitle}>{book.title}</h3>
                                    <p className={style.favoritesSubtitle}>{book.subtitle}</p>
                                    <div className={style.favoritesWrapperOther}>
                                        <p className={style.favoritesPrice}>{book.price}</p>
                                        <div className={style.favoritesWrapperRating}>
                                            <div className={style.favoritesRating}><SvgDarkStar /></div>
                                            <div className={style.favoritesRating}><SvgDarkStar /></div>
                                            <div className={style.favoritesRating}><SvgDarkStar /></div>
                                            <div className={style.favoritesRating}><SvgDarkStar /></div>
                                            <div className={style.favoritesRating}><SvgLightStar /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={style.favoritesWrapperIcon} onClick={() => handleRemoveFavorite(book.isbn13)}><SvgFavoritesRed />
                            </button>
                        </div>
                    ))}
                </div>
                <PopularBooks books={booksCards} />
            </div>
        </>
    )
}

export default Favorites