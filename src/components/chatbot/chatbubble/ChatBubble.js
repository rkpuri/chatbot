import React, { Component } from 'react'
import './ChatBubble.css'

class ChatBubble extends Component {
	
	render() {
		return (
			<div className = {"chat-bubble " + (this.props.isUserResponse?"darker":"")} >
			  <img src="/w3images/bandmember.jpg" alt="Avatar" className = {this.props.isUserResponse?"right":""} ></img>
			  <p>{this.props.message}</p>
			  <span className="time-right">11:00</span>
			</div>
		)
	}
}

export default ChatBubble
