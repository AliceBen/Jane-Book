import React,{ Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { actionCreator} from './store'

class Detail extends Component {
   render() {
    return(
      <div className="post">
      <div className="article">
        <h1 className="title">{ this.props.title }</h1>
        <div data-note-content="" className="show-content" dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
      </div>
    </div>
    )
  }
  componentDidMount() {
    this.props.getDeteil(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
  getDeteil(id) {
    dispatch(actionCreator.getDeteil(id))
  }
})

export default connect(mapState,mapDispatch)(Detail);