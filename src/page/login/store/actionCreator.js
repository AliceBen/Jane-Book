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
      if(accout === "" || accout === null) {
          alert('用户名不能为空')
      }else if(password === "" || password === null){
          alert('密码不能为空')
      }else {
        	dispatch(changeLogin())
      }
	}
}