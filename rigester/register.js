window.onload = function () {
  var reguname = /^[a-zA-Z0-9_]{5,14}$/;  // 用户名正则式
  var regpwd = /^[a-zA-Z0-9_-]{5,17}$/;   // 密码正则式
  var regdname = /^[\u4e00-\u9fa5]{2,8}$/;  // 昵称正则式
  var regemail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;  // 邮箱正则式
  var uname = document.querySelector('#uname');
  var dname = document.querySelector('#dname');
  var email = document.querySelector('#email');
  var pwd = document.querySelector('#pwd');
  var surepwd = document.querySelector('#surepwd');
  regexp(uname, reguname);  // 用户名
  regexp(dname, regdname);  // 昵称
  regexp(email, regemail);  // 邮箱
  regexp(pwd, regpwd);      // 密码
  function regexp(ele, reg) {
    ele.onblur = function() {
      if (reg.test(this.value)) {
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
      } else {
        this.nextElementSibling.className = 'error';
        this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请重新输入';
      }
    }
  };

  surepwd.onblur = function() {
    if (this.value == pwd.value) {
      this.nextElementSibling.className = 'success';
      this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 两次密码输入一致';
    } else {
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';
    }
  };

}