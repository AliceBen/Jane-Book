import axios from 'axios';
import * as actionType from './actionType';

const changeLogin = () => ({
	type: actionType.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: actionType.LOGOUT,
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/API/login.json?account=' + accout + '&password=' + password).then((res) => {
            const result = res.data.data;
            console.log(result)
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}