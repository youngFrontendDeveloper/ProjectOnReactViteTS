import React from "react"
import styles from "./Navigation.module.scss"

export default function Navigation(){
  return(
    <nav>
<ul>
  <li>
    <Link>Catalog</Link>
  </li>
  <li>
    <Link>FAQ</Link>
  </li>
  <li>
    <Link>Cart</Link>
  </li>
</ul>
    
    </nav>
  )
}