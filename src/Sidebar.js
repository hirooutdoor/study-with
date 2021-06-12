import React from "react";
import "./Sidebar.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentitiyIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

import { SidebarOption } from "./SidebarOption";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* App Icon */}
      <TwitterIcon />

      <SidebarOption active={true} Icon={HomeIcon} text="Home" />
      <SidebarOption active={false} Icon={ExploreIcon} text="Explore" />
      <SidebarOption active={false} Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption active={false} Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption active={false} Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption active={false} Icon={ListAltIcon} text="Lists" />
      <SidebarOption active={false} Icon={PermIdentitiyIcon} text="Profile" />
      <SidebarOption active={false} Icon={MoreHorizIcon} text="More" /> 
      
      <Button variant="outlined" className="sidebar__post" fullWidth>Post</Button>
    </div>
  );
};
