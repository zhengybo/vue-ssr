import server from './server'
import client from './client'
import common from './common'

export default {
  ...client,
  ...server,
  ...common
}
