import React,{ Component } from 'react'
import erwm from '../image/erwm.png'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actionCreator'
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
     const {  changeImgOver, changeImgOut } = this.props
    return(
      <div>
        {this.getErweima()}
        <a className="download" onMouseOver={changeImgOver}
            onMouseOut={changeImgOut}>
        <img className="qrcode" src={ erwm }  alt='' />
        <div className="info">
          <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
          <div className="description">随时随地发现和创作内容</div>
        </div>
        </a>
        <img className="adv" src={ adw }/>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    mouseOver: state.getIn(['home','mouseOver'])
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