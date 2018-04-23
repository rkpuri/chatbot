import React, { Component } from 'react'
import './ProfileIcon.css';

class ProfileIcon extends Component {
  render() {
    return (
      <div className="profile-icon">
        <img src="./assets/profile-icon.png" alt="user pic" ></img>
      </div>
    );
  }
}

export default ProfileIcon;
