import { getSignature } from '@/api/api'
// 判断手机系统
export function isAndroid () {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  if (isAndroid) {
    return true
  } else {
    return false
  }
}
