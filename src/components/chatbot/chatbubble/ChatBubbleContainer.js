import React, { Component } from 'react'
import './ChatBubbleContainer.css'
import ChatBubble from './ChatBubble'
import { connect } from 'react-redux'
import { getWelcomeMessage } from '../../../store/chatbot-service/action'

class ChatBubbleContainer extends Component {
	componentDidMount() {
		this.props.getWelcomeMessage()
	}
	render() {
		const { chatBubble } = this.props
		const bubbles = chatBubble.map((messageObj, index) => {
			return <ChatBubble key={index} isUserResponse={messageObj.isSentByUser} message={messageObj.response} ></ChatBubble>
		})
		return (
			<div className="chat-bubble-container" >
				{bubbles}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return({
		chatBubble: state.chatbotReducer.chatBubble
	})
} 

const mapDispatchToProps = (dispatch) => {
	return({
		getWelcomeMessage: () => {
			dispatch(getWelcomeMessage())
		}
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBubbleContainer)
