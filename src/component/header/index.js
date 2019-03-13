import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import './style.css'
import '../../static/iconfont.less';
import {getFocus, getBlur} from '../../store/actionCreators'

 class Header extends Component {

   render() {
    const { focus } = this.props

     return (
       <Router>
          <div className="header">
            <Link className="a" to={'/'}></Link>
              <ul className="nav">
                <li className="left">
                  <Link className="active" to={'/'}>
                    <i className="iconfont">&#xe6eb;
                    </i>首页
                  </Link>
                </li>
                <li className="left">
                  <Link className="item" to={'/'}>
                    <i className="iconfont">&#xe611;
                    </i>下载App
                  </Link>
                </li>
                <li>
                  <Link className="write" to={'/'}>
                    <i className="iconfont">&#xe62d;
                    </i>写文章
                  </Link>
                  </li>
                <li>
                  <Link className="reg" to={'/'}>注册</Link>
                </li>
                <li className="right">
                  <Link className="itemR" to={'/'}>登录</Link>
                </li>
                <li className="right">
                  <Link className="itemR"  to={'/'}>
                    <i className="iconfont">&#xe636;</i>
                  </Link>
                </li>
                <li className="search">
                  <CSSTransition
                    in={focus}
                    timeout={200}
                    classNames="slide"
                  >
                    <input 
                    type="text" 
                    placeholder="搜索" 
                    className={focus ? 'focus' : 'input'}
                    onFocus={this.props.handleFocus.bind(this)}
                    onBlur={this.props.handleBlur.bind(this)}
                    />
                  </CSSTransition>
                  <i 
                    className={focus ? 'iconf iconfont ' : 'icon iconfont'}
                    >&#xe62b;</i>
                  <div class="search-trending">
                    <div class="search-trending-header clearfix">
                      <span>热门搜索</span>
                      <Link to={'/'}>
                        <i class="iconfont ic-search-change"></i> 换一批
                      </Link>
                    </div>
                    <ul class="search-trending-tag-wrap">
                      <li>
                        <Link to={'/'} target="_blank">区块链</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">小程序</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">vue</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">毕业</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">PHP</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">故事</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">flutter</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">理财</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">美食</Link>
                      </li>
                      <li>
                        <Link to={'/'} target="_blank">投稿</Link>
                      </li>
                    </ul>
                    </div>
                </li>
              </ul>
           </div>
       </Router>
      
     )
   }
 }

 const mapStateToProps = ( state ) => {
  return {
    // focus:state.header.focus

    // 调用immutable之后的写法，不能直接调用focus
    // focus:state.header.get('focus')
    focus:state.getIn(['header', 'focus'])
  }
 }

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus() {
      const action = getFocus()
      dispatch(action)
    },
    handleBlur() {
      const action = getBlur()
      dispatch(action)
    }
  }
}

                      // 接收连个固定参数
 export default connect(mapStateToProps, mapDispathToProps)(Header);