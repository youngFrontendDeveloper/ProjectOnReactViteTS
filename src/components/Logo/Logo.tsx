import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

export default function Logo(){
  return(
    <Link to="/" className={styles["logo"]}>
      Goods4you
    </Link>
  )

}