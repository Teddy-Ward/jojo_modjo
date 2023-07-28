import React from "react"
import useElementOnScreen from "../components/hooks/useElementOnScreen"



function Gallery() {
  
  const [ containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold:1
  })

  
  
  const classes = isVisible ? "el box js-scroll scrolled fade-in-bottom" : "el box js-scroll fade-out"

  return (
    <div id="el" className={classes} ref={containerRef}>this is element</div>

  )
}

export default Gallery