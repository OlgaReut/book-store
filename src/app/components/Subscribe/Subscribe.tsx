import style from "./subscribeStyles.module.scss"

const Subscribe = () => {
    return (
        <form className={style.subscribeContainer}>
            <h2 className={style.subscribeTitle}>Subscribe to Newsletter</h2>
            <p className={style.subscribeDescription}>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
            <div className={style.subscribeWrapperInput}>
                <input className={style.subscribeInput} type="email" placeholder="Your email" />
                <button className={style.subscribeButton}>Subscribe</button>
            </div>
        </form>
    )
}

export default Subscribe