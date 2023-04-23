//This code passes the destructured form of props instead of the props object for easier readability.
import React from "react"

function About({
   src = "https://via.placeholder.com/215", 
   alt = "blog logo",
   about,
  }){

  return(
    <aside>
      <img src={src} alt={alt}></img>
      <p>{about}</p>
    </aside>
  );
}

export default About;