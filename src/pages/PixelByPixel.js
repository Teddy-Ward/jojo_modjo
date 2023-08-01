import React from 'react' 
import Partner from '../components/Partner'
import Images from '../components/Images'

function PixelByPixel() {
  return (
    <div className="box-container">
    <Partner
      name="Pixel by Pixel Studios"
      text={`Pixel by Pixel Studios is the creative force behind popular games like Resurgence, Marbles on Stream, and the Bingo Room. Among their exciting lineup, Marbles On Stream stands out as a captivating online marbles racing game, where players engage in exhilarating races on tracks live-streamed through Twitch. Each player's marble rolls and competes to reach the finish line, delivering an interactive and thrilling gaming experience that has won the hearts of players of all ages.

Jojo, discovered marbles way back in the early seasons of  the game and was instantly entranced. With a passion for creating assets and materials for streamers within the Marbles community, Jojo's talents caught the attention of Pixel by Pixel Studios, leading to formal freelance work with them. Jojo's impressive contributions include marketing materials, templates, comics, concept imagery, emotes, animated webm files, and scene overlays, adding a touch of artistic magic to the studios' streaming presence and promotion.`}
      image="mos.png"
      link="https://www.pixelbypixelstudios.live/"
    />
    <Images type="PixelbyPixel" title="Projects For Pixel by Pixel Studios" />
  </div>
  )
}

export default PixelByPixel