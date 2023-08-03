import React from 'react'
import { Fade } from "react-awesome-reveal";


function Partner({name, text, image, link}) {
 const imageURL = `../../assets/logos/` + image
  return (
    <>
    <Fade delay={500} triggerOnce>
      <div className='box'>
        <Fade delay={700} duration={2000} triggerOnce>
          <img
          src={imageURL}
          alt="Partners Logo"
          className='boxImg'
          />
        </Fade>

        <div className='partner'>
          <h2>{name}</h2>
          <div className="about-text" style={{ whiteSpace: "pre-wrap", paddingBottom:"20px" }}>{text}</div>
          <div className='boxLink'><a href={link} target="_blank">{link}</a></div>
        </div>
      </div>
    </Fade>
    </>

  )
}

export default Partner