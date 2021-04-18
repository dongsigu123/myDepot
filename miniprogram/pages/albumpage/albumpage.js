// pages/albumpage/albumpage.js
const db = wx.cloud.database()
const favs = db.collection("mylike")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data:null,
		isshow:false,
		likeid:null
	},
	Collectionbtn(){
		if(this.data.isshow){//取消收藏
			db.collection('mylike').doc(this.data.likeid).remove({
				success: ()=> {
					this.setData({
						isshow:false
					})
					wx.showToast({
						icon:"none",
						title: "Depot: 品位变了~"
					})
				}
			  })
		}else{//收藏
			var {postid,image,title,count_share} = this.data.data;
			favs.add({
				data:{
					_id:postid,image,title,count_share
				},
				success:()=>{
					this.setData({
						isshow:true
					})
					wx.showToast({
						icon:"none",
						  title: "Depot: 有品位~"
					})
				}
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.showLoading({
		  title: '加载中...',
		})
		wx.request({
		  url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid='+options.id,
		  success:(res)=>{
			  this.setData({
				  data:res.data.data
			  })
			  console.log(this.data.data);
			  wx.hideLoading({
				success: (res) => {},
			  })
		  }
		})
		//查找是否喜欢
		db.collection('mylike').doc(options.id).get({
			success: (res)=>{
			  console.log(res.data)
			  if(res.data){
				  this.setData({
					  isshow:true,
					  likeid:res.data._id
				  })
			  }
			// console.log(this.data.likeid)
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