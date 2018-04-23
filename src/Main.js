import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './store/reducers'
import rootSaga from './store/sagas'
import logger from 'redux-logger'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware,logger)
)
// then run the saga
sagaMiddleware.run(rootSaga)
