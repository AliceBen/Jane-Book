import { FOCUS, BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from '../../store/actionType'

// 生成不可改变的对象,保证state对象不被更改
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  list:[],
  page: 1,
  totalPage: 1,
  mouseIn:false
});

export default (state  = defaultState ,action) => {
  switch(action.type) {
    case FOCUS : 
      return state.set('focus',true);
    case BLUR :
      return state.set('focus',false);
    case CHANGE_LIST :
      // merge接收一个对象，调用一次可以同时更改多个数据内容
      return state.merge({
        list: action.data,
        totalPage:action.totalPage
      })
    case MOUSE_ENTER:
      return state.set('mouseIn',true);
    case MOUSE_LEAVE:
      return state.set('mouseIn',false);
    case CHANGE_PAGE:
      return state.set('page',action.page)
    default:
      return state;
  }
}