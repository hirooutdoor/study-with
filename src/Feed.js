import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Postbox } from "./Postbox";
import { Post } from "./Post";
import db from './firebase';

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

      {posts.map((post) => (
        <Post
        displayName={post.displayName}
        verified={post.verified}
        username={post.username}
        image={post.image}
        avatar={post.avatar}
        text={post.text}
        />
      
      ))}
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
