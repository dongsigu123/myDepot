// components/find/find.js
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
      index:null,
      jzgd:null,
      gddata:[]
  },

  /**
   * 组件的方法列表
   */
    lifetimes:{
      created(){
        // console.log(111);
        wx.showLoading({
          title: '加载中...',
        })
        wx.request({
          url: 'https://app.vmovier.com/apiv3/index/index',
          success:(res)=> {
            console.log(res.data.data);
            this.setData({
              index:res.data.data,
              jzgd:res.data.data.posts.next_page_url_full
            })
            wx.hideLoading({
              success: (res) => {},
            })
          }
        })
      }
    },
  methods: {
    gdbtn(){//加载更多
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: this.data.jzgd,
        success:(res)=>{
          var arr = this.data.gddata;
          arr.push(res.data.data);
          this.setData({
            gddata:arr,
            jzgd:res.data.data.next_page_url_full
          })
          wx.hideLoading({
            success: (res) => {},
          })
          console.log(this.data.gddata)
        }
      })
    }
  }
})
