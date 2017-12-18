Page({
    data: {
        userno: '',
        password: ''
    },

    userIn: function (e) {
        this.setData({
            userno: e.detail.value
        })
    },

    pwdIn: function (e) {
        this.setData({
            password: e.detail.value
        })
    },

    loginBtn: function () {
        var userno = this.data.userno;
        var pwd = this.data.password;

        if (userno.length == 0 || pwd.length == 0) {
            wx.showToast({
                title: '用户名和密码不能为空',
                icon: 'loading',
                duration: 2000
            })
        } else if (userno.length <= 6 || pwd.length <= 8) {
            wx.showToast({
                title: '用户名或密码不合法',
                icon: 'loading',
                duration: 2000
            })
        } else {
            wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000
            })
            wx.switchTab({
                url: '/pages/index/index',
            })
        }
    }
}) 