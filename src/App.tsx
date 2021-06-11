import React from 'react';
import './App.css';
import { Sidebar } from './Sidebar';
import { SidebarOption } from './SidebarOption';

function App() {
  return (
    //BEM
    <div className="app">
      <h1>Hello this is Study with app!! Just like a study twitter!</h1>

      {/* Sidebar */}   
      <Sidebar />
      <SidebarOption />

      {/* Feed */}
      
      {/* Widgets */}
      
    </div>
  );
}

export default App;
