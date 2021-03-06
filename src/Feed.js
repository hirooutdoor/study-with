import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Postbox } from "./Postbox";
import { Post } from "./Post";
import db from './firebase';
import FlipMove from "react-flip-move";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Post Box */}
      <Postbox />

      <FlipMove>
        {posts.map((post) => (
          <Post
          key={post.text}
          displayName={post.displayName}
          verified={post.verified}
          username={post.username}
          image={post.image}
          avatar={post.avatar}
          text={post.text}
          />       
        ))}
      </FlipMove>

    </div>
  );
}

export default Feed;
