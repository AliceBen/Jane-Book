import * as actionType from './actionType'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus:false,
  addWrite:false,
  count:[]
})

const addWriteCount = (state,action) => {
  return state.merge({
    'count':state.get('count').push(action.addWrite),
    'addWrite':state.set('addWrite',true)
  })
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.NEW_WRITE :
      return state.set('focus',true)
    case actionType.CANCELWRITE :
      return state.set('focus',false)
    case actionType.HANDLE_ADD_WRITE:
      // return state.set('addWrite',true)
      return addWriteCount(state,action)
    default:
    return state;
    }
}