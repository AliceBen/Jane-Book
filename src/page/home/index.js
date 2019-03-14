import React,{ Component } from 'react'
import './style.css'
import axios from 'axios'
import {connect} from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends Component {
   render() {
    return(
      <div className="homeMain">
        <div className="homeLeft">
          <img alt='' className="bigImg"/>
          <List/>
        </div>
        <div className="homeRigth">
          <Recommend/>
          <Writer/>
        </div>
      </div>
    )
  }
  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action);
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
})

export default connect(null,mapDispatch)(Home);