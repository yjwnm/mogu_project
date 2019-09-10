!function ($) {
    //点击右上角的切换按钮，登录方式进行切换
    //点击电脑登陆方式按钮
    $('.login-method').on('click', function () {
        //手机登录方式按钮显示
        $('.login-mainr-method,.compute-login-tab,.signform').show();
        //电脑登陆方式按钮隐藏
        $('.login-method,.login-details').hide();
    });
    //点击手机登录方式按钮
    $('.login-mainr-method').on('click', function () {
        //电脑登陆方式按钮显示
        $('.login-method,.login-details').show();
        //手机登录方式按钮隐藏
        $('.login-mainr-method,.compute-login-tab,.signform').hide();
    });
    //点击手机无密码登录，切换
    $('.nocode-login').on('click', function () {
        $('.nocode-login').find('a').addClass('undeline');
        $('.encode_login,.getcheckcode').show();
        $('.normal-login').find('a').removeClass('undeline');
        $('.successful_login').hide();
    });
    //点击普通登录，切换
    $('.normal-login').on('click', function () {
        $('.nocode-login').find('a').removeClass('undeline');
        $('.normal-login').find('a').addClass('undeline');
        $('.encode_login,.getcheckcode').hide();
        $('.successful_login').show();
    });
    //引入公共部分，底部
    $('.login-footer').load('public.html .footer');

    //用户名 密码检测
    // const $username = $('#username');
    // const $password = $('#password');
    //const $btn = $('.login-button #login');
    const username=document.querySelector('#username');
    const password=document.querySelector('#password');
    const btn=document.querySelector('#login')
    btn.onclick = function () {
        ajax({
            type: 'post',
            url: '../php/login.php',
            data: {
                $unames: username.value,
                $pword: password.value
            },
            success: function (d) {
                if(!d){
                    alert('用户名密码错误')
                }else{
                    alert('登录成功');
                    location.href='http://localhost/js1907/mogu/src/index.html';
                }
            }
        })
    }

}(jQuery)


