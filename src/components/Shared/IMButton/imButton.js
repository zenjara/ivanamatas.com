import React from "react"

import PlayIcon from "../../../images/play.svg"
import style from "./imButton.module.css"

const IMButton = (props) => {
  return (
    <button className={style.button}>
      <a href={props.href} target='_blank' className={style.buttonContent}>
        {props.podcast &&
        <PlayIcon className={style.buttonIcon} />
        }
        {props.text}
      </a>
    </button>
  )
}

IMButton.defaultProps = {
  text: "Read more",
  href: "https://medium.com/@ivanmatas/diy-create-your-own-rails-generator-6bf3d299a009",
  podcast: false
}

export default IMButton