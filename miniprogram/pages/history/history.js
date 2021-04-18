// miniprogram/pages/history/history.js
const db = wx.cloud.database();
const hist = db.collection("history")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data:null,
		isshow:false
	},
	btn(e){
		wx.navigateTo({
			url: '../playpage/playpage?id='+e.currentTarget.dataset.id,
		})
	},
	emptybtn(){//清空
		wx.showModal({
			content: "清空播放历史？",
			success: (res)=> {
			  	if (res.confirm) {
					wx.showLoading({
					  title: '加载中...',
					})
					wx.cloud.callFunction({
						name:"removeAll",
						data:{},
						success:()=>{
							wx.hideLoading({
							  success: (res) => {},
							})
							wx.showToast({
								icon:"none",
								  title: "删除成功！"
							})
							this.setData({
								data:null
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
			title:"播放历史"
		})
		wx.showLoading({
		  title: '加载中...',
		})
		//获取播放历史
		wx.cloud.callFunction({//删除过期播放历史
			name:"removeExpire",
			data:{},
			success:()=>{

				hist.get().then(res=>{//获取播放历史
					console.log(res.data)
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