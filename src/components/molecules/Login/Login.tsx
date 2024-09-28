import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useGetUserQuery } from "../../../redux/services/user/userApi";
import { setUser } from "../../../redux/features/user/userSlice";

// export interface LoginProps {
//   windowWidth?: number;
// }

export default function Login() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { user } = useAppSelector((state) => state.user);
  const { data, error } = useGetUserQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userName = user
    ? windowWidth < 768
      ? user.username.slice(0, 1).toUpperCase()
      : `${user.firstName} ${user.lastName}`
    : "";

  if (!user) {
    if (data) {
      dispatch(setUser(data));
    } else if (error && error.data.message == "Token Expired!") {
      navigate("/login", { replace: true });
    }
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {user ? (
        <p
          className={
            windowWidth < 768 ? `${styles["login"]} ${styles["login-small"]}` : `${styles["login"]}`
          }
        >
          {userName}
        </p>
      ) : (
        <Link to="/login" className={`${styles["login"]} ${styles["login-link"]}`}>
          Login
        </Link>
      )}
    </>
  );
}
