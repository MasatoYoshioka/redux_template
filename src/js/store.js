import { createAction, handleActions } from 'redux-actions'
import promiseMiddleware from 'redux-promise'

import { createStore, applyMiddleware } from 'redux'

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
)(createStore)

const increment = createAction('INCREMENT')

const reducer = handleActions({
  [increment]: (state, action ) => ({
    counter: state.counter + action.payload
  })
}, { counter: 0 })

export default function(initialState){
  return createStoreWithMiddleware(reducer, initialState)
}
