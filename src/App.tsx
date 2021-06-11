import React from 'react';
import './App.css';
import { Sidebar } from './Sidebar';
import { SidebarOption } from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentitiyIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


function App() {
  return (
    //BEM
    <div className="app">
      <h1>Hello this is Study with app!! Just like a study twitter!</h1>

      {/* Sidebar */}   
      <Sidebar />
      
      <SidebarOption active={true} Icon={HomeIcon} text="Home" />
      <SidebarOption active={false  } Icon={ExploreIcon} text="Explore" />
      <SidebarOption active={false} Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption active={false} Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption active={false} Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption active={false} Icon={ListAltIcon} text="Lists" />
      <SidebarOption active={false} Icon={PermIdentitiyIcon} text="Profile" />
      <SidebarOption active={false} Icon={MoreHorizIcon} text="More" /> 

      {/* Button => Post */}
      <Button variant="outlined" className="sidebar__post" fullWidth>Post</Button>
      {/* Feed */}
      
      {/* Widgets */}
      
    </div>
  );
}

export default App;
