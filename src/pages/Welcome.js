import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Welcome() {
  return (
    <div className="welcome">
          <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={-10}>
        <Grid xs={4} >
        <Fade delay={400} duration={2000}>
          <Link to="/About">
            <div className="logo">
              <img src="../assets/logos/about.png" alt="About Logo" />
              <img src="../assets/logos/about hover.png" class="img-top" alt="About Logo Hover" />
            </div>
          </Link></Fade>
        </Grid>
        <Grid xs={4}>
        <Fade delay={600} duration={2000}>
          <Link to="/Gallery">
            <div className="logo">
              <img src="../assets/logos/gallery.png" alt="Gallery Logo" />
              <img src="../assets/logos/gallery hover.png" class="img-top" alt="Gallery Logo Hover" />
            </div>
          </Link></Fade>
        </Grid>
        <Grid xs={4}>
        <Fade delay={800} duration={2000}>
          <Link to="/PbPS">
            <div className="logo">
              <img src="../assets/logos/pixel.png" alt="Pixel by Pixel Logo" />
              <img src="../assets/logos/pixel hover.png" class="img-top" alt="Pixel by Pixel Logo Hover" />
            </div>            
          </Link></Fade>
        </Grid>
        <Grid xs={4}>
        <Fade delay={1800} duration={2000}>
          <Link to='' target="_blank">
            <div className="logo">
              <img src="../assets/logos/shop.png" alt="Shop Logo" />
              <img src="../assets/logos/shop hover.png" class="img-top" alt="Shop Logo Hover" />
            </div>            
          </Link></Fade>
        </Grid>

        <Grid xs={4}>
          {/* middle */}
          <Fade delay={200} duration={2000}>
            <div className="logo">
              <img src="../assets/logos/jojo.png" alt="Jojo Logo" />
            </div>     
          </Fade>
  
        </Grid>
        <Grid xs={4}>
        <Fade delay={1000} duration={2000}>
          <Link to="/Spooo">
            <div className="logo">
              <img src="../assets/logos/spooo.png" alt="Spooo Logo" />
              <img src="../assets/logos/spooo hover.png" class="img-top" alt="Spooo Logo Hover" />
            </div>
          </Link></Fade>
        </Grid>
        <Grid xs={4}>
        <Fade delay={1600} duration={2000}>
          <Link to="/Socials">
            <div className="logo">
              <img src="../assets/logos/socials.png" alt="Socials Logo" />
              <img src="../assets/logos/socials hover.png" class="img-top" alt="Socials Logo Hover" />
            </div>
          </Link></Fade>
        </Grid>
        <Grid xs={4}>
        <Fade delay={1400} duration={2000}>
          <Link to="/Vtuber">
            <div className="logo">
              <img src="../assets/logos/vtuber.png" alt="Vtuber Logo" />
              <img src="../assets/logos/vtuber hover.png" class="img-top" alt="Vtuber Logo Hover" />
            </div>
          </Link></Fade>
        </Grid>
        <Grid xs={4}>
        <Fade delay={1200} duration={2000}>
          <Link to="/MSLA">
            <div className="logo">
              <img src="../assets/logos/msla.png" alt="MSLA Logo Hover" />
              <img src="../assets/logos/msla hover.png" class="img-top" alt="MSLA Logo Hover" />
            </div>
          </Link>
          </Fade>
        </Grid>
      </Grid>
    </Box>
    </div>

  );
}
