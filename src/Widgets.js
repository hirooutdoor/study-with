import React from 'react'
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"/>
        <input placeholder="Search Post" type="text"/>
      </div>

      <div className="widgets__widgetContainer">
        <h2>what's happening?</h2>
        <TwitterTweetEmbed tweetId={"1393707255460102148"} />
        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="ArminHerlert"
          options={{ height: 400}}
        />
        <TwitterShareButton url={"https://twitter.com/ArminHerlert"} options={{ text: "#reactjs is jsut awesome.", via: "ArminHerlert"}} />
      </div>
    </div>
  )
}

export default Widgets
