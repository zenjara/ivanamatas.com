import React from "react"
import { Link } from "gatsby"

import MilestoneIllustration from "../../images/milestone.svg"
import BlogImage from "../../images/generator.jpeg"
import PodcastImage from "../../images/chakula.jpeg"
import Milestone from "../Milestone/milestone"
import style from "./timelineMilestone.module.css"

const TimelineMilestone = (props) => {
  const renderSingleMilestone = () => {
    return <Milestone title={props.title} image={props.image} reverse={props.reverse} podcast={props.podcast} />
  }

  const reverseMilestone = () => {
    return (
      <div className={style.timeline}>
        {renderSingleMilestone(props)}
        <div className={style.timelinePlaceholder} />
      </div>
    )
  }

  const milestone = () => {
    return (
      <div className={style.timeline}>
        <div className={style.timelinePlaceholder} />
        {renderSingleMilestone(props)}
      </div>
    )
  }


  return props.reverse ? reverseMilestone() : milestone()
}

TimelineMilestone.defaultProps = {
  image: BlogImage,
  reverse: false,
  podcast: false
}

export default TimelineMilestone