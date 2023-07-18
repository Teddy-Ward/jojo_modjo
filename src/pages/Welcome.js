import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";

export default function Welcome() {
  return (
    <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={-10}>
        <Grid xs={4} >
          <div className="logo">
            <img src="../assets/logos/about.png" alt="Logo" />
            <img src="../assets/logos/about hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/gallery.png" alt="Logo" />
            <img src="../assets/logos/gallery hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/mos.png" alt="Logo" />
            <img src="../assets/logos/mos hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/msla.png" alt="Logo" />
            <img src="../assets/logos/msla hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>

        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/shop.png" alt="Logo" />
            <img src="../assets/logos/shop hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/spooo.png" alt="Logo" />
            <img src="../assets/logos/spooo hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/vtuber.png" alt="Logo" />
            <img src="../assets/logos/vtuber hover.png" class="img-top" alt="Logo" />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="logo">
            <img src="../assets/logos/socials.png" alt="Logo" />
            <img src="../assets/logos/socials hover.png" class="img-top" alt="Logo" />
          </div>
            {/* <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Button Link
            </Link> */}
        </Grid>
      </Grid>
    </Box>
  );
}
