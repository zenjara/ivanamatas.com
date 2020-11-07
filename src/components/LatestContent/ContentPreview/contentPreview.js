import React from "react"

import IMButton from "../../Shared/IMButton/imButton"
import IMLabel from "../../Shared/IMLabel/imLabel"
import FlagCro from "../../../images/flag-cro.svg"
import style from "./contentPreview.module.css"

const ContentPreview = (props) => {
  const renderPodcastContent = () => {
    return (
      <div className={style.contentPreviewContainer}>
        <div className={style.imageContainerPodcast}>
          <img src={require(`../../../images/${props.image}`)} className={style.previewImagePodcast} alt='podcast' />
        </div>
        <div className={style.textContainer}>
          <div className={style.episodeInformation}>
            <IMLabel />
            <FlagCro />
          </div>
          <h3 className={style.previewTitle} style={{ paddingTop: "0" }}>{props.title}</h3>
          <p className={style.previewDescription}>{props.description}</p>
          <IMButton podcast={true} text='Play' href='https://www.youtube.com/watch?v=-aEvqLuYTK8' />
        </div>
      </div>
    )
  }

  const renderBlogContent = () => {
    return (
      <div className={style.contentPreviewContainer}>
        <div className={style.imageContainer}>
          <img src={require(`../../../images/${props.image}`)} className={style.previewImage} alt='blog' />
        </div>
        <div className={style.textContainer}>
          <h3 className={style.previewTitle}>{props.title}</h3>
          <p className={style.previewDescription}>{props.description}</p>
          <IMButton />
        </div>
      </div>
    )
  }

  return (
    props.isPodcast ? renderPodcastContent() : renderBlogContent()
  )
}

ContentPreview.defaultProps = {
  isPodcast: false,
  title: "DIY -  Create Your Own Rails Generator",
  description: "Generators are an essential tool to improve your workflow. In a few simple steps, we'll walk you through the process of creating your very own generator..",
  image: "generator.jpeg"
}

export default ContentPreview