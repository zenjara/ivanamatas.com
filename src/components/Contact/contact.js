import React from "react"

import ContactIllustration from "../../images/contact.svg"
import GithubIcon from "../../images/social/github.svg"
import InstagramIcon from "../../images/social/instagram.svg"
import YoutubeIcon from "../../images/social/youtube.svg"
import LinkedinIcon from "../../images/social/linkedin.svg"
import style from "./contact.module.css"

const Contact = () => {
  return (
    <div id="contact" className={style.contactContainer}>
      <div className={style.contactInfo}>
        <div className={style.emailContainer}>
          <a href="mailto:ivan.matas2@gmail.com" className={style.email}>ivan.matas2@gmail.com</a>
          <p className={style.contactDescription}>
            You have a question for me? <br />
            You have a blog/podcast topic suggestions?<br />
            You want to discuss something related to the content?<br />
            You have business inquires?<br />
            Just wanna say hi? <br />
            Send me an email and I will respond as soon as I can :)<br />
          </p>
        </div>

        <div className={style.socialContent}>
          <h5 className={style.socialTitle}>SOCIAL MEDIA</h5>
          <div className={style.socialIcons}>
            <a href="https://www.linkedin.com/in/ivan-matas-258326107/"
               target="_blank"><LinkedinIcon /></a>
            <a href="https://www.instagram.com/xivanmatas/"
               target="_blank"><InstagramIcon /></a>
            <a href="https://github.com/zenjara"
               target="_blank"><GithubIcon /></a>
            <a href="https://www.youtube.com/channel/UCjSkilftOHgTQQfP-BQV8HQ"
               target="_blank"><YoutubeIcon /></a>
          </div>
        </div>
      </div>

      <div className={style.contactIllustration}>
        <ContactIllustration />
      </div>
    </div>
  )
}

export default Contact