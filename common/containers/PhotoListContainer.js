import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PhotoList from '../components/PhotoList'
import * as actions from '../actions'

function mapStateToProps(state) {
  return {
    items: state.photos.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)
