// pages/chanpage/chanpage.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data:null,
		title:null,
		isshow:false,
		gddata:[],
		num:1,
		id:null
	},
	gdbtn(){//加载更多
		var index = this.data.num;
		index++;
		this.setData({
			num:index
		})
		wx.showLoading({
		  title: '加载中...',
		})
		wx.request({
		  url: "https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/getPostInCate?p="+this.data.num+"&size=10&cateid="+this.data.id,
		  success:(res)=>{
			  var arr = this.data.gddata;
			  for(let i of res.data.data){
				  arr.push(i)
			  }
			  this.setData({
				  gddata:arr
			  })
			  console.log(this.data.gddata);
			  wx.hideLoading({
				success: (res) => {},
			  })
		  }
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options)
		wx.showLoading({
		  title: '加载中...',
		})
		wx.setNavigationBarTitle({
			title:options.title
		}),
		this.setData({
			title:options.title
		})
		if(options.id!="null"){
			this.setData({
				isshow:true,
				id:options.id
			})
			wx.request({
			  url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/getPostInCate?p='+this.data.num+'&size=10&cateid='+options.id,
			  success:(res=>{
				  console.log(res.data.data);
				  this.setData({
					  data:res.data.data
				  })
				  wx.hideLoading({
					success: (res) => {},
				  })
			  })
			})
		}else {
			wx.request({
			  url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/getPostByTab?tab='+options.tab,
			  success:(res=>{
				  console.log(res.data.data);
				  this.setData({
					data:res.data.data
				})
				wx.hideLoading({
					success: (res) => {},
				  })
			  })
			})
		}
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