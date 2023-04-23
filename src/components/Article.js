import React from "react"

function Article({title="", date = "January 1, 1970", preview="", minutes="", emoji=""}){
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}•{emoji}<span> {minutes} min read</span></small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;