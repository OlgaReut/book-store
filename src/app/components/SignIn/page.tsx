"use client"

import Link from "next/link";
import style from "./signStyles.module.scss"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { activate, login, register, setUser } from "@/app/redux/profileSlice/profileSlice";
import { useRouter } from "next/navigation";

type ValueButtonType = {
    value: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const SignIn = (props: ValueButtonType) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [username, setUsername] = useState("")
    const [uid, setUID] = useState("")
    const [token, setToken] = useState("")
    const [activeTabIndex, setActiveTabIndex] = useState(0); // 0 - Sign in, 1 - Sign up

    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== confirmPass) {
            alert("Passwords do not match");
            return;
        }
        dispatch(register({ email, password, username }))
    }

    if (password == confirmPass) {

    }

    const handleActivate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(activate({ uid, token }))
    }

    const isActivationNeeded = useAppSelector(state => state.profile.isActivationNeeded)
    const isActivationCompleted = useAppSelector(state => state.profile.isActivationCompleted)

    useEffect(() => {
        if (isActivationCompleted) {
            setActiveTabIndex(0);
        }
    }, [isActivationCompleted])

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login({ email: email, password: password }))
    }

    const handleDirect = () => {
        router.push("/")
    }

    const userEmail = useAppSelector(state => state.profile.email)
    useEffect(() => {
        if (userEmail) {
            handleDirect()
        }
    }, [userEmail])

    // const handleSetUser = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     dispatch(setUser([username, email]))
    //     console.log([username, email])
    // }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     handleSetUser(e);
    //     handleLogin(e);
    // };

    return (
        <>
            <div className="max-w-[1120px] w-full m-auto">
                <div className={style.signinForm}>
                    <Tabs className={style.signinWrapperTabsForm} selectedIndex={activeTabIndex} onSelect={(index) => setActiveTabIndex(index)}>
                        <TabList className={style.signinWrapperTabs}>
                            <Tab className={style.signinTab}>Sign in</Tab>
                            <Tab className={style.signinTab}>Sign up</Tab>
                        </TabList>
                        <TabPanel className={style.signinWrapperPanel}>
                            <form onSubmit={handleLogin}>
                                <div className={style.signinWrapperEmail}>
                                    <label className={style.signinLabel} htmlFor="email">Email</label>
                                    <input className={style.signinInput} type="email" id="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className={style.signinWrapperPassword}>
                                    <label className={style.signinLabel} htmlFor="password">Password</label>
                                    <input className={style.signinInput} type="password" id="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <Link href="#" className={style.signinForgot}>Forgot password ?</Link>
                                <button className={style.signinBtn} onClick={(e) => {
                                    props.onClick?.(e)
                                }}>Sign in</button>
                            </form>
                        </TabPanel>
                        <TabPanel className={style.signupWrapperPanel}>
                            {!isActivationNeeded ?
                                <form onSubmit={handleSignup}>
                                    <div className={style.signupWrapperName}>
                                        <label className={style.signupLabel} htmlFor="name">Name</label>
                                        <input className={style.signupInput} type="text" id="name" placeholder="Your name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className={style.signupWrapperEmail}>
                                        <label className={style.signupLabel} htmlFor="email">Email</label>
                                        <input className={style.signupInput} type="email" id="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className={style.signupWrapperPassword}>
                                        <label className={style.signupLabel} htmlFor="password">Password</label>
                                        <input className={style.signupInput} type="password" id="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className={style.signupWrapperConfirm}>
                                        <label className={style.signupLabel} htmlFor="confirm">Confirm password</label>
                                        <input className={style.signupInput} type="password" id="confirm" placeholder="Confirm your password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                                    </div>
                                    <button className={style.signupBtn} onClick={(e) => {
                                        props.onClick?.(e)
                                    }}>Sign up</button>
                                </form> :
                                <form onSubmit={handleActivate}>
                                    <div className={style.signupWrapperName}>
                                        <label className={style.signupLabel} htmlFor="uid">UID</label>
                                        <input className={style.signupInput} type="text" id="uid" placeholder="Your uid" value={uid} onChange={(e) => setUID(e.target.value)} />
                                    </div>
                                    <div className={style.signupWrapperEmail}>
                                        <label className={style.signupLabel} htmlFor="token">Token</label>
                                        <input className={style.signupInput} type="text" id="token" placeholder="Your token" value={token} onChange={(e) => setToken(e.target.value)} />
                                    </div>
                                    <button className={style.signupBtn} onClick={(e) => {
                                        props.onClick?.(e)
                                    }}>Activate</button>
                                </form>}
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default SignIn