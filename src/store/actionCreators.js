import * as actionType from './actionType'
import  { fromJS } from 'immutable'
import axios from 'axios'

//  直接在本页面使用，不需要暴露出去
const changeList = (data) => ({
  type: actionType.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getFocus = () => ({
  type: actionType.FOCUS
})

export const getBlur = () => ({
  type: actionType.BLUR
})

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
})

export const changePage= (page) => ({
  type: actionType.CHANGE_PAGE,
  page
})

export const getList = () => {
  return(dispatch) => {
    axios.get('/API/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}
