import { BooksCardsType } from "@/app/types/types"
import SvgArrowBack from "../svg/SvgArrowBack"
import SvgArrowForward from "../svg/SvgArrowForward"
import style from "./similarStyles.module.scss"
import BookCard from "../BookCard/BookCard"

const SimilarBooks = (props: BooksCardsType) => {
    return (
        <>
            <div className={style.similarTitleContainer}>
                <h2 className={style.similarTitle}>Similar Books</h2>
                <div className={style.similarArrows}>
                    <div className={style.similarArrow}><SvgArrowBack /></div>
                    <div className={style.similarArrow}><SvgArrowForward /></div>
                </div>
            </div>
            <div className={style.similarContainerCards}>
                <div className={style.similarCard}>
                    {props.books?.length > 0 && (<BookCard key={props.books[0].isbn13} title={props.books[0].title} subtitle={props.books[0].subtitle} price={props.books[0].price} image={props.books[0].image} isbn13={props.books[0].isbn13} />)}
                </div>
                <div className={style.similarCardMiddle}>
                    {props.books?.length > 0 && (<BookCard key={props.books[1].isbn13} title={props.books[1].title} subtitle={props.books[1].subtitle} price={props.books[1].price} image={props.books[1].image} isbn13={props.books[1].isbn13} />)}
                </div>
                <div className={style.similarCardLast}>
                    {props.books?.length > 0 && (<BookCard key={props.books[2].isbn13} title={props.books[2].title} subtitle={props.books[2].subtitle} price={props.books[2].price} image={props.books[2].image} isbn13={props.books[2].isbn13} />)}
                </div>
            </div>
        </>
    )
}

export default SimilarBooks