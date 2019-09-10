$(document).ready(function($){
     //引入头部导航
     $('.detail_top_nav').load('public.html .header-nav');
     $('.head_wrapr').load('public.html .header-s-c-l');
     //引入侧边栏导航
     $('.detail_side_nav').load('public.html .aside-nav', function () {
         //点击回到顶部
         $('.backt').on('click', function () {
             $('html').scrollTop(0);
         })
     })
     //引入底部
     $('.detail_footer').load('public.html .footer');

     //顶部悬浮  楼梯效果
     $(window).on('scroll',function(){
         //顶部悬浮
         if($(this).scrollTop()>1020){
             $('.othernav,.detail_info_extra_loti').show();
             $('.detail_info_extra_loti').css({
                 position:'fixed',
                 top:59,
                 right:70
             })
         }else{
             $('.othernav').hide();
             $('.detail_info_extra_loti').css({
                position:'static'
            })
         }
         //楼梯效果
         let $lis=$('.detail_info_extra_loti li');
         $('.loceng').each(function(index,element){
             let $eleTop=$(element).offset().top;
             if($(window).scrollTop()<$eleTop){//楼层top值大于滚动条距离
                 $lis.eq(index).addClass('tablist').siblings().removeClass('tablist');
                 $lis.eq(index).find('a').addClass('tab_a').parent().siblings().find('a').removeClass('tab_a');
                 return false;
             }
         })
     })

     //tab切换
    function Tab() {
        this.btns = $('.detail_info_main_nav li')
        this.items = $('.items')
    }

    Tab.prototype.init = function () {
        var that= this; 
        this.btns.on('click',function(){
            let $index=$(this).index();
            $('.items').eq($index).css('display','block').siblings().not('.detail_info_main_nav').css('display','none');
            $(this).find('a').addClass('li_a').parent().siblings().find('a').removeClass('li_a') ;
        })
    }
    new Tab().init();

    //详情页小图列表渲染
    let $sid = location.search.substring(1).split('=')[1];
    $.ajax({
        url: '../php/details.php',
        data: {
            sid: $sid
        },
        dataType: 'json'
    }).done(function (d) {//每次传入一条数据
        $('.smallpic').attr('src', d.imgurl);
        $('.bpic').attr('src', d.imgurl);
		$('.smallpic').attr('sid', d.sid);
		$('#title_infos').html(d.description);
        $('.delete').html(d.delprice);
        $('.discount_price').html(d.price);
        //渲染小图
        let urlsarr = d.urls.split(',');
        //console.log(urlsarr)
        let $html = '';
        $.each(urlsarr, function (index, value) {
            $html += `
            <li>
            <img src="${value}" >
            <i></i>
           </li>
            `
        })
        $('.ullist ul').html($html);
    })

    //3.放大镜效果
        //$('.sf').width($('.spic').width()*$('.bf').width()/$('.bpic').width());
        // $('.sf').height($('.spic').height()*$('.bf').height()/$('.bpic').height());
		var bili = $('.bpic').width() / $('.spic').width();
		$('.spic').hover(function(){
			$('.sf').css('visibility','visible');
			$('.bf').css('visibility','visible');
			$(this).on('mousemove',function(ev){
				var $left=ev.pageX-$('.goods_detail_l').offset().left-$('.sf').width()/2;
				var $top=ev.pageY-$('.goods_detail_l').offset().top-$('.sf').height()/2;
				if($left<0){
					$left=0;
				}else if($left>=$('.spic').width()-$('.sf').width()){
					$left=$('.spic').width()-$('.sf').width();
				}
				if($top<0){
					$top=0;
				}else if($top>=$('.spic').height()-$('.sf').height()){
					$top=$('.spic').height()-$('.sf').height();
				}
				$('.sf').css('left',$left);
				$('.sf').css('top',$top);
				$('.bpic').css('left',-$left*bili);
				$('.bpic').css('top',-$top*bili);
			});
		},function(){
			$('.sf').css('visibility','hidden');
			$('.bf').css('visibility','hidden');
		});
		
		//点击小图切换
		$('.ullist ul').on('click','li',function(){
            var $imgurl=$(this).find('img').attr('src');
            $('.smallpic').attr('src',$imgurl);
			$('.bpic').attr('src',$imgurl);
		});
				
		//点击箭头进行切换
		var $num=5;
		$('#right').on('click',function(){
            var $list=$('.ullist ul li');
            console.log($list.length)
			if($list.length>$num){
				$num++;
                $('#left').css('display','block');
				if($list.length==$num){
					$('#right').css('display','none');
                }
				$('.ullist ul').animate({
                    left:-($num-5)*$list.eq(0).innerWidth()
				})
			}else{
                $('#right,#left').css('display','none');
            }
		});
		
		$('#left').on('click',function(){
			var $list=$('.list ul li');
			if($num>5){
				$num--;
				$('#right').css('display','block');
				if($num<=6){
					$('#left').css('display','none');
				}
				$('.ullist ul').animate({
					left:-($num-5)*$list.eq(0).innerWidth()
				})
			}
		});
    
    //点击加入购物车
    //显示加入购物车成功
    $('.buybtn').on('click',function(){
        alert('加入购物车成功');
        console.log(1)
    })
    let $sidarr = [];
    let $numarr = [];
    function cookie() {
        if (cookieobj.getcookie('cookiesid') && cookieobj.getcookie('cookienum')) {
             $sidarr = cookieobj.getcookie('cookiesid').split(',');
             $numarr = cookieobj.getcookie('cookienum').split(',');
        }
    }
    $('.buybtn').on('click', function () {//购物车按钮
        let $imgsid= $('.buybtn').parents('.goods_detail_l').find('.left_img').find('.smallpic').attr('sid');
        cookie();
        if($.inArray($imgsid,$sidarr)!==-1){//存在
            let $nums=parseInt($numarr[$.inArray($imgsid,$sidarr)])+parseInt($('.num-input').val());
            $numarr[$.inArray($imgsid,$sidarr)]=$nums;
            cookieobj.addcookie('cookienum',$numarr,10);
        }else{//不存在
            $sidarr.push($imgsid);
            cookieobj.addcookie('cookiesid',$sidarr,10);
            $numarr.push($('.num-input').val());
            cookieobj.addcookie('cookienum',$numarr,10);
        }
    })

    //加减按钮
    //++
    $('.goods-num .num-add').on('click',function(){
        let number = parseInt($(this).parent('.goods-num').find('.num-input').val());
        number++;
        $(this).parent('.goods-num').find('.num-input').val(number);//赋值回去
    })
    //--
    $('.goods-num .num-reduce').on('click',function(){
        let number = parseInt($(this).parent('.goods-num').find('.num-input').val());
        number--;
        if (number <= 1) {
            number = 1
        }
        $(this).parent('.goods-num').find('.num-input').val(number);//赋值回去
    })

})
   