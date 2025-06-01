import { useAppSelector } from "@/app/redux/hooks";
import SvgDarkStar from "../svg/SvgDarkStar"
import SvgLightStar from "../svg/SvgLightStar"
import style from "./descStyles.module.scss"

const DescBook = ({onAddToCart}) => {
    const selectedBook = useAppSelector(state => state.bookPage.selectedBook[3]);
    if (!selectedBook) return null;

    return (
        <div className={style.descContainer}>
            <div className={style.descWrapperOther}>
                <p className={style.descPrice}>{selectedBook}</p>
                <div className={style.descWrapperRating}>
                    <div className={style.descRating}><SvgDarkStar /></div>
                    <div className={style.descRating}><SvgDarkStar /></div>
                    <div className={style.descRating}><SvgDarkStar /></div>
                    <div className={style.descRating}><SvgDarkStar /></div>
                    <div className={style.descRating}><SvgLightStar /></div>
                </div>
            </div>
            <div className={style.descComponents}>
                <div className={style.descComponentsNames}>
                    <p className={style.descComponentsName}>Authors</p>
                    <p className={style.descComponentsName}>Publisher</p>
                    <p className={style.descComponentsName}>Language</p>
                    <p className={style.descComponentsName}>Format</p>
                </div>
                <div className={style.descComponentsValues}>
                    <p className={style.descComponentsValue}>Lentin Joseph, Aleena Johny</p>
                    <p className={style.descComponentsValue}>Apress, 2022</p>
                    <p className={style.descComponentsValue}>English</p>
                    <p className={style.descComponentsValue}>Paper book / ebook (PDF)</p>
                </div>
            </div>
            <select className={style.descSelect} name="details" id="details">
                <option value="more details">More details</option>
                <option value="year">Year</option>
                <option value="rating">Rating</option>
            </select>
            <button className={style.descBtnCart} onClick={onAddToCart}>add to cart</button>
            <p className={style.descPreview}>Preview book</p>
        </div>
    )
}

export default DescBook