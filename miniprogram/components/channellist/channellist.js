// components/channellist/channellist.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		item:Object
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		myclass:true
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		btn(e){//跳转频道内容详情页面
			console.log(e.currentTarget)
			wx.navigateTo({
				url:"/pages/chanpage/chanpage?id="+e.currentTarget.dataset.id+"&title="+e.currentTarget.dataset.title+"&tab="+e.currentTarget.dataset.tab
			})
			// console.log(e.currentTarget.dataset.time);
			// console.log(this.data.item)
		},
		anxiabtn(){//触摸开始
			this.setData({
				myclass:false
			})
		},
		tanqibtn(){//弹起后
			this.setData({
				myclass:true
			})
		}
	}
})
