// 整合reducer
import { combineReducers } from 'redux-immutable' 
import headerReducer from '../component/header/reducer'
import homeReducer from '../page/home/store/reducer'

export default combineReducers ({
  header: headerReducer,
  home: homeReducer
})