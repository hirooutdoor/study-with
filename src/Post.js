import React from 'react'
import { Avatar } from '@material-ui/core'

export const Post = ({displayName, verified, image, avatar, username, text}) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg" />
      </div>
    </div>
  )
}