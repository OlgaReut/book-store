import { BooksCardsType } from "@/app/types/types"
import style from "./listCardsStyles.module.scss"
import BookCard from "../BookCard/BookCard"

const ListCards = (props: BooksCardsType) => {
    return (
        <div className={style.listContainer}>
            <div className={style.listCard}>
                {props.books.map(book => (<BookCard key={book.isbn13} title={book.title} subtitle={book.subtitle} price={book.price} image={book.image} isbn13={book.isbn13}/>))}
            </div>
        </div>
    )
}

export default ListCards