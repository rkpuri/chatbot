import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from './action'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const postMessage = (message) => {

	let accessToken = "your accessToken key";
	let baseUrl = "https://api.api.ai/v1/";
	let payload = {
				method: "POST",
				url: baseUrl + "query?v=20150910",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				headers: {
					"Authorization": "Bearer " + accessToken
				},
				data: { query: message, lang: "en", sessionId: "somerandomthing" }
			}
	return axios(payload)
	.then(response => response.data)
	.catch(error => {
		throw error
	});
}

function* sendMessage(action) {
   try {
   	  yield put(actions.setUserResponse(action.text))
      const aiData = yield call(postMessage, action.text);
      yield put(actions.setAIresponse(aiData.result))
   } catch (e) {
      yield put({type: actions.CHATBOT_SEND_MESSAGE_FAILED, message: e.message});
   }
}

export default function* chatbotSaga() {
  yield takeLatest(actions.CHATBOT_SEND_MESSAGE, sendMessage);
}
