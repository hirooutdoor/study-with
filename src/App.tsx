import React from 'react';
import './App.css';
import { Sidebar } from './Sidebar';
import { SidebarOption } from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';

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

      {/* Feed */}
      
      {/* Widgets */}
      
    </div>
  );
}

export default App;
