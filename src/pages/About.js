import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../components/supabaseClient'

const supabaseUserId = process.env.REACT_APP_SUPABASE_USER_ID

const userID = supabaseUserId
 console.log(userID)

function About() {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [about, setAbout] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)


  useEffect(() => {
    async function getProfile() {
      setLoading(true)

      let { data, error } = await supabase
        .from('profiles')
        .select(`username, about, avatar_url`)
        .eq('id', userID)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setUsername(data.username)
        setAbout(data.about)
        setAvatarUrl(data.avatar_url)
      }

      setLoading(false)
    }

    getProfile()
  }, [])

  return (
    <>    
    <div>About</div>
    <div>
    <p style={{whiteSpace: "pre-wrap"}}>{about}</p>

      <p>{username}</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
      <p>foobar</p>
    </div>
    </>

  )
}

export default About