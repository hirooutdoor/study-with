import React from 'react'
import "./Feed.css";
import { Postbox } from './Postbox';

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Post Box */}
      <Postbox />
      
    </div>
  )
}

export default Feed
