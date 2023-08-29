import React from "react";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import { supabase } from "../components/supabaseClient";
import Reviews from "../components/Reviews";

const supabaseUserId = process.env.REACT_APP_SUPABASE_USER_ID;

const userID = supabaseUserId;

const CDN = process.env.REACT_APP_SUPABASE_AVATAR_CDN;

function About() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [about, setAbout] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);

      let { data, error } = await supabase
        .from("profiles")
        .select(`username, about, avatar_url`)
        .eq("id", userID)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setUsername(data.username);
        setAbout(data.about);
        setAvatarUrl(data.avatar_url);
      }

      setLoading(false);
    }

    getProfile();
  }, []);

  const imageURL = CDN + avatar_url;

  return (
    <>
      <Fade delay={500} duration={2000} triggerOnce>
        <div className="box-about">
          <h2>About</h2>
          <div>
            <Fade delay={700} duration={2000} triggerOnce>
              <img src={imageURL} alt="Avatar" className="boxImg" />
            </Fade>
            <p className="about-text" style={{ whiteSpace: "pre-wrap" }}>
              {about}
            </p>
            <p>{username}</p>
          </div>
        </div>
      </Fade>
      {/* <Fade delay={500} duration={2000} triggerOnce>
        <Reviews />
      </Fade> */}
    </>
  );
}

export default About;
