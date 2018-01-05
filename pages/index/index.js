const app = getApp();

Page({
  fillBg: function(event) {
    var color = event.target.dataset.color;
    this.setData({
      avatarBg: color
    });
  },
  fillAvatar: function(event) {
    var src = event.target.dataset.src;
    this.setData({
      avatarImg: src
    })
  },
  fillEnv: function (event) {
    var src = event.target.dataset.src;
    this.setData({
      avatarEnv: src
    })
  },
  fillExtra: function (event) {
    var src = event.target.dataset.src;
    this.setData({
      avatarExtra: src
    })
  },
  data: {
    avatarBg: '#f2f6f9',
    avatarImg: 'http://7xll9d.com1.z0.glb.clouddn.com/wechat/app/2017-Q1-01-C.PNG'
  }
});