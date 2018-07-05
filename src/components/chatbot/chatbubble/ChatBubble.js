import React, { Component } from 'react'
import './ChatBubble.css'

class ChatBubble extends Component {
  
  constructor(props) {
    super()
  }

  getBubbleContent = () => {
    let content
    if(this.props.isUserResponse) {
      content = <div className="message-right">
                  <img src="/assets/profile-icon.png" alt="User" className="right"></img>
                  <span>{this.props.message}</span>
                </div>
    } else {
      content = <div>
                  <img src="/assets/chatbot.png" alt="Chatbot"></img>
                  <span>{this.props.message}</span>
                </div>
    }
    return content
  }

  render() {
    return (
      <div className = {"chat-bubble " + (this.props.isUserResponse?"darker":"")} >
        {this.getBubbleContent()}
      </div>
    )
  }
}

export default ChatBubble
