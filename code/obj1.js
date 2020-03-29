//拖拽  限制出界
function drag(node){
      node.onmousedown = function(ev){
        var e = ev || e.window.event;
        var offx = e.clientX - node.offsetLeft;
        var offy = e.clientY - node.offsetTop;

        document.onmousemove = function(ev){
            var e = ev || e.window.event;
            var l = e.clientX - offx;
            var t = e.clientY - offy;

            if(l <= 0){
                            l = 0;
                        }
            var windowwidth = document.documentElement.clientWidth || document.body.clientWidth;

            if(l >= windowwidth - node.offsetWidth){
                l = windowwidth - node.offsetWidth;
            }

            if(t <= 0){
                t = 0;
            var windowheight = document.documentElement.clientHeight || document.body.clientHeight;

            }
            if(t >= windowheight - node.offsetHeight){
                t = windowheight - node.offsetHeight;
            }

            node.style.left = e.clientX - offx + 'px';
            node.style.top = e.clientY - offy + 'px';


        }
    }
    node.onmouseup = function () {
         document.onmousemove = null;
    }
}


//跨浏览器兼容
function getDef(ev){
    var e = ev || e.window.event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}


function stopBubble(e){
    return (e.stopPropagation()? e.stopPropagation:e.cancelBubble=true)
}

function getEvent(ev){
    var e = ev || window.event;
    return e;
}

function colorRandom() {
        var str = "rgba(" + parseInt(Math.random()*256) + ',' + parseInt(Math.random()*256) + ',' +
            parseInt(Math.random()*256) + ','+ '1'+')';
        return str;
}

function getStyle(node,cssStyle) {
        return node.currentSyle ? node.currentSyle[cssStyle] : getComputedStyle(node)[cssStyle];
}


function time(){
    var d = new Date();
    var year1 = d.getFullYear();
    var mon = d.getMonth();
    var data1 = d.getDate();
    var week = weekday(d.getDay());
    var hour = dobTim(d.getHours());
    var min = dobTim(d.getMinutes());
    var sec = dobTim(d.getSeconds());

    var str = year1 + '.' + mon + '.' + data1 + '<br/>' + week + ':' + hour + ':' + min + ':' + sec;
    return str;
}

function weekday(week) {
        var day = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        return day[week];
}

function dobTim(a) {
        if ( a < 10){
            return '0' + a;
        }else{
            return a;
        }
}

function countDate(a,b){
    var d1 = new Date(a);
    var d2 = new Date(b);

    var tim1 = d1.getTime();
    var tim2 = d2.getTime();
    var coudate = Math.abs(tim1 - tim2);
    return (parseInt(coudate/24/3600/1000));
}

function $(id){
    return document.getElementById(id);
}