import React from "react"
import styles from "./Navigation.module.scss"
import { Link } from "react-router-dom"

export default function Navigation(){
  return(
    <nav>
<ul>
  <li>
    <Link to="/">Catalog</Link>
  </li>
  </li>
  <li>
    <Link to="">FAQ</Link>
  </li>
  <li>
    <Link>Cart</Link>
  </li>
</ul>
    
    </nav>
  )
}