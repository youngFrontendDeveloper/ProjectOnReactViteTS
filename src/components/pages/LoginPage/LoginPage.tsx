import styles from "./LoginPage.module.scss";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Title from "../../atoms/Title/Title";
import Form from "../../molecules/Form/Form";
import Container from "../../templates/Container/Container";
import { useLoginMutation } from "../../../redux/services/auth/authApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUser } from "../../../redux/features/user/userSlice";
import Loading from "../../molecules/Loading/Loading";
import { setToken } from "../../../redux/features/auth/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valueError, setValueError] = useState({ username: "", password: "" });
  const [login, { isLoading, error }] = useLoginMutation();
  const [responseError, setResponseError] = useState("");
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  if (token && user) {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    setResponseError(error?.data?.message);
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "") {
      setValueError({
        ...valueError,
        username: "Login is required",
      });
    } else if (password === "") {
      setValueError({
        ...valueError,
        password: "Password is required",
      });
    }

    if (username !== "" && password !== "") {
      try {
        const user = await login({ username, password }).unwrap();

        if (user) {
          dispatch(setUser(user));
          dispatch(setToken(user.accessToken));

          return <Navigate to="/" state={{ from: location }} />;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={styles["login"]}>
      <Container extensionClass={styles["login__container"]}>
        <Title title="Sign in" extensionClass={styles["login__title"]} />
        <Form>
          <Input
            placeholder="Login"
            extensionClass={styles["login__input"]}
            err={valueError.username}
            fn={(e) => {
              setUsername(e.target.value);
              setValueError({ ...valueError, username: "" });
              setResponseError("");
            }}
          />
          <Input
            placeholder="Password"
            extensionClass={styles["login__input"]}
            err={valueError.password}
            fn={(e) => {
              setPassword(e.target.value);
              setValueError({ ...valueError, password: "" });
              setResponseError("");
            }}
          />
          <Button type="submit" text="Sign in" fn={handleSubmit} />
        </Form>
        {isLoading && <Loading />}
        {responseError && <p className={styles["login__error"]}>{responseError}</p>}
      </Container>
    </section>
  );
}
