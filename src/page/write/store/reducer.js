import * as actionType from './actionType'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus:false,
  addWrite:false,
})

export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.NEW_WRITE :
      return state.set('focus',true)
    case actionType.CANCELWRITE :
      return state.set('focus',false)
    case actionType.HANDLE_ADD_WRITE:
      return state.set('addWrite',true)
    default:
    return state;
    }
}