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


function App() {
  return (
    //BEM
    <div className="app">
      <h1>Hello this is Study with app!! Just like a study twitter!</h1>

      {/* Sidebar */}   
      <Sidebar />
      
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={ExploreIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentitiyIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" /> 

      {/* Feed */}
      
      {/* Widgets */}
      
    </div>
  );
}

export default App;
