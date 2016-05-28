import React, { Component, PropTypes } from 'react'

class Filter extends Component {

  render() {
    const listStyle = {
      borderBottom: '1px solid #dbdbdb',
      backgroundColor: '#fff',
      padding: '20px',
      margin: 0,
      listStyle: 'none',
      textAlign: 'center'
    }

    const listItemStyle = {
      margin: 0,
      textAlign: 'left',
      display: 'inline-block',
      padding: '0 20px'
    }

    const daysOfWeek = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']

    const { filterPhotos } = this.props

    return <ul style={listStyle}>
      {daysOfWeek.map(
        (day, i) => {
          return <li key={i} style={listItemStyle}>
            <label>
              <input type="checkbox" defaultChecked={true} onChange={(e) => filterPhotos(i, e.target.checked)} />
              {day}
            </label>
          </li>
        }
      )}
    </ul>
  }

}

Filter.propTypes = {
  filterPhotos: PropTypes.func.isRequired
}

export default Filter
