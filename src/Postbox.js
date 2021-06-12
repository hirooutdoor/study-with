import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./PostBox.css";

export const Postbox = () => {
  return (
    <div className="postBox">
      <form>
        <div className="postBox_input">
          <Avatar src="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg" />
          <input type="text" placeholder="What's happening?"/>
          {/* <input type="text" placeholder="Enter image URL" /> */}
        </div>
        <Button>Post</Button>
      </form>
    </div>
  )
};
