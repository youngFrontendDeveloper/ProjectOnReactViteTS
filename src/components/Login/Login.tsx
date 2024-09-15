import styles from "./Login.module.scss";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const user = {
    name: "Johnson Smith"
}
export default function Login() {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const userName = windowWidth < 768 ? user.name.slice(0, 1).toUpperCase() : user.name;

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <>
            {
                user ?
                    <p className={windowWidth < 768 ? `${ styles["login"]} ${ styles["login-small"]}` : `${ styles["login"]}` }>{userName}</p>
                    :
                    <Link to="/login" className={styles["login__link"]}>Login</Link>


            }
        </>
    )
}