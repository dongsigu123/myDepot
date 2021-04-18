// components/channel/channel.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		channel:null
	},
	lifetimes:{
		created(){
			wx.showLoading({
			  title: '加载中...',
			})
			wx.request({
			  url: 'https://app.vmovier.com/apiv3/cate/getList',
			  success:(res=>{
				  console.log(res.data.data);
				  this.setData({
					channel:res.data.data
				  })
				  wx.hideLoading({
					success: (res) => {},
				  })
			  })
			})
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		
	}
})
