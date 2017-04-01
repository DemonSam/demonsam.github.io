window.onload = function() {
    var oContainer = document.getElementById('container');
    var oBanner = document.getElementById('banner');
    var aBannerItem = oBanner.getElementsByClassName('banner-item');
    var oControlListBtn = document.getElementsByClassName('control-list-btn')[0];
    var aControlBtn = oControlListBtn.getElementsByTagName('li');
    var iNow = 0;
    var timer = null;
    oBanner.style.width = aBannerItem[0].offsetWidth * aBannerItem.length + 'px';
    for(var i = 0; i < aControlBtn.length;i++){
        aControlBtn[i].index = i;
        aControlBtn[i].onclick = function () {
            startMove(oBanner, { left: -(aBannerItem[0].offsetWidth) * this.index+1 });
            for (var j = 0; j < aControlBtn.length; j++) {
                aControlBtn[j].className = '';
            }
            aControlBtn[this.index].className = 'active';
            iNow = this.index;
        }
    }
    timer = setInterval(function() {
        tab();
    }, 5000)
    oContainer.onmouseover = function () {
        clearInterval(timer)
    }
    oContainer.onmouseout = function () {
        timer=setInterval(function () {
            tab();
        },5000)
    }

    function tab() {

        if (iNow > aBannerItem.length-1) {
            oBanner.style.left = 0;
            iNow = 1;
        }
        for (var i = 0; i < aControlBtn.length; i++) {
            aControlBtn[i].className = '';
        }
        if(iNow > aBannerItem.length-2){
            aControlBtn[0].className = 'active';
        }
        else{
            aControlBtn[iNow].className = 'active';
        }
        startMove(oBanner, { left: -(aBannerItem[0].offsetWidth) * iNow});
        iNow++;
    }

}