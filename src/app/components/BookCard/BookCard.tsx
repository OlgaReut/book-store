import { BookCardType } from "@/app/types/types"
import SvgDarkStar from "../svg/SvgDarkStar"
import SvgLightStar from "../svg/SvgLightStar"
import style from "./bookCardStyles.module.scss"
import { useState } from "react"

const BookCard = (props: BookCardType) => {
    let backgroundColor;
    if(parseFloat(props.price.replace('$', ''))<=20){
        backgroundColor = 'rgba(244, 238, 253, 1)'
    } else if(parseFloat(props.price.replace('$', ''))<=40 && parseFloat(props.price.replace('$', ''))>20) {
        backgroundColor = 'rgba(215, 228, 253, 1)'
    } else if(parseFloat(props.price.replace('$', ''))<=50 && parseFloat(props.price.replace('$', ''))>40) {
        backgroundColor = 'rgba(254, 233, 226, 1)'
    } else {
        backgroundColor = 'rgba(202, 239, 240, 1)'
    }
    
    return (
        <div className={style.card}>
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