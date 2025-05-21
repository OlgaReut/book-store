import SvgDarkStar from "../svg/SvgDarkStar"
import SvgLightStar from "../svg/SvgLightStar"
import style from "./bookCardStyles.module.scss"

const BookCard = () => {
    return (
        <div className={style.card}>
            <div className={style.cardWrapperImg}></div>
            <h3 className={style.cardTitle}></h3>
            <p className={style.cardDescription}></p>
            <div className={style.cardWrapperOther}>
                <p className={style.cardPrice}></p>
                <div className={style.cardWrapperRating}>
                    <div className={style.cardRating}><SvgDarkStar/></div>
                    <div className={style.cardRating}><SvgDarkStar/></div>
                    <div className={style.cardRating}><SvgDarkStar/></div>
                    <div className={style.cardRating}><SvgDarkStar/></div>
                    <div className={style.cardRating}><SvgLightStar/></div>
                </div>
            </div>
        </div>
    )
}

export default BookCard