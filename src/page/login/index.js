import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import './style.css'
import { actionCreator } from './store';

class Login extends Component {
   render() {
    const { loginStatus } = this.props;
		if (!loginStatus) {
    return(
      <div className="sign">
        <div className="signMain">  
          <h4 className="title">
            <div className="normal-title">
              <Link className="active" to="/sign_in">登录</Link>
                <b>·</b>
              <Link className="" to="/register">注册</Link>
            </div>
          </h4>
          <div className="js-sign-in-container">
          <form method="post">

            <div className="input-prepend restyle js-normal">
              <input placeholder="手机号或邮箱" type="text" className="tel" ref={(input) => {this.account = input}} />
              <i className="iconfont ic-user">&#xe61c;</i>
            </div>
            <div className="input-prepend">
              <input placeholder="密码" type="password" className="pwd" ref={(input) => {this.password = input}} />
              <i className="iconfont ic-password">&#xe658;</i>
            </div>
            <div className="remember-btn">
              <input type="checkbox" value="true" /><span>记住我</span>
            </div>
            <div className="forget-btn">
              <a className="" data-toggle="dropdown" href="">登录遇到问题?</a>
            </div>
            <button className="sign-in-button" type="button" onClick={() => this.props.login(this.account, this.password)}>
              <span></span>
              登录
            </button>
          </form>
          <div className="more-sign">
            <h6>社交帐号登录</h6>
            <ul>
              <li className="">
                <Link className="weibo" to=''>
                  <i className="iconfont ic-weibo">&#xe67a;</i>
                </Link>
              </li>
              <li>
                <Link className="weixin" target="_blank" to="/">
                  <i className="iconfont ic-wechat">&#xe620;</i>
                </Link>
              </li>
              <li>
                <Link className="qq" target="_blank" to="/">
                  <i className="iconfont ic-qq_connect">&#xe6ca;</i>
                </Link>
              </li>
            </ul>
          <div className="weibo-geetest-captcha"></div>
      </div>
    </div>
  </div>
</div>
    )
  }else {
    return <Redirect to='/'/>
  }
  }
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreator.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState,mapDispatch)(Login);