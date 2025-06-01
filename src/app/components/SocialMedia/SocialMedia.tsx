import Link from "next/link"
import style from "./socialStyles.module.scss"
import SvgFacebook from "../svg/SvgFacebook"
import SvgTwitter from "../svg/SvgTwitter"
import SvgMore from "../svg/SvgMore"

const SocialMedia = () => {
    return (
        <div className={style.socialContainer}>
            <Link href="" className={style.socialWrapperLink} ><SvgFacebook/></Link>
            <Link href="" className={style.socialWrapperLink} ><SvgTwitter/></Link>
            <Link href="" className={style.socialWrapperLink} >
                <div className={style.socialOthers}></div>
                <div className={style.socialOthers}></div>
                <div className={style.socialOthers}></div>
            </Link>
        </div>
    )
}
export default SocialMedia