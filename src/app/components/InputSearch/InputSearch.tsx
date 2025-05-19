import SvgLoupe from "../svg/SvgLoupe"
import style from "./inputSearchStyles.module.scss"

const InputSearch = () => {
    return (
        <>
            <div className={style.inputSearchWrapper}>
                <input className={style.inputSearch} type="text" placeholder="Search" />
                <button className={style.inputSearchBtn}><SvgLoupe /></button>
            </div>
        </>
    )
}

export default InputSearch