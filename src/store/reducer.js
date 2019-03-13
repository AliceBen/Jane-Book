// 整合reducer
import { combineReducers } from 'redux-immutable' 
import headerReducer from '../component/header/reducer'

export default combineReducers ({
  header: headerReducer
})