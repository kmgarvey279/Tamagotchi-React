import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div id="header">
      <style jsx>{`
        div#header {
          background-color:red;
          border: solid black 2px;
          text-align: center;
        }
        div#nav {
          background-color: white;
          border: solid white 2px;
        }
      `}</style>
      <h1>Tamagotchi</h1>
      <div id="nav">
        <Link to="/">Home</Link> | <Link to="/newtamagotchi">Create New Tamagotchi</Link>
      </div>
    </div>
  );
}

export default Header;
