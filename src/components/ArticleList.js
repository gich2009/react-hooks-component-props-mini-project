import React from "react";
import Article from "./Article";

function ArticleList({posts}){

  const articleArray = posts.map((post) => {
    const emojiString = post.minutes < 30 ? shortArticleEmoji(post.minutes) : longArticleEmoji(post.minutes); 
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} emoji={emojiString}/>
  });


  return(
    <main>
      {articleArray}
    </main>
  );

  
  //Helper function for Emoji logic.
  function shortArticleEmoji(minutes){
    let numberOfEmojis = Math.ceil(minutes / 5);
    let emojiString = "";

    while (numberOfEmojis){
      emojiString += "\u2615 ";     //\u2615 is the unicode hexcode for a coffee cup.
      --numberOfEmojis;
    }

    return emojiString.trimEnd();
  }

  function longArticleEmoji(minutes){
    let numberOfEmojis = Math.ceil(minutes / 10);
    let emojiString = "";

    while (numberOfEmojis){
      emojiString += "🍱 ";
      --numberOfEmojis;
    }

    return emojiString.trimEnd();
  }

}

export default ArticleList;