import React from 'react';
import {Link, IndexLink} from 'react-router';

function Nav(){
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React time App</li>
          <li>
            <IndexLink to='/' activeClassName='active'>Timer</IndexLink>
          </li>
          <li>
            <Link to='/' activeClassName="active" >Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className='menu-text'>
            Created by <a href="https://andreicalazans.github.io/" target='_blank'>Andrei Calazans</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

module.exports = Nav;
