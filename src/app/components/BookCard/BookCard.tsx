"use client"

import { BookCardType } from "@/app/types/types"
import SvgDarkStar from "../svg/SvgDarkStar"
import SvgLightStar from "../svg/SvgLightStar"
import style from "./bookCardStyles.module.scss"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { openSelectedBook } from "@/app/redux/bookPageSlice/bookPageSlice"
import { useRouter } from "next/navigation"

const BookCard = (props: BookCardType) => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const handleRedirect = () => {
        router.push("/components/BookPage")
    };

    const handleBookClick = () => {
        dispatch(openSelectedBook([props.image, props.title, props.subtitle, props.price, props.isbn13]));
        handleRedirect()
    };

    let backgroundColor;
    if (parseFloat(props.price.replace('$', '')) <= 20) {
        backgroundColor = 'rgba(244, 238, 253, 1)'
    } else if (parseFloat(props.price.replace('$', '')) <= 40 && parseFloat(props.price.replace('$', '')) > 20) {
        backgroundColor = 'rgba(215, 228, 253, 1)'
    } else if (parseFloat(props.price.replace('$', '')) <= 50 && parseFloat(props.price.replace('$', '')) > 40) {
        backgroundColor = 'rgba(254, 233, 226, 1)'
    } else {
        backgroundColor = 'rgba(202, 239, 240, 1)'
    }

    return (
        <div className={style.card} onClick={handleBookClick}>
            <div className={style.cardWrapperImg} style={{ backgroundColor }}>
                <img src={props.image} alt={props.image} className={style.cardImg} />
            </div>
            <div className={style.cardDescription}>
                <div className={style.cardText}>
                    <h3 className={style.cardTitle}>{props.title}</h3>
                    <p className={style.cardSubtitle}>{props.subtitle}</p>
                </div>
                <div className={style.cardWrapperOther}>
                    <p className={style.cardPrice}>{props.price}</p>
                    <div className={style.cardWrapperRating}>
                        <div className={style.cardRating}><SvgDarkStar /></div>
                        <div className={style.cardRating}><SvgDarkStar /></div>
                        <div className={style.cardRating}><SvgDarkStar /></div>
                        <div className={style.cardRating}><SvgDarkStar /></div>
                        <div className={style.cardRating}><SvgLightStar /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard