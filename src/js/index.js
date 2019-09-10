!function ($) {
    //公共部分的头部导航
    $('#top-nav').load('public.html .header-nav');
    //顶部悬浮
    $('.top_changenav .right_APP').load('public.html .header-s-c-l');
    //顶部悬浮二级导航
    $('.left_allgoods_subnav').load('public.html .select_lists_left', function () {
        //滚动条距离大于616时，顶部悬浮出现
        $(window).on('scroll', function () {
            if ($('html').scrollTop() >= 616) {
                $('.top_changenav').stop(true).animate({
                    top: 0
                }, 30)
            } else {
                $('.top_changenav').stop(true).animate({//消失
                    top: -72
                }, 30);
                $('.left_allgoods_subnav').hide();
            }
        });
        //显示二级导航
        var timer = null;
        $('.left_allgoods').hover(function () {
            clearInterval(timer)
            $('.top_changenav').find('.left_allgoods_subnav').show();
            $('.top_changenav').find('.select_lists_left_subnav').show();
        }, function () {
            timer = setInterval(function () {
                $('.top_changenav').find('.left_allgoods_subnav').hide();
            }, 300);
        });
    });
    //头部版心 顶部悬浮 搜索框 购物车 登陆注册部分
    $('.header-login-search').load('public.html .header-s-c-l');
    // 中间选择各类商品左边二级导航
    $('.selectgoods').load('public.html .select_lists_left', function () {
        $('.main .main_select_lists .select_listsul').hover(function () {
            $('.main').find('.select_lists_left_subnav').show();
        }, function () {
            $('.main').find('.select_lists_left_subnav').hide();
        })
    });
    //轮播
    let $timer = null;
    $timer = setInterval(function () {
        $('.select_lists_img a:first').toggleClass('opacitychange');
        $('.select_lists_img a:last').toggleClass('opacitychange');
        $('.select_lists_btn a:first').toggleClass('c');
        $('.select_lists_btn a:last').toggleClass('c');
    }, 3000)
    $('.select_lists_img').hover(function () {
        clearInterval($timer)
    }, function () {
        $timer = setInterval(function () {
            $('.select_lists_img a:first').toggleClass('opacitychange');
            $('.select_lists_img a:last').toggleClass('opacitychange');
            $('.select_lists_btn a:first').toggleClass('c');
            $('.select_lists_btn a:last').toggleClass('c');
        }, 3000)
    })

    //轮播
    var $btns = $('.btn_box a');
    var $pics = $('.banner_box .banner_box1');
    var $banner=$('.content_box');
    //初始化两个索引:前一个索引先走，当前索引立马跟上。
    var $previndex = 0; //前一个索引
    var $index = 0; //当前索引

    //1.给小圆圈按钮添加点击事件
    $btns.on('click', function (ev) {
        //存储当前的索引
        $index = $(this).index();
        change(ev);
        $previndex = $index; //当前索引给前一个索引。
    });
    //自动轮播
    let timer1 = null;
    timer1 = setInterval(function () {
        $index++; //当前索引
        if ($index > 4) {
            $previndex = 4;
            $index = 0;
            $pics.eq($previndex).animate({
                left: -630
            });
        } else {
            $pics.eq($previndex).animate({
                left: -630
            });
        }
        $pics.eq($index).css('left', '630px').animate({
            left: 0
        });
        $btns.eq($index).addClass('a_color').siblings().removeClass('a_color');
        $previndex = $index; //当前索引给前一次索引。
    }, 2000)
    $banner.hover(function () {
        clearInterval(timer1)
    }, function () {
        timer1 = setInterval(function () {
            $index++; //当前索引
            if ($index > 4) {
                $previndex = 4;
                $index = 0;
                $pics.eq($previndex).animate({
                    left: -630
                });
            } else {
                $pics.eq($previndex).animate({
                    left: -630
                });
            }
            $pics.eq($index).css('left', '630px').animate({
                left: 0
            });
            $btns.eq($index).addClass('a_color').siblings().removeClass('a_color');
            $previndex = $index; //当前索引给前一次索引。
        }, 2000)
    });

    function change(ev) {
        $btns.eq($index).addClass('a_color').siblings().removeClass('a_color');
        if ($previndex == 4 && $index == 0) {//满足此条件同时也满足下面的条件 $index<$previndex
            $pics.eq($previndex).animate({
                left: 630
            });
            $pics.eq($index).animate({
                left: 0
            });
        } else {
            $pics.eq($previndex).animate({
                left: -630
            });
            $pics.eq($index).css('left', '630px').animate({
                left: 0
            });
        }
    }

    //倒计时
    function double(num) {
        return num <= 9 ? '0' + num : num;
    }
    let arr = []
    function fn() {
        var futureTime = new Date(2019, 9, 30, 18, 10, 10);
        var nowTime = new Date();
        var time = futureTime - nowTime
        var times = parseInt(time / 1000)
        var hour = parseInt(times % 86400 / 3600)
        var min = parseInt(times % 3600 / 60)
        var sec = parseInt(times % 60)
        arr = [double(hour), double(min), double(sec)];
        return arr
    }
    $('.hours').html(fn()[0]);
    $('.minutes').html(fn()[1]);
    $('.second').html(fn()[2]);
    setInterval(function () {
        $('.hours').html(fn()[0]);
        $('.minutes').html(fn()[1]);
        $('.second').html(fn()[2]);
    }, 1000)



    //公共部分的侧边栏导航
    $('.side-nav').load('public.html .aside-nav', function () {
        //点击回到顶部
        $('.backt').on('click', function () {
            $('html').scrollTop(0);
        })
    })
    //主体第一部分,左边所有的dl加类
    $('.select_listsul dl').hover(function () {
        var i = -1;
        $('.select_listsul dl').each(function (index, element) {
            i++;
            return $(element).addClass('.bd-A_' + i);
        })
    })

    //前端接收后端的数据，渲染页面
    $.ajax({
        url: '../php/mogudata.php',
        dataType: 'json'
    }).done(function (data) {
        //console.log(data);
        var $html = '';
        $.each(data, function (index, value) {
            $html += `
            <li class="bordercolor">
                    <a href="detail.html?sid=${value.sid}" class="find_similar">找相似</a>
                    <a href="detail.html?sid=${value.sid}" class="like_goods_listsimg">
                        <img src="${value.imgurl}" alt="">
                    </a>
                    <a href="detail.html?sid=${value.sid}" class="like_img_description">
                        <p>${value.description}</p>
                        <div class="like_price">
                            <b>¥
                            ${value.price}
                            </b>
                            <p>
                                ￥
                                <del>${value.delprice}</del>
                            </p>
                            <span>
                                <img src="${value.saveurl}" alt="">
                                ${value.save}
                            </span>
                        </div>
                    </a>
                </li>
            `
        });
        $('.ulliksts').html($html);
    });

    $('.select_lists_left dl').addClass('clearfix');
    //公共部分的底部
    $('.footer').load('public.html .footer');
}(jQuery)
