import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import ImagesCard from "./ImagesCard";
import { supabase } from "./supabaseClient";
import { Fade } from "react-awesome-reveal";

function Images({ type, title }) {
  const [images, setImages] = useState([]);

  console.log(type);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", type)
        .order('id');
      if (error) throw error;
      if (data != null) {
        setImages(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <>
      <Fade delay={100} duration={2000} >
        <div className="box-images">
          <h3>{title}</h3>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}

            alignItems="center"
            justifyContent="center"
          >
            <Fade triggerOnce>
              {images.map((image) => (
                <Grid
                  xs={2}
                  sm={4}
                  md={4}
                  style={{minHeight:"350px"}}
                >
                  <ImagesCard product={image} />
                </Grid>
              )).reverse()}
            </Fade>
          </Grid>
        </div>
      </Fade>
    </>
  );
}

export default Images;
