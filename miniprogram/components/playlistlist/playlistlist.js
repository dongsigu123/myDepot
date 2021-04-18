// components/playlistlist/playlistlist.js
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
		btn(e){//跳转播放详情页面
			wx.navigateTo({
			  url: '../../pages/playpage/playpage?id='+e.currentTarget.dataset.id,
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
