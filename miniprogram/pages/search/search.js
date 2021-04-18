// pages/search/search.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		value:"",//搜索value
		data:null,//搜索出来的数据
		isshow:true,
		histdata:null//搜索历史
	},
	qcbtn(){//清除搜索历史

		wx.showModal({
			content: "清空搜索记录？",
			success: (res)=> {
			  	if (res.confirm) {
					wx.removeStorage({
						key: 'histdata',
						success: ()=>{
						  this.setData({
							  histdata:null
						  })
						wx.showToast({
							icon:"none",
							  title: "删除成功！"
						})
						}
					})
			 	}
			}
		  })

	
	},
	hotbtn(e){//热门搜索,搜索历史
		this.setData({
			value:e.currentTarget.dataset.value
		})
		wx.showLoading({
		  title: '加载中...',
		})
		wx.request({
		  url: 'https://app.vmovier.com/apiv3/search?kw='+this.data.value,
		  success:(res=>{

			  console.log(res.data.data);
			  this.setData({
				  data:res.data.data,
				  isshow:false
			  })
			  wx.hideLoading({
				success: (res) => {},
			  })

			  //判断搜索历史
			if(this.data.histdata){//有数据
				let arr = this.data.histdata;
					if(arr.indexOf(e.currentTarget.dataset.value)!=-1){//重复的
						arr.splice(arr.indexOf(e.currentTarget.dataset.value),1);//删掉
						arr.unshift(e.currentTarget.dataset.value);//把重复的数据添加到数组头部
						this.setData({
							histdata:arr
						})
					}else{//无重复
						arr.unshift(e.currentTarget.dataset.value);
						this.setData({
							histdata:arr
						})
					}
			}else {//无数据
				let arr = [];
				arr.push(e.currentTarget.dataset.value);
				this.setData({
					histdata:arr
				})
			}
			wx.setStorage({
				key: 'histdata',
				data: this.data.histdata,
			})
			console.log(this.data.histdata);
		})
		})

	},
	onSearch(e){//确定搜索时触发
		if(e.detail==""){
			wx.showToast({
				icon:"none",
				  title: "不能为空！"
			})
			return;
		}
		wx.showLoading({
		  title: '加载中...',
		})
		this.setData({
			value:e.detail
		}),
		wx.request({
			url: 'https://app.vmovier.com/apiv3/search?kw='+this.data.value,
			success:(res=>{
				console.log(res.data.data);
				this.setData({
					data:res.data.data,
					isshow:false
				})
				wx.hideLoading({
				  success: (res) => {},
				})
				 //判断搜索历史
				 if(this.data.histdata){
					let arr = this.data.histdata;
					if(arr.indexOf(e.detail)!=-1){
						arr.splice(arr.indexOf(e.detail),1);
						arr.unshift(e.detail);
						this.setData({
							histdata:arr
						})
					}else{
						arr.unshift(e.detail);
						this.setData({
							histdata:arr
						})
					}
					
				}else {
					let arr = [];
					arr.push(e.detail);
					this.setData({
						histdata:arr
					})
				}
				wx.setStorage({
					key: 'histdata',
					data: this.data.histdata,
				})
				console.log(this.data.histdata);
			})
		  })
	},
	onClear(){//点击输入框清空按钮时
		this.setData({
			isshow:true
		})
	},
	onCancel(){//取消搜索
		wx.navigateBack({
		  delta: 0,
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.showLoading({
		  title: '加载中...',
		})
		wx.request({
		  url: 'https://app.vmovier.com/apiv3/search?kw=',
		  success:(res=>{
			//   console.log(res.data.data);
			  this.setData({
				  data:res.data.data
			  })
			  wx.hideLoading({
				success: (res) => {},
			  })
		  })
		})
		wx.getStorage({
		  key: 'histdata',
		  success:(res)=>{
			if(res.data!=""){
				this.setData({
					histdata:res.data
				})
			}
		  }
		})
		// console.log(this.data.histdata)
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