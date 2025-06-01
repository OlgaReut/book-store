import style from "./titleStyle.module.scss"

export type TitleType = {
    title: string
}

const Title = (props: TitleType) => {   // (props: {title: string})
    return (
        <h1 className={style.title}>{props.title}</h1>
    )
}

export default Title