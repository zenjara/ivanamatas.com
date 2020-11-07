import React from "react"
import { Link } from "gatsby"

import style from "./navbar.module.css"

const Navbar = (props) => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.brand}>
        <Link to="/">
          <div className={style.fullName}>Ivan Matas</div>
          <div className={style.title}>Full Stack Developer</div>
        </Link>
      </div>

      <div className={style.navLinks}>
        <Link className={props.active ? style.active : null} to="/about/">About me</Link>
        <Link to="https://medium.com/@ivanmatas" target='_blank'>Blog</Link>
        <Link to="https://www.youtube.com/channel/UCjSkilftOHgTQQfP-BQV8HQ/videos" target='_blank'>Podcast</Link>
        <Link to="/#contact">Contact</Link>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  active: false
}

export default Navbar