import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import '../style.css'
import { actionCreator } from '../store'

class List extends Component {
   render() {
    const { list, getMoreList, page } = this.props;
    return(
      <div>
        {
          list.map((item,index) => {
            return ( 
              <div className="listItem" key={index}>
                <Link className="wrap-img"  to={'/detail/' + item.get('id')}>
                  <img className="itemImg" src={item.get('imgUrl')} alt="" />
                </Link>
                <div className="content">
                  <Link className="title"  to={'/detail/' + item.get('id')}>{item.get('title')}</Link>
                  <p className="abstract">
                    {item.get('desc')}
                  </p>
                  <div className="meta">
                    <span className="jsd-meta">
                      <i className="iconfont iconItem">&#xe64a;</i> 3.7
                    </span>
                    <Link className="nickname" to={'/'}>明玙小六</Link>
                    <Link className="_blank"  to={'/'}>
                      <i className="iconfont iconItem">&#xe608;</i> 3
                    </Link>      
                    <span><i className="iconfont iconItem">&#xe64e;</i> 28</span>
                  </div>
                </div>
              </div>
            )
          })
        }
        <Link onClick={() => getMoreList(page)} to={'./'} className="load-more">阅读更多</Link>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home','artclePage'])
});

const mapDispath = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page))
  }
})

export default connect(mapState,mapDispath)(List);