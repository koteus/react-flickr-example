import dateformat from 'dateformat'
import { LOAD_MORE_PHOTOS, FILTER_PHOTOS } from '../actions'

let defaultState = {
  page: 0,
  items: [],
  daysOfWeekFilter: []
}

export default function photos(state = defaultState, action) {
  switch (action.type) {
    case LOAD_MORE_PHOTOS:
      return {
        page: action.payload.page,
        items: [...state.items, ...action.payload.items],
        daysOfWeekFilter: state.daysOfWeekFilter
      }
    case FILTER_PHOTOS:
      return {
        page: state.page,
        items: state.items.map((item) => {
          const date = new Date(item.dateupload * 1000)

          // For getDay() the first element of a week is Sunday
          let d = date.getDay() - 1

          // So, we have to hack it to make Monday the first day (and Sunday will be the last one)
          if (d < 0) { d = 6 }

          item['hidden'] = !action.payload[d]

          console.log(dateformat(date, 'yyyy-mm-dd'), d, action.payload[d])

          return item
        }),
        daysOfWeekFilter: action.payload
      }
    default:
      return state
  }
}
