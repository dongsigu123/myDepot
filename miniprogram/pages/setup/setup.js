// miniprogram/pages/setup/setup.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data:null
	},
	signoutbtn(){//退出

		wx.showModal({
			content: "退出登录？",
			success: (res)=> {
			  	if (res.confirm) {
					wx.removeStorage({
						key: 'userinfo',
						success: ()=>{
						  this.setData({
							  data:null
						  })
						wx.showToast({
							icon:"none",
							  title: "已退出登录！"
						})
						}
					})
			 	}
			}
		  })
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title:"设置"
		})
		wx.getStorage({
		  key: 'userinfo',
		  success:(res)=>{
			  if(res.data!=""){
				this.setData({
					data:res.data
				})
			  }
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