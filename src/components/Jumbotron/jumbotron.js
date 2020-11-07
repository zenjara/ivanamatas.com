import React from "react"

import BlogIllustration from "../../images/blog.svg"
import style from "./jumbotron.module.css"

const Jumbotron = (props) => {
  return (
    <div>
      <div sx={{ alignItems: "center", backgroundColor: "greyOpacity", py: "54px", mb: "88px" }}
            style={props.reverse === true ? { flexDirection: "row-reverse" } : {}}>
        <div sx={{ flexBasis: "50%", justifyContent: "center" }}>
          <h2 variant='jumbotronTitle' as='h1' className={style.jumbotronTitle}>{props.title}</h2>
        </div>
        <div sx={{ flexBasis: "40%", "& svg": { maxHeight: "425px" } }}>
          {props.illustration}
        </div>
      </div>
    </div>
  )
}

Jumbotron.defaultProps = {
  title: "Blog",
  illustration: <BlogIllustration />,
  reverse: false
}

export default Jumbotron