// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show:false,
    data:null,
    index:1
  },
  btn(){//显示遮罩层
    this.setData({
     show:true
   })
  },
  btn2(){//搜索页面
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  btn3(){
    this.setData({
      show:false
    })
  },
  topbtn(e){
    this.setData({
      index:e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const info = wx.getSystemInfoSync()
    // console.log(info);
    this.setData({
      info: info
    })
    wx.request({
		  url: 'https://app.vmovier.com/apiv3/DayCover/getDayCover',
		  success:(res=>{
			  console.log(res.data.data);
			  this.setData({
			  	data:res.data.data
		  	})
		  })
		})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})