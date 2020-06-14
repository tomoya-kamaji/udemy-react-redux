const { INCREMENT, DECREMENT } = require("../actions");

import { INCREMENT,DECREMENT } from '../actions'

const initialState = { value: 0}

export default (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:
      return{ value: sate.value + 1}
    case INCREMENT:
      return{ value: sate.value - 1}
    default:
      return state
  }
}