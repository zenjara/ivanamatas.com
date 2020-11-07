import React from "react"

import ContentPreview from "./ContentPreview/contentPreview"
import style from "./latestContent.module.css"

const LatestContent = () => {
  return (
    <div className={style.contentContainer}>
      <div>
        <h2 className={style.contentTitle}>Latest Blog Posts</h2>
        <ContentPreview />
      </div>

      <div>
        <h2 className={style.contentTitle}>Latest Podcast Episodes</h2>
        <ContentPreview
          isPodcast={true}
          title="Jurica Šeparović - od rada u agenciji do freelanceanja"
          description="Gost u prvoj epizodi Chakule je Jurica Šeparović. On nas vodi kroz svoj poslovni put i objašnjava nam zašto i kako je počeo s freelance radom. "
          image="chakula.jpeg"
          episode="Ep. #01"
        />
      </div>
    </div>
  )
}

export default LatestContent