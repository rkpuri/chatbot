import React, { Component } from 'react'
import ChatBubbleContainer from './chatbubble/ChatBubbleContainer'
import ChatInput from './chatinput/ChatInput'

class ChatBot extends Component {
	render() {
		return (
			<div className="chat-bot" >
				<ChatBubbleContainer />
				<ChatInput />
			</div>
		)
	}
}

export default ChatBot
