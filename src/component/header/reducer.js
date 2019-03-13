import { FOCUS, BLUR} from '../../store/actionType'

 // 生成不可改变的对象,保证state对象不被更改
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focus: false,
});

export default (state = defaultState ,action) => {
  if(action.type === FOCUS) {

    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focus',true)
   
    //  return {
    //   focus: true
    // }
  }
  if(action.type === BLUR) {
    return state.set('focus',false)

    // return {
    //   focus: false
    // }
  }

  return state
}