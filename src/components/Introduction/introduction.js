import React from "react"
import { Link } from "gatsby"

import ProfileImg from "../../images/profile.jpg"
import style from "./introduction.module.css"

const Introduction = () => {

  function calculateAge(birthday) {
    let ageDifMs = Date.now() - birthday.getTime()
    let ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <div className={style.introductionContainer}>
      <div>
        <img className={style.introImage} src={ProfileImg} alt="My big ol' head" />
      </div>
      <div className={style.introContent}>
        <h2 className={style.title}>Hi, I’m Ivan</h2>
        <div className={style.introText}>
          <p>I am a software developer, blogger in the making and content creator 🧑‍💻</p>
          <p>Born and raised in Split, Croatia 🏡</p>
          <p>👴 I am {calculateAge(new Date(1993, 1, 10))} years young and
            work
            as a fullstack web developer at
            <a className={style.arsfutura} href="https://arsfutura.com/" target="_blank"> Ars Futura</a></p>
          <p>📍 Currently living in Zagreb</p>
          <br />
          <p>Read more about me <Link to='/about' className={style.aboutLink}>here</Link>.</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction