import React, { Component } from 'react'
import Logo from '../logo/Logo'
import LabelComponent from '../../lib/LabelComponent'
import ProfileIcon from '../profile/ProfileIcon'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header" >
      	<div className="block-1" >
        	<Logo className="logo" ></Logo>
        </div>
        <div className="block-2" >
	        <LabelComponent className="welcome-label" value="Welcome rkpuri" ></LabelComponent>
	        <ProfileIcon className="profile-icon" ></ProfileIcon>
	    </div>
      </div>
    );
  }
}

export default Header;
