import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./PostBox.css";

export const Postbox = () => {
  return (
    <div className="postBox">
      <form>
        <div className="postBox_input">
          <Avatar src="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="postBox_imageInput"
          type="text"
          placeholder="Enter image URL"
        />
        <Button className="postBox_button">Post</Button>
      </form>
    </div>
  );
};
