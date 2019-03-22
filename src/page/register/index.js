import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      tel:"",
      userPwd:"",
      unameHelp:"",
      utelHelp:"",
      upwdHelp:""
    }
  }

  changeUsername(e){
    let uname = e.target.value;
    this.setState({
        userName: uname,
    });
  }

  changeTel(e){
    let utel = e.target.value;
    this.setState({
      tel: utel,
    });
  }
  changePassword(e){
      let upwd = e.target.value;
      this.setState({
        userPwd: upwd,
      });
  }

handleClick(){

  const { userName, tel, userPwd } = this.state

  if(userName === ""||userName === null){
      this.setState({
          unameHelp: "* 用户名不能为空"
      })
  }else if(tel === "" || tel === null) {
    this.setState({
      unameHelp: "",
      utelHelp:"*手机号码不能为空"
    })
 
  } else if(userPwd === ""||userPwd === null){
      this.setState({
          unameHelp: "",
          utelHelp:"",
          upwdHelp: "* 密码不能为空"
      })
  }else{
      this.setState({ //清除help-block提示文字
          unameHelp: "",
          upwdHelp: ""
      });
      this.props.history.push('/')
  }
}
    render() {
      return (
        <div className="sign">
          <div className="signMain">
            <h4 className="title">
              <div className="normal-title">
                <Link className="" to="/login">登录</Link>
                <b>·</b>
                <Link className="active" to="/register">注册</Link>
              </div>
            </h4>
          <div className="js-sign-up-container">
            <form className="new_user">
              <div className="input-prepend">
                <input placeholder="你的昵称" type="text" onChange={this.changeUsername.bind(this)}/>
                <i className="iconfont ic-user">&#xe61c;</i>
              </div>
                <em className="help-block">{this.state.unameHelp}</em>
              <div className="input-prepend">
                <input placeholder="手机号" type="tel" onChange={this.changeTel.bind(this)}  />
                <i className="iconfont">&#xe61a;</i>
              </div>
                <em className="help-block">{this.state.utelHelp}</em>
              <div className="input-prepend">
                <input placeholder="设置密码" type="password" onChange={this.changePassword.bind(this)}/>
                <i className="iconfont ic-password">&#xe658;</i>
              </div>
                <em className="help-block">{this.state.upwdHelp}</em>
              <input type="button" value="注册" className="regButton" onClick={this.handleClick.bind(this)} />
              <p className="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br/> <Link to="">用户协议</Link> 和 <Link to="">隐私政策</Link> 。</p>
            </form>
            <div className="more-sign">
              <h6>社交帐号直接注册</h6>
              <ul>
                <li><Link className="weixin" to=""><i className="iconfont ic-wechat">&#xe620;</i></Link></li>
                <li><Link className="qq" to=""><i className="iconfont ic-qq_connect">&#xe6ca;</i></Link></li>
            </ul>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default connect()(Register);