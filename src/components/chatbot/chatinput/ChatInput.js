import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../../store/chatbot-service/action'

class ChatInput extends Component {

	handleSendMessage = (event) => {
		if (event.which === 13) {
			event.preventDefault();
			let inputVal = event.target.value
			event.target.value = ""
			if (inputVal) {
				this.props.send(inputVal);
			}
		}
	}

	switchRecognition = () => {
		alert('switchRecognition')
	}

	render() {
		return (
			<div className="chat-input" >
				<input type="text" onKeyPress={this.handleSendMessage} />
				<button onClick={this.switchRecognition} >send</button>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return({
		send: (message) => {
			dispatch(sendMessage(message))
		}
	})
}

export default connect(null, mapDispatchToProps)(ChatInput)
