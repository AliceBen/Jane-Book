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

const addAuthor = ( result ) => ({
	type: actionType.ADD_AUTHOR,
	authorList: result.authorList,
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

export const changeImgOver = () => ({
	type: actionType.CHANGE_OVERIMG
})

export const changeImgOut = () => ({
	type: actionType.CHANGE_OUTIMG
})

export const getMoreAuthor = () => {
	return (dispatch) => {
		axios.get('/API/write.json').then((res) => {
			const result = res.data.data
			dispatch(addAuthor(result));
    })
	}
}