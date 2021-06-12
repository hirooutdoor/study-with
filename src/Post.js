import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

export const Post = ({
  displayName,
  verified,
  image,
  avatar,
  username,
  text,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/media/Ei3ftPrWkAASkc_.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Armin Arlert{" "}
              <span>
                <VerifiedUser className="post__badge" /> @arminarlert
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              I challenge you to build a app like Twitter. This is it. Did you
              find a groove?
            </p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/ywBC5Dsiu6gz7CWf4G/giphy.gif"
          alt="post image"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="sm" />
          <RepeatIcon fontSize="sm" />
          <FavoriteIcon fontSize="sm" />
          <PublishIcon fontSize="sm" />
        </div>
      </div>
    </div>
  );
};
