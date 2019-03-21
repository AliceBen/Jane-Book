import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import './style.css'
import '../../static/iconfont.less';
import * as actionCreators from '../../store/actionCreators'
import { actionCreator as loginActionCreators } from '../../page/login/store'

 class Header extends Component {

  getListArea() {
    const { focus, list, page,totalPage , handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
    const pageList = [];
    const newList = list.toJS();
    
    // 当列表里有数据的时候才让它一项一项展示
    if(newList.length) {
        for(let i = (page-1) * 10; i < page * 10;i++) {
      pageList.push(
        <li key={newList[i]}> 
          <Link to={'/'} target="_blank">{newList[i]}</Link>
        </li>
      )
      }
    }
  
    if(focus || mouseIn) {
      return (
        <div className="navbar-search-tips"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
          <div className="search-trending">
            <div className="search-trending-header">
              <span>热门搜索</span>
                <strong onClick={() => handleChangePage(page,totalPage,this.spinIcon)} >
                  <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i> 换一批
                </strong>
            </div>
            <ul className="search-trending-tag-wrap">
              {pageList}
            </ul>
          </div>
        </div>
      )
    }else {
      return null
    }
  }

   render() {
     const { focus, handleFocus, handleBlur, list, login, logout } = this.props
     return (
         <div className="headerMain">
          <div className="header">
            <Link className="a" to='/'></Link>
              <ul className="nav">
                <li className="left">
                  <Link className="active" to={'/'}>
                    <i className="iconfont">&#xe6eb;</i>首页
                  </Link>
                </li>
                <li className="left">
                  <Link className="item" to={'/'}>
                    <i className="iconfont">&#xe611;</i>下载App
                  </Link>
                </li>
                <li>
                  <Link className="write" to='/write'>
                    <i className="iconfont">&#xe62d;</i>写文章
                  </Link>
                  </li>
                <li>
                  <Link className="reg" to='/register'>注册</Link>
                </li>
                <li className="right">
                  {
                    login ? 
                      <Link onClick={logout} className="itemR" to={''} >退出</Link> : 
                      <Link className="itemR" to='/login'>登录</Link>
                  }
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
                    onFocus={() => handleFocus(list)}
                    onBlur={handleBlur}
                    />
                  </CSSTransition>
                  <i 
                    className={focus ? 'iconf iconfont ' : 'icon iconfont'}
                    >&#xe62b;</i>
                  {this.getListArea()}
                </li>
              </ul>
           </div>
         </div>
     )
   }
 }

 const mapStateToProps = ( state ) => {
  return {
    // focus:state.header.focus

    // 调用immutable之后的写法，不能直接调用focus
    // focus:state.header.get('focus')
    focus:state.getIn(['header', 'focus']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login']) 
  }
 }

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.getFocus())
    },
    handleBlur() {
      dispatch(actionCreators.getBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle) {
        originAngle = parseInt(originAngle,10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage ) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
		logout() {
			dispatch(loginActionCreators.logout())
		}
  }
}

                      // 接收连个固定参数
 export default connect(mapStateToProps, mapDispathToProps)(Header);