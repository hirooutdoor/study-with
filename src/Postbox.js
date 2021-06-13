import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./PostBox.css";

export const Postbox = () => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'あるみん',
      username: 'Armin Arlert',
      verified: true,
      text: postText,
      image: postImage,
      avatar: "https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg"
    })

    setPostText("");
    setPostImage("");
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox_input">
          <Avatar src="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg" />
          <input onChange={(e) => setPostText(e.target.value)} value={postText} type="text" placeholder="What's happening?" />
        </div>
        <input
          onChange={(e) => setPostImage(e.target.value)}
          value={postImage}
          className="postBox_imageInput"
          type="text"
          placeholder="Enter image URL"
        />
        <Button onClick={sendPost} type="submit" className="postBox_button">Post</Button>
      </form>
    </div>
  );
};
