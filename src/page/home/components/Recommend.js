import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Recommend extends Component {
   render() {
    return(
      <div className="board">
        <Link target="_blank" to={'./'} >
          <img src={require("../image/vip.png")} alt=""/>
        </Link>
        <Link target="_blank" to={'./'} >
          <img src={require("../image/lianzai.png")} alt="rightNav" />
        </Link>
        <Link target="_blank" to={'./'} >
          <img src={require("../image/banquan.png")} alt="rightNav" />
        </Link>
        <Link target="_blank" to={'./'} >
          <img src={require("../image/daxuetang.png")} alt="rightNav" />
        </Link>
      </div>
    )
  }
}

const mapState = (state) => ({
 list: state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend);