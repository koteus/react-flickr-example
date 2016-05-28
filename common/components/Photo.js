import dateformat from 'dateformat'
import React, { Component, PropTypes } from 'react'

class Photo extends Component {

  render() {
    let photoStyle = {
      padding: '12px',
      border: '1px solid #efefef',
      borderRadius: '3px',
      margin: '20px',
      backgroundColor: '#fff',
      display: 'inline-block'
    }

    let { item } = this.props

    return (
      <div style={{ textAlign: 'center', display: item.hidden ? 'none' : 'block' }}>
        <div style={photoStyle}>
            <img src={this.photoSrc(item)} />
            <h4>{item.title}</h4>
            <p>{this.formatDate(item.dateupload)}</p>
            <a href={this.photoDetailsUrl(item)} target="_blank">
              Details
            </a>
        </div>
      </div>
    )
  }

  formatDate(timestamp) {
    const date = new Date(timestamp * 1000)
    return dateformat(date, 'yyyy-mm-dd')
  }

  photoSrc(photo) {
    return `https://farm${photo['farm']}.staticflickr.com/${photo['server']}/${photo['id']}_${photo['secret']}_n.jpg`
  }

  photoDetailsUrl(photo) {
    return `https://www.flickr.com/photos/${photo['owner']}/${photo['id']}/`
  }
}

Photo.propTypes = {
  item: PropTypes.object.isRequired
}

export default Photo
