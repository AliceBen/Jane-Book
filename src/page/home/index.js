import React,{ Component } from 'react'
import './style.css'
import {connect} from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreator } from './store'
import Banner from './components/banner'

class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0,0);
  }

   render() {
    return(
      <div className="homeMain">
        <div className="homeLeft">
          <Banner />
          <List/>
        </div>
        <div className="homeRigth">
          <Recommend/>
          <Writer/>
        </div>
        { this.props.showScroll ? 
        <div className="side-tool" onClick={this.handleScrollTop}>
          <i className="iconfont top">&#xe631;</i>
        </div> : null} 
      </div>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.props.changeAuthorData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreator.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 400) {
      dispatch(actionCreator.toggleTopShow(true))
    } else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  },
  changeAuthorData() {
    dispatch(actionCreator.getMoreAuthor())
  }
})

export default connect(mapState,mapDispatch)(Home);