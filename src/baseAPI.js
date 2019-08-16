import wepy from 'wepy'

const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'

// 获取数据失败时，弹框消息提示
// 新的js语法，如果传参就用传的参数，如果没有传参就用默认的参数  '获取数据失败'
wepy.baseToast = function (str = '获取数据失败') {
  wepy.showToast({
    title: str,
    // 弹框期间不会携带任何图标
    icon: 'none',
    duration: 1500
  })
}

// get请求API
wepy.get = function(url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    method: 'GET',
    data
  })
}

// post请求API
wepy.post = function(url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    method: 'POST',
    data
  })
}