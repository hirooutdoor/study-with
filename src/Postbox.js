import { Avatar, Button } from '@material-ui/core'
import React from 'react'

export const Postbox = () => {
  return (
    <div className="postBox">
      <form action="">
      <div className="postBox_input">
        <Avatar src="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg" />
        <input type="text" placeholder="What's happening?"/>
      </div>
        <Button>Post</Button>
      </form>
    </div>
  )
};
