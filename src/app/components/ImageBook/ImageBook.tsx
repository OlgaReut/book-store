import { useAppSelector } from "@/app/redux/hooks";
import SvgFavoritesLight from "../svg/SvgFavoritesLight"
import style from "./imageStyles.module.scss"
import SvgFavorites from "../svg/SvgFavorites";

const ImageBook = ({ onAddFavorite }) => {
    const selectedBook = useAppSelector(state => state.bookPage.selectedBook[0]);
    const favorites = useAppSelector(state => state.favoritesBooks.favorites);
    if (!selectedBook) return null;

    const selectedBookPrice: string = useAppSelector(state => state.bookPage.selectedBook[3]);
    if (!selectedBook) return null;

    let backgroundColor;
    if (parseFloat(selectedBookPrice.replace('$', '')) <= 20) {
        backgroundColor = 'rgba(244, 238, 253, 1)'
    } else if (parseFloat(selectedBookPrice.replace('$', '')) <= 40 && parseFloat(selectedBookPrice.replace('$', '')) > 20) {
        backgroundColor = 'rgba(215, 228, 253, 1)'
    } else if (parseFloat(selectedBookPrice.replace('$', '')) <= 50 && parseFloat(selectedBookPrice.replace('$', '')) > 40) {
        backgroundColor = 'rgba(254, 233, 226, 1)'
    } else {
        backgroundColor = 'rgba(202, 239, 240, 1)'
    }
    return (
        <div className={style.wrapperImage} style={{ backgroundColor }}>
            <img src={selectedBook} alt="Selected" className={style.image} />
            <button className={style.imageWrapperFav} onClick={onAddFavorite}>
                <SvgFavoritesLight />
            </ button>
        </div>
    )
}

export default ImageBook