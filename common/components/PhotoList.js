import React, { Component, PropTypes } from 'react'
import InfiniteScroll from 'redux-infinite-scroll'
import Photo from './Photo'
import Filter from './Filter'

class PhotoList extends Component {
  renderItems() {
    return this.props.items.map((item, i) => <Photo key={i} item={item} />)
  }

  render() {
    return (
      <InfiniteScroll
        elementIsScrollable={false}
        loadingMore={false}
        items={this.renderItems()}
        loadMore={this.props.loadMorePhotos}
        threshold={400}
      />
    )
  }
}

PhotoList.propTypes = {
  items: PropTypes.array.isRequired,
  loadMorePhotos: PropTypes.func.isRequired
}

export default PhotoList
