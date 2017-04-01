/**
 * Created by Sam on 2016/12/20.
 */

// function $() {
//     return new move();
// }

// function move() {}
// move.prototype.startMove = function(obj, json, fn) {
//     // console.log(this.json);
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function() {
//         var bStop = true;
//         for (var attr in json) {
//             var iCurrent = 0;
//             if (attr == "opacity") {
//                 iCurrent = parseInt(parseFloat(getStyle(obj, attr)) * 100);
//             } else {
//                 iCurrent = parseInt(getStyle(obj, attr));
//             }

//             var iSpeed = (json[attr] - iCurrent) / 8;
//             iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//             if (iCurrent != json[attr]) {
//                 bStop = false;
//             }
//             if (attr == "opacity") {
//                 obj.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')';
//                 obj.style.opacity = (iCurrent + iSpeed) / 100;
//             } else {
//                 obj.style[attr] = iCurrent + iSpeed + 'px';
//             }
//         }
//         if (bStop) {
//             clearInterval(obj.timer);
//             if (fn) {
//                 fn();
//             }
//         }
//     }, 30)
// }


function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;

        for (var attr in json) {
            var iCurrent = 0;
            if (attr == 'opacity') {
                iCurrent = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                iCurrent = parseInt(getStyle(obj, attr));
            }

            var iSpeed = (json[attr] - iCurrent) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (iCurrent != json[attr]) {
                bStop = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')';
                obj.style.opacity = (iCurrent + iSpeed) / 100;
            } else {
                obj.style[attr] = iCurrent + iSpeed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn.call(obj);
            }
        }
    }, 30)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function getByClass(oParent, sClass) {
    var aResult = [];
    var all = oParent.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
        if (all[i].className == sClass) {
            aResult.push(all[i]);
        }
    }
    return aResult;
}