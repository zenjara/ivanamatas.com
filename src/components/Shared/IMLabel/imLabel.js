import React from "react"

import style from "./imLabel.module.css"

const IMLabel = (props) => {
  return (
    <div className={style.label}>
      {props.text}
    </div>
  )
}

IMLabel.defaultProps = {
  text: "Ep. #01"
}

export default IMLabel