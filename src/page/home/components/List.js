import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import '../style.css'

class List extends Component {
   render() {
    const { list } = this.props;
    return(
      <div>
        {
          list.map((item) => {
            return ( 
              <div className="listItem" key={item.get('id')}>
                <Link className="wrap-img" target="_blank"  to={'/'}>
                  <img className="itemImg" src={item.get('imgUrl')} alt="" />
                </Link>
                <div className="content">
                  <Link className="title" target="_blank"  to={'/'}>{item.get('title')}</Link>
                  <p className="abstract">
                    {item.get('desc')}
                  </p>
                  <div className="meta">
                    <span className="jsd-meta">
                      <i className="iconfont iconItem">&#xe64a;</i> 3.7
                    </span>
                    <Link className="nickname" target="_blank" to={'/'}>明玙小六</Link>
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
      </div>
    )
  }
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
});

export default connect(mapState)(List);