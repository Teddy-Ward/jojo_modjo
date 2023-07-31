import React from 'react'
import Images from '../components/Images'
import Partner from '../components/Partner'

function MSLA() {
  return (
    <>
    <div className="box-container">
      <Partner name="MSLA" text="some text" image="MSLA.png" link="http://MSLA.com"/>
      <Images type="MSLA" />
    </div>
    </>
  )
}

export default MSLA