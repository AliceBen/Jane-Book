import { fromJS } from 'immutable';
import * as actionType from './actionType'

const defaultState = fromJS({
  articleList: [],
  recommendList:[],
  articlePage: 1,    // 分页
  showScroll: false,
  mouseOver:false,
  authorList:[],
});

const changeHomeDate = (state, action) => {
  return state.merge({
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList),
  })
}

const addArticleLList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': state.nextPage
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_HOME_DATA:
      return changeHomeDate(state, action)
    case actionType.ADD_HOME_LIST: 
      return addArticleLList(state, action)
    case actionType.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show);
    case actionType.CHANGE_OVERIMG:
      return state.set('mouseOver',true)
    case actionType.CHANGE_OUTIMG:
      return state.set('mouseOver',false)
    case actionType.ADD_AUTHOR:
      console.log(action,'123')
      return state.set('authorList',fromJS(action.authorList))
      default: 
      return state;
  }
}