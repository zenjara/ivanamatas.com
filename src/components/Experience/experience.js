import React from "react"

import SkillIllustration from "../../images/skills.svg"
import Resume from "../../../static/resume.pdf"
import AdvancedJS from "../../../static/certificate-of-completion-for-_advanced-javascript.pdf"
import ModernJS from "../../../static/certificate-of-completion-for-_modern-javascript.pdf"
import ReactJS from "../../../static/certificate-of-completion-for-_react.pdf"
import Coursera from "../../../static/coursera.pdf"
import style from "./experience.module.css"

const Experience = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.illustration}>
        <SkillIllustration />
      </div>
      <div className={style.experienceContainer}>
        <div className={style.experience}>
          <h2 className={style.experienceTitle}>Experience</h2>
          <h6 className={style.experienceSubTitle}>WORK HISTORY</h6>

          <div className={style.jobList}>
            <div className={style.jobListItem}>
              <h5>Full Stack Developer</h5> <span>Ars Futura</span>
              <h6>September 2018 - Present</h6>
            </div>
            <div className={style.jobListItem}>
              <h5>Outsource Software Developer</h5> <span>Privredna banka Zagreb d.d.</span>
              <h6>March 2018 - September 2018)</h6>
            </div>
            <div className={style.jobListItem}>
              <h5>Software Developer</h5> <span>Locastic</span>
              <h6>December 2016 - September 2018</h6>
            </div>
          </div>


          <h6 className={style.experienceSubTitle}>EDUCATION</h6>
          <div className={style.jobListItem}>
            <h5>Faculty of Electrical Engineering, Mechanical Engineering And Naval Architecture (FESB)</h5>
            <h6>Master’s Degree , Telecommunication and Informatics</h6>
            <h6>2014 - 2016</h6>
          </div>

        </div>


        <div className={style.certificates}>
          <h2 className={style.experienceTitle}>Certificates</h2>
          <div className={style.certificate}>
            <a href={AdvancedJS} target="_blank" rel="noreferrer">Advanced JavaScript <span>ui.dev</span> </a>
          </div>
          <div className={style.certificate}>
            <a href={ModernJS} target="_blank" rel="noreferrer">Modern JavaScript <span>ui.dev</span> </a>
          </div>
          <div className={style.certificate}>
            <a href={ReactJS} target="_blank" rel="noreferrer">React<span>ui.dev</span> </a>
          </div>
          <div className={style.certificate}>
            <a href='https://www.freecodecamp.org/certification/zenjara/legacy-front-end'
               target="_blank"
               rel="noreferrer">freeCodeCamp<span>Front End Development Program, Computer Engineering</span> </a>
          </div>
          <div className={style.certificate}>
            <a href='https://www.udemy.com/certificate/UC-3OJSSTW2/' target="_blank" rel="noreferrer">C# Basics: Learn
              to Code the Right
              Way<span>Udemy</span> </a>
          </div>
          <div className={style.certificate}>
            <a href='https://www.udemy.com/certificate/UC-K134ALPI/' target="_blank" rel="noreferrer">YouTube Best
              Practices - Tips for
              Starting a YouTube Channel<span>Udemy</span> </a>
          </div>
          <div className={style.certificate}>
            <a href='https://www.udemy.com/certificate/UC-CBTJ4JLE/' target="_blank" rel="noreferrer">Building a
              Personal
              Brand<span>Udemy</span> </a>
          </div>

          <div className={style.certificate}>
            <a href='https://www.udemy.com/certificate/UC-YMYJQ713/' target="_blank" rel="noreferrer">Practical PHP:
              Master the Basics
              and Code Dynamic Websites<span>Udemy</span> </a>
          </div>
          <div className={style.certificate}>
            <a href={Coursera} target="_blank" rel="noreferrer">Programming for Everybody<span>Coursera</span> </a>
          </div>

        </div>
      </div>
      <div className={style.resumeContainer}>
        <a href={Resume} target='_blank' rel="noreferrer" className={style.resume}>
          Resume
        </a>
      </div>

    </div>
  )
}

export default Experience