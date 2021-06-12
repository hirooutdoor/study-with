import React from 'react'
import "./Feed.css";
import { Postbox } from './Postbox';
import { Post } from './Post' ;

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Post Box */}
      <Postbox />
      
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      
    </div>
  )
}

export default Feed
