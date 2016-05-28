import fetch from 'isomorphic-fetch'

const API_KEY = 'a13ee10068d4b15024805cf2e299c3cd'

export function getRecentPhotos({ page = 0, tag = '' } = {}) {
  let api = 'https://api.flickr.com/services/rest/?api_key=' + API_KEY
  api += '&method=flickr.photos.search'
  api += '&per_page=10'
  api += '&format=json'
  api += '&sort=date-posted-desc'
  api += '&extras=date_upload'
  api += '&nojsoncallback=1' // jsoncallback=wooYay
  api += '&page=' + page
  api += '&tags=' + tag

  console.log('API: ', api)

  return fetch(api).then(response => response.json())
}
