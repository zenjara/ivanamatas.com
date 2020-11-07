import React from "react"
import { Link } from "gatsby"


import MilestoneIllustration from "../../images/milestone.svg"
import BlogImage from "../../images/generator.jpeg"
import style from "./milestone.module.css"

const Milestone = (props) => {
  return (
    <div className={props.reverse ? style.milestoneReverse : style.milestone}>
      <div>
        <MilestoneIllustration />
      </div>
      <div className={props.reverse ? style.milestoneDateReverse : style.milestoneDate}>{props.date}</div>
      <div className={style.milestoneThumbnail}>
        <div className={props.podcast ? style.milestoneTitlePodcast : style.milestoneTitle}>
          <h4>{props.title}</h4>
        </div>
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

Milestone.defaultProps = {
  title: "DIY-Create Your Own Rails Generator",
  date: "16 June 2019",
  image: BlogImage,
  podcast: false,
  reverse: false
}


export default Milestone