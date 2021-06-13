/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

export const Post = forwardRef(({
  displayName,
  verified,
  image,
  avatar,
  username,
  text,
}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerUserId">
                {verified && <VerifiedUser className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="post image" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="sm" cursor="pointer" />
          <RepeatIcon fontSize="sm" cursor="pointer" />
          <FavoriteIcon fontSize="sm" cursor="pointer" />
          <PublishIcon fontSize="sm" cursor="pointer" />
        </div>
      </div>
    </div>
  );
});
