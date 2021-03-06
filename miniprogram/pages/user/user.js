// miniprogram/pages/user/user.js
const db = wx.cloud.database()
const user = db.collection("users")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data:null
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title:"个人信息"
		})
		//获取用户信息本地存储
		wx.getStorage({
		  key: 'userinfo',
		  success:(res)=>{
			  console.log(res.data);
			  this.setData({
				  data:res.data
			  })
		  }
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