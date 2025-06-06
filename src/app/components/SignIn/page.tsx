"use client"

import Link from "next/link";
import style from "./signStyles.module.scss"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

const SignIn = () => {
    return (
        <>
            <div className="max-w-[1120px] w-full m-auto">
                <form className={style.signinForm}>
                    <Tabs className={style.signinWrapperTabsForm}>
                        <TabList className={style.signinWrapperTabs}>
                            <Tab className={style.signinTab}>Sign in</Tab>
                            <Tab className={style.signinTab}>Sign up</Tab>
                        </TabList>
                        <TabPanel className={style.signinWrapperPanel}> 
                            <div className={style.signinWrapperEmail}>
                                <label className={style.signinLabel} htmlFor="email">Email</label>
                                <input className={style.signinInput} type="email" id="email" placeholder="Your email"/>
                            </div>
                            <div className={style.signinWrapperPassword}>
                                <label className={style.signinLabel} htmlFor="password">Password</label>
                                <input className={style.signinInput} type="password" id="password" placeholder="Your password"/>
                            </div>
                            <Link href="#" className={style.signinForgot}>Forgot password ?</Link>
                            <button className={style.signinBtn}>Sign in</button>
                        </TabPanel>
                        <TabPanel className={style.signupWrapperPanel}>
                            <div className={style.signupWrapperName}>
                                <label className={style.signupLabel} htmlFor="name">Name</label>
                                <input className={style.signupInput} type="text" id="name" placeholder="Your name"/>
                            </div>
                            <div className={style.signupWrapperEmail}>
                                <label className={style.signupLabel} htmlFor="email">Email</label>
                                <input className={style.signupInput} type="email" id="email" placeholder="Your email"/>
                            </div>
                            <div className={style.signupWrapperPassword}>
                                <label className={style.signupLabel} htmlFor="password">Password</label>
                                <input className={style.signupInput} type="password" id="password" placeholder="Your password"/>
                            </div>
                            <div className={style.signupWrapperConfirm}>
                                <label className={style.signupLabel} htmlFor="confirm">Confirm password</label>
                                <input className={style.signupInput} type="password" id="confirm" placeholder="Confirm your password"/>
                            </div>
                            <button className={style.signupBtn}>Sign up</button>
                        </TabPanel>
                    </Tabs>
                </form>
            </div>
        </>
    )
}

export default SignIn