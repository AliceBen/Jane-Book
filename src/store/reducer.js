// 整合reducer
import { combineReducers } from 'redux-immutable' 
import headerReducer from '../component/header/reducer'
import homeReducer from '../page/home/store/reducer'
import detailReducer from '../page/detail/store/reducer'
import loginReducer from '../page/login/store/reducer'

export default combineReducers ({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})