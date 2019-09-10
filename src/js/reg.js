!function ($) {
    const $username = $('#username');//用户名
    const $spanname = $('.login_by_tel span');
    const $spanpass = $('.successful_login_pass span');
    const $password = $('#password');//密码
    const $submit = $('.reg-btn #submit');//提交按钮
    let $password_flag = true;
    let $tel_flag = true;
    $username.on('blur', function () {
        if ($username.val() !== '') {
            let $reg_tel = new RegExp('^1[3|5|7|8]\\d{9}$', 'i');
            if ($reg_tel.test($username.val())) {
                $spanname.html('√');
                $spanname.css('color', 'green');
                $tel_flag = true;
                $.ajax({
                    url: '../php/reg.php',
                    data: {
                        checkname: $username.val()
                    },
                    dataType: 'json',
                }).done(function (d) {
                    //console.log(d)
                    if (!d) {
                        $spanname.html('√')
                        $spanname.css('color', green)
                    } else {
                        $spanname.html('重名')
                        $spanname.css('color', 'red');
                        $tel_flag = false;
                        //console.log($tel_flag)
                    }
                })
            } else {
                $spanname.html('!');
                $spanname.css('color', 'red');
                $tel_flag = false;
            }
        } else {
            $spanname.html('*');
            $spanname.css('color', 'red');
            $tel_flag = false;
        }

    })

    //验证手机号用户名
    $username.on('focus', function () {
        $spanname.html('*');
        $spanname.css('color', 'red')
    })

    //密码
    $password.on('blur', function () {
        let $passValue = $password.val();
        let $num = 0;
        let $d_reg = /\d+/g;//检测数字
        let $s_reg = /[\W\_]+/g;//检测特殊字符
        if ($passValue !== '') {
            if ($d_reg.test($passValue) && $s_reg.test($passValue) && $passValue.length >= 6 && $passValue.length <= 12) {
                $spanpass.html('√');
                $spanpass.css('color', 'green');
                $password_flag = true;
            } else {
                $spanpass.html('!');
                $spanpass.css('color', 'red');
                $password_flag = false;
            }
        } else {
            $spanpass.html('*');
            $spanpass.css('color', 'red');
            $password_flag = false;
        }

    })

    //提交按钮
    $('form').submit(function () {
        if (!$tel_flag || !$password_flag) {
            console.log(1)
            $spanname.html('*');
            $spanname.css('color', 'red');
            $tel_flag = false;
            $spanpass.html('*');
            $spanpass.css('color', 'red');
            $password_flag = false;
            return false;
        }
    })


}(jQuery)


