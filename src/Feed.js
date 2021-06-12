import React from "react";
import "./Feed.css";
import { Postbox } from "./Postbox";
import { Post } from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Post Box */}
      <Postbox />

      <Post
        displayName="Armin Arlert"
        verified={true}
        username="arminarlert"
        image="https://media.giphy.com/media/ywBC5Dsiu6gz7CWf4G/giphy.gif"
        avatar="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg"
        text="Hey yooooooooooooooooooooooooO! "
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
