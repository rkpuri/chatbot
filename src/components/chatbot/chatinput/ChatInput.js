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
			<form className="chat-input">
			  <div class="input-group">
			    <input type="text" className="form-control" onKeyPress={this.handleSendMessage} />
			    <div class="input-group-btn">
			      <button className="btn btn-primary" onClick={this.switchRecognition} >send</button>
			    </div>
			  </div>
			</form>
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
