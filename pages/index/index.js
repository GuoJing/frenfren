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
    console.log(src);
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
    avatarBg: '#f2f6f9'
  }
});