// components/album/album.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		data:Object
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		btn(e){//跳转专题详情页面
			wx.navigateTo({
			  url: '/pages/albumpage/albumpage?id='+e.currentTarget.dataset.id,
			})
			// console.log(e.currentTarget.dataset.time);
			// console.log(this.data.item)
		}
	}
})
