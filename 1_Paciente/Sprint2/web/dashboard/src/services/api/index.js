
import {get, post} from './ajaxutils'

export default {
  get_exoesqueleto () {
    return get('/api/get_exoesqueleto')
  },

  get_emergencies () {
    return get('/api/get_emergencies')
  },

  get_persons () {
    return get('/api/get_persons')
  },
}