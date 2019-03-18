import axios from 'axios';
import * as actionType from './actionType'
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
  type: actionType.CHANGE_HOME_DATA,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: actionType.ADD_HOME_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/API/home.json').then((res) => {
      const result = res.data.data
			dispatch(changHomeData(result));
    })
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/API/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
			console.log(result);
		});
	}
}

export const toggleTopShow = (show) => ({
	type: actionType.TOGGLE_SCROLL_TOP,
	show
})