window.onload = function() {
    //box1 display
    (function() {
        var oBox = document.getElementById("box1");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var oControlList = oBox.getElementsByTagName("ol")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var aControlLi = oControlList.getElementsByTagName("li");
        for (var i = 0; i < aControlLi.length; i++) {
            aControlLi[i].index = i;
            aControlLi[i].onmouseover = function(e) {
                for (var j = 0; j < aControlLi.length; j++) {
                    aBannerLi[j].className = "";
                    aControlLi[j].className = "";
                }
                aBannerLi[this.index].className = "active";
                aControlLi[this.index].className = "active";
            }
        }
    })();
    //box2 opacity move.js
    (function() {
        var oBox = document.getElementById("box2");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var oControlList = oBox.getElementsByTagName("ol")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var aControlLi = oControlList.getElementsByTagName("li");




        for (var i = 0; i < aControlLi.length; i++) {
            aControlLi[i].index = i;
            aControlLi[i].onmouseover = function() {
                for (var j = 0; j < aControlLi.length; j++) {
                    aControlLi[j].className = "";
                    startMove(aBannerLi[j], { "opacity": 0 }, function() {
                        this.style.display = "none";
                    });

                }
                startMove(aBannerLi[this.index], { "opacity": 100 })
                aBannerLi[this.index].style.display = "block";
                this.className = "active";
            }
        }
    })();
    //box3 top move.js
    (function() {
        var oBox = document.getElementById("box3");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var oControlList = oBox.getElementsByTagName("ol")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var aControlLi = oControlList.getElementsByTagName("li");
        var iLiHeight = oBox.offsetHeight;
        for (var i = 0; i < aControlLi.length; i++) {
            aControlLi[i].index = i;
            aControlLi[i].onmouseover = function(e) {
                for (var j = 0; j < aControlLi.length; j++) {
                    aControlLi[j].className = "";
                }

                aControlLi[this.index].className = "active"
                startMove(oBannerList, { "top": this.index * -iLiHeight });
            }
        }
    })();
    //box4 top auto play move.js
    (function() {
        var oBox = document.getElementById("box4");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var oControlList = oBox.getElementsByTagName("ol")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var aControlLi = oControlList.getElementsByTagName("li");
        var iLiHeight = oBox.offsetHeight;
        var iNow = 0;
        var timer = null;
        timer = setInterval(autoplay, 3000);
        oBox.onmouseover = function() {
            clearInterval(timer)
        }
        oBox.onmouseout = function() {
            timer = setInterval(autoplay, 3000);
        }
        for (var i = 0; i < aControlLi.length; i++) {
            aControlLi[i].index = i;
            aControlLi[i].onmouseover = function(e) {
                iNow = this.index;
                for (var j = 0; j < aControlLi.length; j++) {
                    aControlLi[j].className = "";
                }

                aControlLi[iNow].className = "active"
                startMove(oBannerList, { "top": iNow * -iLiHeight });
            }
        }

        function autoplay() {
            iNow++;
            if (iNow == aBannerLi.length) {
                iNow = 0;
            }
            for (var j = 0; j < aControlLi.length; j++) {
                aControlLi[j].className = "";
            }

            aControlLi[iNow].className = "active"
            startMove(oBannerList, { "top": iNow * -iLiHeight });
        }
    })();
    //box5 Seamless
    (function() {
        var oBox = document.getElementById("box5");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var oControlList = oBox.getElementsByTagName("ol")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var aControlLi = oControlList.getElementsByTagName("li");
        var iLiHeight = oBox.offsetHeight;
        // #1
        // oBannerList.innerHTML += oBannerList.innerHTML;
        var iNow = 0;
        var timer = null;
        timer = setInterval(autoPlay, 1500);
        oBox.onmouseover = function() {
            clearInterval(timer)
        }
        oBox.onmouseout = function() {
            timer = setInterval(autoPlay, 1500);
        }
        for (var i = 0; i < aControlLi.length; i++) {
            aControlLi[i].index = i;


            aControlLi[i].onmouseover = function(e) {
                if (iNow == aControlLi.length) {
                    aBannerLi[0].style.position = "static";
                    oBannerList.style.top = 0;
                }


                iNow = this.index;
                for (var j = 0; j < aControlLi.length; j++) {
                    aControlLi[j].className = "";
                }

                aControlLi[iNow].className = "active"
                startMove(oBannerList, { "top": iNow * -iLiHeight });
            }
        }
        // #1
        // function autoPlay() {
        //     iNow++;
        //     if (iNow == aBannerLi.length / 2 + 1) {
        //         iNow = 1;
        //         oBannerList.style.top = 0;
        //     }
        //     for (var j = 0; j < aControlLi.length; j++) {
        //         aControlLi[j].className = "";
        //     }
        //     aControlLi[iNow % 5].className = "active";
        //     startMove(oBannerList, { "top": iNow * -iLiHeight });
        // }

        // #2
        function autoPlay() {
            if (iNow == aBannerLi.length - 1) {
                aBannerLi[0].style.position = "relative";
                aBannerLi[0].style.top = aBannerLi.length * iLiHeight + "px";
            }

            if (iNow == aBannerLi.length) {
                iNow = 0;
            } else {
                iNow++;
            }
            if (iNow == 0) {
                oBannerList.style.top = 0;
                aBannerLi[0].style.position = "static";
                iNow = 1;
            }
            for (var i = 0; i < aControlLi.length; i++) {
                aControlLi[i].className = "";
            }
            aControlLi[iNow % 5].className = "active"
            startMove(oBannerList, { "top": iNow * -iLiHeight });

        }
    })();
    //box6 Left and right seamless move.js
    (function() {
        var oBox = document.getElementById("box6");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var oControlList = oBox.getElementsByTagName("ol")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var aControlLi = oControlList.getElementsByTagName("li");
        var iLiHeight = aBannerLi[0].offsetHeight;
        var iLiWidth = aBannerLi[0].offsetWidth;
        var iNow = 0;
        var oNowTime = new Date().getTime();
        var bSwitch = true;
        for (var i = 1; i < aBannerLi.length; i++) {
            aBannerLi[i].style.left = iLiWidth + "px";
        }
        for (var i = 0; i < aControlLi.length; i++) {
            aControlLi[i].index = i;
            aControlLi[i].onmouseover = function(e) {
                // if ((new Date().getTime() - oNowTime) / 1000 < 0.3) {
                //     return;
                // }
                // oNowTime = new Date().getTime();
                if (bSwitch) {
                    bSwitch = false;
                    if (this.index > iNow) {
                        aBannerLi[this.index].style.left = iLiWidth + "px";
                        startMove(aBannerLi[iNow], { "left": -iLiWidth });
                    } else if (this.index < iNow) {
                        aBannerLi[this.index].style.left = -iLiWidth + "px";
                        startMove(aBannerLi[iNow], { "left": iLiWidth });
                    }
                    iNow = this.index;

                    for (var j = 0; j < aControlLi.length; j++) {
                        aControlLi[j].className = "";
                    }
                    aControlLi[iNow].className = "active";
                    startMove(aBannerLi[iNow], { "left": 0 }, function() {
                        bSwitch = true;
                    });
                }
            }
        }
    })();
    //box7 Accordion move.js
    (function() {
        var oBox = document.getElementById("box7");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var iLiWidth = aBannerLi[0].offsetWidth;
        for (var i = 1; i < aBannerLi.length; i++) {
            aBannerLi[i].style.left = (iLiWidth - 120) + (i - 1) * 30 + "px";
        }
        for (var i = 0; i < aBannerLi.length; i++) {
            aBannerLi[i].index = i;
            aBannerLi[i].onmouseover = function() {
                for (var j = 0; j < aBannerLi.length; j++) {
                    if (j > this.index) {
                        startMove(aBannerLi[j], { "left": (iLiWidth - 120) + (j - 1) * 30 });
                    } else {
                        startMove(aBannerLi[j], { "left": j * 30 });
                    }
                }

            }
        }

    })();

    //box8 Accordion move.js
    (function() {
        var oUl = document.getElementsByTagName('ul')[0];
        var aLiUl = oUl.getElementsByTagName('li');

        var num = Math.ceil(470 / aLiUl.length);

        for (var i = 0; i < aLiUl.length; i++) {
            aLiUl[i].style.left = num * i + 'px';
        }

        for (var i = 0; i < aLiUl.length; i++) {
            aLiUl[i].index = i;
            aLiUl[i].onmouseover = function() {

                for (var i = 0; i < aLiUl.length; i++) {
                    if (i <= this.index) {
                        startMove(aLiUl[i], { left: i * 30 });
                    } else {
                        startMove(aLiUl[i], { left: (470 - 120) + (i - 1) * 30 });
                    }
                }

            };

            aLiUl[i].onmouseout = function() {
                for (var i = 0; i < aLiUl.length; i++) {
                    startMove(aLiUl[i], { left: num * i });
                }
            };
        }





        var oBox = document.getElementById("box8");
        var oBannerList = oBox.getElementsByTagName("ul")[0];
        var aBannerLi = oBannerList.getElementsByTagName("li");
        var iLiWidth = aBannerLi[0].offsetWidth;
        var iNow = 0;
        var iWidth = Math.ceil(iLiWidth / aBannerLi.length);


        for (var i = 0; i < aBannerLi.length; i++) {
            aBannerLi[i].style.left = i * iWidth + "px";
        }
        for (var i = 0; i < aBannerLi.length; i++) {
            aBannerLi[i].index = i;
            aBannerLi[i].onmouseover = function() {
                for (var j = 0; j < aBannerLi.length; j++) {
                    if (j <= this.index) {
                        startMove(aBannerLi[j], { "left": j * 30 })
                    } else {
                        startMove(aBannerLi[j], { "left": (iLiWidth - 120) + (j - 1) * 30 });
                    }
                }
            };

            aBannerLi[i].onmouseout = function() {
                for (var i = 0; i < aBannerLi.length; i++) {
                    startMove(aBannerLi[i], { "left": i * iWidth });
                }
            };
        }
    })();


}