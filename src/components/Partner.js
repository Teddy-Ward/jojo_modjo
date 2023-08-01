import React from 'react'
import { Fade } from "react-awesome-reveal";


function Partner({name, text, image, link}) {
 const imageURL = `../../assets/logos/` + image
  return (
    <>
    <Fade delay={500}>
      <div className='box'>
        <img
          src={imageURL}
          alt="Partners Logo"
          className='boxImg'
        />
        <div className='partner'>
          <h2>{name}</h2>
          <div style={{ whiteSpace: "pre-wrap", textAlign:"left", paddingBottom:"20px" }}>{text}</div>
          <div className='boxLink'><a href={link} target="_blank">{link}</a></div>
        </div>
      </div>
    </Fade>
    </>

  )
}

export default Partner