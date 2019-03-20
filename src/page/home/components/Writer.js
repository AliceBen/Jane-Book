import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import erwm from '../image/erwm.png'
import adw from '../image/adv.jpg'


class Writer extends Component {

    getErweima() {
      const { mouseOver } = this.props
      if( mouseOver) {
        return (
          <img className="erweima" src={ erwm } alt=''/>
        )
      } else {
        return null;
      }
    }

   render() {
     const {  changeImgOver, changeImgOut, list } = this.props;
    return(
      <div className="main">
        {this.getErweima()}
        <a className="download" onMouseOver={changeImgOver}
            onMouseOut={changeImgOut}>
        <img className="qrcode" src={ erwm }  alt='' />
        <div className="info">
          <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
          <div className="description">随时随地发现和创作内容</div>
        </div>
        </a>
        <img className="adv" src={ adw } alt=''/>
        <div className="recommended-authors">
        <div className="titles">
          <span>推荐作者</span> 
          <a className="page-change"><i className="iconfont">&#xe851;</i> 换一批 </a>
        </div> 
        {
          list.map((item,index) => {
            return (
              <ul className="list" key={index}>
                <li>
                  <a className="avatar">
                  <img alt='' src={item.get('avatar_source')}/>
                  </a>
                  <a className="follow" state="0">
                  <i className="iconfont ic-follow"></i>关注
                  </a> 
                  <a className="name" > {item.get('nickname')} </a> 
                  <p> {item.get('total_likes_count')} &middot; {item.get('total_wordage')} </p>
                </li>
            </ul> 
            )
          })
        }
        
        <a className="find-more"> 查看全部<i className="iconfont ic-link"></i></a> 
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    mouseOver: state.getIn(['home','mouseOver']),
    list: state.getIn(['home','authorList'])
  }
}

const mapDispath = (dispatch) => {
  return {
    changeImgOver() {
      dispatch(actionCreator.changeImgOver())
    },
    changeImgOut() {
      dispatch(actionCreator.changeImgOut())
    }
  }
}

export default connect(mapState, mapDispath)(Writer);