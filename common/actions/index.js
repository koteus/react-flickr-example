import { getRecentPhotos } from '../api/flickr'

export const LOAD_MORE_PHOTOS = 'LOAD_MORE_PHOTOS'
export const FILTER_PHOTOS = 'FILTER_PHOTOS'

export function loadMorePhotos() {
  return (dispatch, getState) => {
    const tag = window.location.pathname.replace(/^\//, '')
    const nextPage = parseInt(getState().photos.page, 10) + 1
    getRecentPhotos({ page: nextPage, tag: tag }).then(result => {
      dispatch({
        type: LOAD_MORE_PHOTOS,
        payload: {
          items: result.photos.photo,
          page: nextPage
        }
      })
    })
  }
}

export function filterPhotos(index, value) {
  return (dispatch, getState) => {
    let state = getState().photos
    let newDaysOfWeekFilter = state.daysOfWeekFilter.slice()
    newDaysOfWeekFilter[index] = value
    dispatch({
      type: FILTER_PHOTOS,
      payload: newDaysOfWeekFilter
    })
  }
}