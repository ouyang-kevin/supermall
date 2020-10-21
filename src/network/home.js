import {require} from './require'

export function getHomeMultidata() {
  return require({
    url: '/home/multidata'
  })
}