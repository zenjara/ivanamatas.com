import React from "react"

import IMLabel from "../Shared/IMLabel/imLabel"
import style from "./skills.module.css"

const Skills = () => {
  return (
    <div sx={{ pl: "paddingLeftDefault", py: "24px" }} className={style.skillContainer}>
      <h2 variant='h2' sx={{ color: "primary", mb: "large", textAlign: "center" }}>Some of my development
        skills</h2>
      <IMLabel text='Ruby on Rails' />
      <IMLabel text='React' />
      <IMLabel text='Javascript' /> <br />
      <IMLabel text='RSpec' />
      <IMLabel text='GIT' />
      <IMLabel text='jQuery' /> <br />
      <IMLabel text='HTML' />
      <IMLabel text='CSS' /> <br />
      <IMLabel text='PHP(Symfony)' />
      <IMLabel text='Gatsby' />
    </div>
  )
}

export default Skills