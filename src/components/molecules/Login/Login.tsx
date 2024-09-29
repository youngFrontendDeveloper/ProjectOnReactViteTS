import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export interface LoginProps {
    user: {
        name: string;
    } | null;
    windowWidth?: number;
}

export default function Login({ user, windowWidth: customWindowWidth }: LoginProps) {
    const [windowWidth, setWindowWidth] = useState<number>(customWindowWidth || window.innerWidth);

    const userName = user ? (windowWidth < 768 ? user.name.slice(0, 1).toUpperCase() : user.name) : '';

    useEffect(() => {
        if (!customWindowWidth) {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [customWindowWidth]);

    return (
        <>
            {user ? (
                <p className={windowWidth < 768 ? `${styles["login"]} ${styles["login-small"]}` : `${styles["login"]}`}>
                    {userName}
                </p>
            ) : (
                <Link to="/login" className={`${styles["login"]} ${styles["login-link"]}`}>Login</Link>
            )}
        </>
    );
}


