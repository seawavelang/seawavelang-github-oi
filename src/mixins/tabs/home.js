import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 轮播图列表数据
    swiperList: [],
    // 分类相关数据
    cateData: [],
    // 楼层数据
    floorData: []
  }

  // 触发了这个生命周期函数，调用的函数
  onLoad() {
    this.getSwiperData()
    this.getCateData()
    this.getFloorData()
  }

  methods = {
    // 商品列表页面
    goGoodsList(url) {
      wepy.navigateTo({
        url
      })
    }
  }

  // 获取轮播图数据的函数
  async getSwiperData() {
    const {data: res} = await wepy.get('/home/swiperdata')
    // console.log(res)
    if (res.meta.status !== 200) {
       wepy.baseToast()
    }

    this.swiperList = res.message
    // 异步函数一定要调用$apply()
    this.$apply()
  }

  // 获取首页分类相关数据
  async getCateData() {
    const {data: res} = await wepy.get('/home/catitems')
    // console.log(res)
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.cateData = res.message
    this.$apply()
  }

  // 获取楼层相关的数据
  async getFloorData() {
    const {data: res} = await wepy.get('/home/floordata')
    console.log(res)
    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.floorData = res.message
    this.$apply()
  }
}
