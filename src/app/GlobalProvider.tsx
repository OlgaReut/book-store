import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import SignIn from "./components/SignIn/page";
import { getUser } from "./redux/profileSlice/profileSlice";
import { usePathname } from "next/navigation";
import { openAddedBook } from "./redux/addCartSlice/addCartSlice";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUser());
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default GlobalProvider