// import React from "react";
import styles from "./Login.module.scss";
import {Link} from "react-router-dom";

const user = {
    name: "Johnson Smith"
}
export default function Login() {
    return (
        <>
            {
                user ?
                    <p className={styles["login"]}>{user.name}</p>
                    :
                    <Link to="/login" className={styles["login__link"]}>Login</Link>


            }
        </>
    )
}