import React from "react"

import ProgrammingIcon from "../../images/interests/programming.svg"
import EducationIcon from "../../images/interests/education.svg"
import BusinessIcon from "../../images/interests/business.svg"
import InvestingIcon from "../../images/interests/investing.svg"
import style from "./interests.module.css"

const Interests = () => {
  const interestListItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "24px",

    "& svg": {
      height: "50px",
      width: "50px",
      marginRight: "large"
    }
  }

  const interestListItem = (icon, text) => {
    return (
      <div sx={interestListItemStyle}>
        {icon}
        <h2 as='h3' variant='h3'>
          {text}
        </h2>
      </div>)
  }

  return (
    // <div sx={{pr: 'paddingRightDefault', py: '24px'}} className={style.interestContainer}>
    <div className={style.interestContainer}
         sx={{ pl: "paddingLeftDefault", py: "24px", background: "rgba(246, 99, 90, 0.85)" }}>
      <div sx={{ flexDirection: "column" }}>
        <h2 variant='h2' sx={{ color: "background", mb: "large", pl: "54px" }}>My Interests</h2>
        <div>
          {interestListItem(<ProgrammingIcon />, "Programming")}
          {interestListItem(<EducationIcon />, "Self Education")}
          {interestListItem(<BusinessIcon />, "Entrepreneurship")}
          {interestListItem(<InvestingIcon />, "Investing")}
        </div>
      </div>
    </div>
  )
}

export default Interests