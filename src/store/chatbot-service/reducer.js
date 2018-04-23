import * as actions from './action'

const initialState = {
	chatBubble: [
		{
			response: ["Welcome to easy payment."],
			isSentByUser: false
		}
	]
}

export default function chatbotReducer(state = initialState, action) {
  switch (action.type) {
  	case actions.CHATBOT_WELCOME_MESSAGE: {
  		return state
  	}
  	case actions.CHATBOT_USER_MESSAGE: {
  		let responseObj = { response: action.text, isSentByUser: true }
  		return { ...state, chatBubble: state.chatBubble.concat(responseObj) }
  	}
    case actions.CHATBOT_SET_AI_RESPONSE: {
    	let responseObj = { response: action.response.fulfillment.speech, isSentByUser: false }
      	return { ...state, chatBubble: state.chatBubble.concat(responseObj) }
     }
     case actions.CHATBOT_SEND_MESSAGE_FAILED: {
     	let responseObj = { response: action.text, isSentByUser: false }
      	return { ...state, chatBubble: state.chatBubble.concat(responseObj) }
     }
    default:
      return state
  }
}