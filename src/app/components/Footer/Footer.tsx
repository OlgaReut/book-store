import style from "./footerStyles.module.scss"

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <p className={style.footerText}>©2022 Bookstore</p>
            <p className={style.footerText}>All rights reserved</p>
        </div>
    )
}

export default Footer