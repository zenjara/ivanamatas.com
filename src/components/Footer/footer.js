import React from "react"

import style from "./footer.module.css"

const Footer = () => {
  return (
    <div className={style.footer}>
      <h6>Copyright© Ivan Matas. {new Date().getFullYear()} All rights reserved.</h6>
    </div>
  )
}

export default Footer