import React from "react";
import { useState, useEffect } from "react";
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import { supabase } from "../components/supabaseClient";


const supabaseUserId = process.env.REACT_APP_SUPABASE_USER_ID;

const userID = supabaseUserId;
console.log(userID);

const CND = process.env.REACT_APP_SUPABASE_AVATAR_CDN

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

  console.log(avatar_url)
  const imageURL = CND + avatar_url

  return (
    <>
    <Reveal effect="fade-in">
          <div className="box-about">
      <div>About</div>
      <div>
        <img 
            src={imageURL}
            alt="Avatar"
            className="boxImg"
        />
          <p style={{ whiteSpace: "pre-wrap" }}>{about}</p>
        <p>{username}</p>
      </div>
    </div>
    </Reveal>


    </>
  );
}

export default About;
