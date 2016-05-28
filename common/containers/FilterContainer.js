import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import * as actions from '../actions'

function mapStateToProps(state) {
  return {
    daysOfWeekFilter: state.photos.daysOfWeekFilter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
