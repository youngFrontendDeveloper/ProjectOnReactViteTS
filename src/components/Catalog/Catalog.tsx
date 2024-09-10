import React from "react";
import styles from "./Catalog.module.scss"
import data from "../../data/data.json"
import CatalogItem from "../CatalogItem/CatalogItem.tsx";

export default function Catalog(){
  return(
    <section className={styles["catalog"]} id="catalog">
        <div className="container">
        <h2 className="title">Catalog</h2>
      <input type="text" className={styles["catalog__search"]} placeholder="Search by title"/>
      <ul className={styles["catalog__list"]}>
        {
          data.map(item=>(
             <CatalogItem item={item}/>
          ))
        }
      </ul>
        </div>
    </section>
  )
}