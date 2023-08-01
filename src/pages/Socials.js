import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Fade } from "react-awesome-reveal";

function Socials() {
  return (
    <>
      <div className="welcome">
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 2, sm: 9, md: 9 }}
          alignItems="center"
          justifyContent="center"
          padding={10}
        >
          <Grid xs={2} sm={3} md={3}>
            <Fade delay={200} duration={2000}>
              <Link to="http://twitter.com/jojomodjo" target="_blank">
                <div className="socials">
                  <img
                    src="../assets/socials/twitter_icon.png"
                    alt="Twitter Icon"
                  />
                </div>
              </Link>
            </Fade>
          </Grid>
          <Grid xs={2} sm={3} md={3}>
            <Fade delay={400} duration={2000}>
              <Link to="https://www.youtube.com/@jojomodjo/" target="_blank">
                <div className="socials">
                  <img
                    src="../assets/socials/youtube_icon.png"
                    alt="Youtube Icon"
                  />
                </div>
              </Link>
            </Fade>
          </Grid>
          <Grid xs={2} sm={3} md={3}>
            <Fade delay={600} duration={2000}>
              <Link to="https://twitch.tv/jojo_modjo" target="_blank">
                <div className="socials">
                  <img
                    src="../assets/socials/twitch_icon.png"
                    alt="Twitch Icon"
                  />
                </div>
              </Link>
            </Fade>
          </Grid>
          <Grid xs={2} sm={3} md={3}>
          <Fade delay={800} duration={2000}>
            <Link to="https://www.tiktok.com/@jojo_modjo" target="_blank">
              <div className="socials">
                <img
                  src="../assets/socials/tiktok_icon.png"
                  alt="Tiktok Icon"
                />
              </div>
            </Link>
            </Fade>
          </Grid>
          <Grid xs={2} sm={3} md={3}>
          <Fade delay={1000} duration={2000}>
            <Link
              to="https://discordlookup.com/user/236874602662461440"
              target="_blank"
            >
              <div className="socials">
                <img
                  src="../assets/socials/discord_icon.png"
                  alt="Discrod Icon"
                />
              </div>
            </Link>
            </Fade>
          </Grid>
          <Grid xs={2} sm={3} md={3}>
          <Fade delay={1200} duration={2000}>
            <Link to="https://www.instagram.com/jojo_modjo/" target="_blank">
              <div className="socials">
                <img
                  src="../assets/socials/instagram_icon.png"
                  alt="Discrod Icon"
                />
              </div>
            </Link>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Socials;
