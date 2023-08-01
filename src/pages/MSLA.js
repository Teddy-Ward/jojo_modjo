import React from "react";
import Images from "../components/Images";
import Partner from "../components/Partner";

function MSLA() {
  return (
    <>
      <div className="box-container">
        <Partner
          name="MSLA"
          text={`Introducing the Marbles On Stream Laps Association (MSLA), a vibrant community marbles league where players compete in thrilling marbles races streamed on the MSLA Racing channel on Twitch. The league has grown from its initial weekly "Premier Series" to now include the "Sunday Sub Series" and the "Community Cup."

Back in April 2021, Enderzworld asked Jojo for help in creating an MSLA logo for the upcoming race. Since then, Jojo has been hard at work, crafting over 100 race logos for the Premier Series, alongside designing track logos, merch, and webm animations for the stream. Her creative touch has truly added a special element to the association's presentation.`}
          image="MSLA.png"
          link="https://www.mslaracing.com/"
        />
        <Images type="MSLA" title="Premier Series Logos" />
      </div>
    </>
  );
}

export default MSLA;
