import * as actionType from './actionType'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus:false
})

export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.NEW_WRITE :
      return state.set('focus',true)
    case actionType.CANCELWRITE :
      return state.set('focus',false)
    default:
    return state;
    }
}