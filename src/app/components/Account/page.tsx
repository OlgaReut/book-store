import Link from "next/link"
import style from "./accountStyles.module.scss"
import SvgGoToBack from "../svg/SvgGoToBack"
import Title from "../Title/Title"

const Account = () => {
    return (
        <>
            <div className="max-w-[1120px] w-full m-auto">
                <Link href="/" className={style.accountLink}><SvgGoToBack /></Link>
                <Title title={"Account"} />
                <form className={style.accountForm}>
                    <legend className={style.accountFormProfile}>profile</legend>
                    <div className={style.accountWrapperProfile}>
                        <div className={style.accountWrapperName}>
                            <label className={style.accountNameLabel} htmlFor="name">Name</label>
                            <input className={style.accountNameInput} type="text" id="name" placeholder="Your name" />
                        </div>
                        <div className={style.accountWrapperEmail}>
                            <label className={style.accountEmailLabel} htmlFor="email">Email</label>
                            <input className={style.accountEmailInput} type="email" id="email" placeholder="Your email" />
                        </div>
                    </div>
                    <legend className={style.accountFormPassword}>password</legend>
                    <div className={style.accountWrapperPassword}>
                        <label className={style.accountPasswordLabel} htmlFor="password">Password</label>
                        <input className={style.accountPasswordInput} type="password" id="password" placeholder="Your password" />
                    </div>
                    <div className={style.accountWrapperNewPassword}>
                        <div className={style.accountWrapperInputNewPassword}>
                            <label className={style.accountNewPasswordLabel} htmlFor="newPassword">New Password</label>
                            <input className={style.accountNewPasswordInput} type="password" id="newPassword" placeholder="New password" />
                        </div>
                        <div className={style.accountWrapperInputConfirm}>
                            <label className={style.accountConfirmLabel} htmlFor="confirm">Confirm new password</label>
                            <input className={style.accountConfirmInput} type="password" id="confirm" placeholder="Confirm new password" />
                        </div>
                    </div>
                    <div className={style.accountFormBtns}>
                        <button className={style.accountFormBtnSave}>Save changes</button>
                        <button className={style.accountFormBtnCancel}>cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Account