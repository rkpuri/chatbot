export const CHATBOT_WELCOME_MESSAGE = "CHATBOT_WELCOME_MESSAGE"
export const CHATBOT_USER_MESSAGE = "CHATBOT_USER_MESSAGE"
export const CHATBOT_SEND_MESSAGE = "CHATBOT_SEND_MESSAGE"
export const CHATBOT_SET_AI_RESPONSE = "CHATBOT_SET_AI_RESPONSE"
export const CHATBOT_SEND_MESSAGE_FAILED = "CHATBOT_SEND_MESSAGE_FAILED"

export function getWelcomeMessage () {
	return {
		type: CHATBOT_WELCOME_MESSAGE
	}
}

export function setUserResponse (text) {
	return {
		type: CHATBOT_USER_MESSAGE,
		text
	}
}

export function sendMessage (text) {
  return {
    type: CHATBOT_SEND_MESSAGE,
    text
  }
}

export function sendMessageFailed (text) {
  return {
    type: CHATBOT_SEND_MESSAGE_FAILED,
    text
  }
}

export function setAIresponse (response) {
	return {
		type: CHATBOT_SET_AI_RESPONSE,
		response
	}
}
