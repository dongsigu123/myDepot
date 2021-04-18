// miniprogram/pages/Collection/Collection.js
const db = wx.cloud.database()
const favs = db.collection("mylike")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data:null,
		isshow:false
	},
	btn(e){
		if(e.currentTarget.dataset.index==1){
			wx.navigateTo({
			  url: '../playpage/playpage?id='+e.currentTarget.dataset.id,
			})
		}else{
			wx.navigateTo({
			  url: '../albumpage/albumpage?id='+e.currentTarget.dataset.id,
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title:"我的喜欢"
		})
		wx.showLoading({
		  title: '加载中...',
		})
		favs.get().then(res=>{
			// console.log(res.data);
			if(res.data!=""){

				var arr = res.data;
				var arr2 = [];
				for(let i of arr){
					arr2.unshift(i)
				}
				this.setData({
					data:arr2
				})
			}
			wx.hideLoading({
			  success: (res) => {
				  this.setData({
					  isshow:true
				  })
			  },
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