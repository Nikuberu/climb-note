import React, { Component } from 'react';
import '../App/App.css';
import icon from '../../images/icon.png'
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="App-footer">
        <ul>
          <li>
            <NavLink exact activeClassName='active' to='/' className='home-link link'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to='/privacy_policy' className='privacy-policy-link link'>
              Privacy
            </NavLink>
          </li>
        </ul>
        <div className='footericonwrapper'>
          <NavLink exact activeClassName='active' to='/' className='link'>
            <img src={icon} alt='icon' className='footericon'/>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;