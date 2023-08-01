import React from 'react'
import { Reveal } from "react-awesome-reveal";

const CND = process.env.REACT_APP_SUPABASE_CDN

function Partner({name, text, image, link}) {
 const imageURL = `../../assets/logos/` + image
  return (
    <>
    <Reveal className="slide-left">
      <div className='box'>
        <img
          src={imageURL}
          alt="Partners Logo"
          className='boxImg'
        />
        <div className='partner'>
          <h2>{name}</h2>
          <div>{text}</div>
          <div className='boxLink'>{link}</div>
        </div>
      </div>
    </Reveal>
    </>

  )
}

export default Partner