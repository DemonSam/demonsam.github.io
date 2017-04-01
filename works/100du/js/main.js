/**
 * Created by Sam on 2017/1/30.
 */
$(function(){
    //搜索切换
    (function () {
        var aLi = $("#menu li");
        var oText = $("#search").find(".form .text");
        var arrText =[
            '例如：荷棠鱼坊烤鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609号',
            '例如：万达影院双人情侣卷',
            '例如：东莞出事了，打老虎是谁',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        var iNow = 0;
        oText.val(arrText[iNow]);
        aLi.each(function(index){
            $(this).click(function () {
                aLi.attr('class','gradient');
                $(this).attr('class','active');
                oText.val(arrText[index]);
                iNow = index;
            })
        })
        oText.focus(function () {
            if($(this).val() == arrText[iNow]){
                oText.val("");
            }
        })
        oText.blur(function(){
            if($(this).val() == ""){
                oText.val(arrText[iNow]);
            }
        })
    })();
    //update 文字滚动
    (function () {
        var oUpdate = $('#search .update');
        var oUl = $('.update ul');
        var iNow = 0;
        var arrData = [
            { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间瞬间', 'url':'http://www.miaov.com/2013/#message' },
            { 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间瞬间', 'url':'http://www.miaov.com/2013/#message' }
        ];
        var str = '';
        var oUpBtn = $('#updateUpBtn');
        var oDownBtn = $('#updateDownBtn');
        var timer = null;
        for (var i = 0; i < arrData.length; i++){
            str += '<li><a href="'+ arrData[i].url +'"><strong>'+ arrData[i].name +'</strong> <span class="up_time">'+ arrData[i].time +'分钟前</span class="up_title"> 写了一篇新文章：'+ arrData[i].title +'…</a></li>';
        }
        oUl.html(str);
        var iH = oUl.find('li').height();
        oUpBtn.click(function () {
            doMove(-1);
        });
        oDownBtn.click(function () {
            doMove(1);
        });
        oUpdate.hover(function () {
            clearInterval(timer);
        },autoPlay)

        function autoPlay() {
            timer = setInterval(function () {
                doMove(-1)
            },2500)
        }
        autoPlay();
        function doMove(num) {
            iNow +=num;
            if(Math.abs(iNow) > arrData.length-1){
                iNow=0;
            }
            if(iNow > 0){
                iNow = -(arrData.length-1);
            }
            oUl.stop().animate({'top':iH*iNow},2200,'elasticOut')
        }
    })();
    
    //选项卡切换
    (function () {
        fnTab($('#tabnav_1'),$('.tabcon_1'),'click');
        fnTab($('#tabnav_2'),$('.tabcon_2'),'click');
        fnTab( $('#tabnav_3'), $('.tabcon_3'), 'mouseover' );
        fnTab( $('#tabnav_4'), $('.tabcon_4'), 'mouseover' );

        function fnTab(oNav,oCon,sEvent) {
            var oNavList = oNav.children();
            oCon.eq(0).show();
            oNavList.each(function (index) {
                $(this).on(sEvent,function () {
                    // alert(index)
                    oNavList.addClass('gradient').removeClass('active');
                    $(this).addClass('active').removeClass('gradient');
                    oNavList.find('a').attr('class', 'triangle_down_gray');
                    $(this).find('a').attr('class', 'triangle_down_red');
                    oCon.hide().eq(index).show();
                })


            })
        }




    })();

    //自动播放焦点图
    (function () {
        var oRecommendPic = $('.recommend .pic');
        var oUlLi = oRecommendPic.find('ul li');
        var oOlLi = oRecommendPic.find('ol li');
        var oP = oRecommendPic.find('p');
        var arrDate = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
        var iNow = 0;
        var timer = null;
        fnFade();
        autoPlay();
        oOlLi.each(function (index) {
            $(this).click(function () {
                iNow = index;
                fnFade();
            })
        });
        oRecommendPic.hover(function () {clearInterval(timer)},autoPlay);

        function autoPlay() {
            timer = setInterval(function () {
                iNow++;
                iNow %= arrDate.length;
                fnFade();
            },2000)
        }
        function fnFade() {
            oUlLi.each(function (index) {
                if(index != iNow){
                    oUlLi.eq(index).fadeOut().css('zIndex',1);
                    oOlLi.eq(index).removeClass('active');
                }
                else{
                    oUlLi.eq(index).fadeIn().css('zIndex',2);
                    oOlLi.eq(index).addClass('active');
                }
            });
            oP.text(arrDate[iNow]);
        }

    })();

    //日历提示说明
    (function () {
        var aSpan = $('.calendar h3 span');
        var aImg = $('.calendar img');
        var oPrompt = $('.today_info');
        var oImg = oPrompt.find('img');
        var oStrong = oPrompt.find('strong');
        var oP = oPrompt.find('p');


        aImg.hover(function () {
            var iTop = $(this).parent().position().top - 33;
            var iLeft = $(this).parent().position().left + 55;
            var index = $(this).parent().index()%aSpan.size();
            oStrong.text(aSpan.eq(index).text())
            oImg.attr('src',this.src);
            oP.text($(this).attr('info'));
            oPrompt.show().css({ 'left': iLeft, 'top': iTop });
        },function () {
            oPrompt.hide();
        })

    })();

    //bbs 论坛  鼠标滑入
    (function () {
        var oBbsLi = $('.bbs li');
        oBbsLi.mouseover(function () {
            oBbsLi.removeClass('active');
            $(this).addClass('active');
        })
    })();

    //红人烧客 热区提示效果
    (function () {
        var arr = [
            '',
            '用户1<br />人气1',
            '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
            '用户3<br />人气3',
            '用户4<br />人气4',
            '用户5<br />人气5',
            '用户6<br />人气6',
            '用户7<br />人气7',
            '用户8<br />人气8',
            '用户9<br />人气9',
            '用户10<br />人气10'
        ];
        $('.hot_area li').mouseover(function () {
            if($(this).index() == 0 ) return;
            $('.hot_area li .info').remove()
            console.log($(this).width())
            $(this).append('<div class="info" style="width: '+($(this).width()-12)+'px;height: '+($(this).height()-12)+'px"><p >'+arr[$(this).index()]+'</p></div>')
        })
    })();
})