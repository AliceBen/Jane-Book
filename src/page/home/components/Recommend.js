import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../style.css'

class Recommend extends Component {
   render() {
    return(
      <div className="board">
        {
          this.props.list.map((item) => {
            return <Link target="_blank" to={'./'} key={item.get('id')}>
                  <img src={item.get('imgUrl')} alt="rightNav" />
                  </Link>
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
 list: state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend);