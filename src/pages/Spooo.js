import React from "react";
import Images from "../components/Images";
import Partner from "../components/Partner";

function Spooo() {
  return (
    <>
      <div className="box-container">
        <Partner
          name="Spooo"
          text={`Jojo's journey into the captivating world of Spooo began with Marbles, where she discovered his unique streaming style that blended marbles race tracks with music and artfully choreographed cinematic movements. Watching Spooo's streams ignited Jojo's interest in custom animations and streaming, sparking a desire to explore this creative avenue herself. In those early days, Spooo served as Jojo's enthusiastic cheerleader, offering unwavering support and encouragement as she honed her skills.

Over the years, Jojo and Spooo have developed a collaborative relationship , with Jojo becoming the esteemed resident artist of Spoootown. Armed with her artistic prowess, Jojo expertly crafts emotes, animations, overlays, redeems, and other immersive storytelling content that enhances the streaming experience for viewers.`}
          image="Spooo.png"
          link="http://Spooo.tv"
        />

        <Images type="Spooo" title="Projects For Spooo" />
      </div>
    </>
  );
}

export default Spooo;
