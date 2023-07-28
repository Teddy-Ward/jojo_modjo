import React from 'react'

function Partner({name, text}) {

  return (
    <>
      <div className='box-container'>
        <div className='box js-scroll scrolled fade-in-bottom'>
          <div>Partner</div>
          <div>{name} {text}</div>           
        </div>
      </div>

    </>

  )
}

export default Partner