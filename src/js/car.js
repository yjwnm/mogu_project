$(document).ready(function ($) {
    //公共部分的头部导航
    $('.car_head_nav').load('public.html .header-nav');
    //顶部悬浮
    $('.car_head_xf .right_APP').load('public.html .header-s-c-l');
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
    //公共部分的侧边栏导航
    $('.side-nav').load('public.html .aside-nav', function () {
        //点击回到顶部
        $('.backt').on('click', function () {
            $('html').scrollTop(0);
        })
    })
    //公共部分的底部
    $('#car_footer').load('public.html .footer');

    //购物车
    //渲染购物车列表
    function xrcart(sid, num) {
        $.ajax({
            url: '../php/mogudata.php',
            dataType: 'json'
        }).done(function (d) {
            let $html = '';
            $.each(d, function (index, value) {
                if (value.sid == sid) {
                    let $clonebox = $('.shop_buy_goods:hidden').clone(true, true);
                    $clonebox.find('.shop_buy_goods_img img').attr('src', value.imgurl);
                    $clonebox.attr('sid', value.sid);
                    $clonebox.find('.shop_buy_goods_description').html(value.description);
                    $clonebox.find('.shop_buy_goods_pre del').html(value.delprice);
                    $clonebox.find('.shop_buy_goods_del').html(value.price);
                    $clonebox.find('.item_sum').html(value.price);
                    $clonebox.find('.shop_buy_goods_numtx').val(num);
                    //总价
                    let $allmoney = (value.price * num).toFixed(2);
                    $clonebox.find('.item_sum').html($allmoney);
                    $clonebox.css('display', 'block');
                    $('.new_car_shop_info').append($clonebox);
                }
            });
            all()//渲染结束后再调用

        })
    }

    //获取cookie的值
    if (cookieobj.getcookie('cookiesid') && cookieobj.getcookie('cookienum')) {
        let $arrsid = cookieobj.getcookie('cookiesid').split(',');
        let $arrnum = cookieobj.getcookie('cookienum').split(',');
        $.each($arrsid, function (index, value) {
            xrcart($arrsid[index], $arrnum[index]);
        })
    }

    empty()
    //空购物车文字
    function empty() {
        if (cookieobj.getcookie('cookiesid') && cookieobj.getcookie('cookienum')) {
            $('.cart_blank').hide();
        } else {
            $('.cart_blank').show();
        }
    }

    //全选框
    $('.all_checked input').on('click', function () {//全选框添加点击事件
        $('.shop_buy_goods:visible').find('li').find('input').prop('checked', $(this).prop('checked'));
        all();
    })

    //事件委托,给input添加点击事件
    $('.shop_buy_goods').on('click', 'input:checkbox', function () {
        if ($('.shop_buy_goods:visible').find('li').find('.li_input').length == $('.shop_buy_goods:visible').find('li').find('.li_input:checked').length) {
            $('.all_checked input').prop('checked', true);

        } else {
            $('.all_checked input').prop('checked', false);
        }
        all();
    })

    //事件委托，给数量加减按钮添加点击事件
    //数量++
    $('.cart_num_add').on('click', function () {
        // var $index = $(this).find('.shop_buy_goods_img img').attr('sid');//通过id找数量的位置
        var $index = $(this).parent('.shop_buy_goods_num').parents('.shop_buy_goods').attr('sid');
        let number = parseInt($(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val());
        number++
        if (number >= 99) {
            number = 99
        }
        $(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val(number);//赋值回去
        cookie();
        arrnum[$.inArray($index, arrsid)] = $(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val();
        cookieobj.addcookie('cookienum', arrnum.toString(), 10);
        $(this).parents('ul').find('.total').find('.item_sum').html(onegoods($(this)));
        all();
    })
    //数量--
    $('.cart_num_reduce').on('click', function () {
        var $index = $(this).parent('.shop_buy_goods_num').parents('.shop_buy_goods').attr('sid');
        let number = parseInt($(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val());
        number--;
        if (number <= 1) {
            number = 1
        }
        $(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val(number);//赋值回去
        cookie();
        arrnum[$.inArray($index, arrsid)] = $(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val();
        cookieobj.addcookie('cookienum', arrnum.toString(), 10);
        $(this).parents('ul').find('.total').find('.item_sum').html(onegoods($(this)));
        all();
    })

    //直接输入改变数量
    $('.shop_buy_goods_numtx').on('input', function () {
        var $index = $(this).parent('.shop_buy_goods_num').parents('.shop_buy_goods').attr('sid');
        var $reg = /^\d+$/g; //只能输入数字
        var $value = parseInt($(this).val());
        if ($reg.test($value)) {//是数字
            if ($value >= 99) {//限定范围
                $(this).val(99);
            } else if ($value <= 0) {
                $(this).val(1);
            } else {
                $(this).val($value);
            }
        } else {//不是数字
            $(this).val(1);
        }
        $(this).parents('ul').find('.total').find('.item_sum').html(onegoods($(this)));
        cookie();
        arrnum[$.inArray($index, arrsid)] = $(this).parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val();
        cookieobj.addcookie('cookienum', arrnum.toString(), 10);
        all();
    });

    //计算总价 总量
    function all() {
        let allprice = 0;
        let allnum = 0;
        //console.log($('.li_input'))
        $('.li_input').each(function (index, value) {
            if ($(this).is(':checked')) {
                allprice += parseFloat(($(this).parents('ul').find('.total').find('.item_sum').html()));
                allnum += parseInt($(this).parents('ul').find('.shop_buy_goods_li5').find('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val());
            }
            $('.all_price').html('￥' + allprice);
            $('.all_goods_num span').html(allnum);
        })
    }

    //计算商品单价
    function onegoods(obj) { //obj:当前元素
        var $dj = parseFloat(obj.parents('ul').find('.shop_buy_goods_li4').find('.shop_buy_goods_del').html());//单价
        var $cnum = parseInt(obj.parent('.shop_buy_goods_num').find('.shop_buy_goods_numtx').val());//数量
        return ($dj * $cnum).toFixed(2);//结果
    }


    //把改变后的值存进cookie
    var arrsid = []; //商品的id
    var arrnum = []; //商品的数量
    //提前获取cookie里面id和num
    function cookie() {
        if (cookieobj.getcookie('cookiesid') && cookieobj.getcookie('cookienum')) {
            arrsid = cookieobj.getcookie('cookiesid').split(',');//cookie商品的sid  
            arrnum = cookieobj.getcookie('cookienum').split(',');//cookie商品的num
        }
    }

    //删除cookie
    function deletecookie(sid, arrsid) {
        var $index = -1;
        $.each(arrsid, function (index, value) {
            if (sid == value) {
                $index = index;
            }
        });
        if (arrsid.length === 1) {
            cookieobj.delcookie('cookiesid');
            cookieobj.delcookie('cookienum');
        } else {
            arrsid.splice($index, 1);
            arrnum.splice($index, 1);
            cookieobj.addcookie('cookiesid', arrsid.toString(), 10);
            cookieobj.addcookie('cookienum', arrnum.toString(), 10);
        }
    }

    //删除单个商品
    $('.delete_btn a').on('click', function () {
        cookie();
        if (confirm('你确定要删除吗？')) {
            $(this).parents('ul').parent('.shop_buy_goods').remove();
        }
        deletecookie($(this).parents('ul').parent('.shop_buy_goods').attr('sid'), arrsid);
        empty();
        all();
    });


    //删除全部商品的函数
    $('.all_checked a:first').on('click', function () {
            if (confirm('你确定要全部删除吗？')) {
                $('.li_input').each(function (index, value) {
                    if ($(this).is(':checked')) {
                        $(this).parents('ul').parent('.shop_buy_goods').remove();
                        deletecookie($(this).parents('ul').parent('.shop_buy_goods').attr('sid'), arrsid);
                    }
                })
            }
            empty();
            all();
            $('.all_checked input').prop('checked',false);
    });

})