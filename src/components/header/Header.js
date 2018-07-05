import React, { Component } from 'react'
import Logo from '../logo/Logo'
import LabelComponent from '../common/label-component/LabelComponent'
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
	        <LabelComponent className="welcome-label" value="Welcome Jack!" ></LabelComponent>
	        <ProfileIcon className="profile-icon" ></ProfileIcon>
	    </div>
      </div>
    );
  }
}

export default Header;
