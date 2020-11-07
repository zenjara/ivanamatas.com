import React from "react"
import PropTypes from "prop-types"

import style from "./imDivider.module.css"

const ImDivider = (props) => {
  return (
    <div className={style.dividerContainer} style={{ marginBottom: props.marginBottom }}>
      <hr className={style.dividerLineLeft} />
      <div className={style.dividerTitle}>{props.title}</div>
      <hr className={style.dividerLineRight} />
    </div>
  )
}

ImDivider.propTypes = {
  title: PropTypes.string.isRequired
}

ImDivider.defaultProps = {
  title: "Blog & Podcast",
  marginBottom: "144px"
}

export default ImDivider