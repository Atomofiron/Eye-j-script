function getCfg(s) {
	switch (s) {
		case "Hscope": return 6; // горизонтальный размах
		case "Vscope": return 8; // вертикальный размах
		case "dotHeight": return 30; // высота зрачка
		case "eyes": return 2; // кол-во глаз
		case "dotImg": return "dot.png"; // путь к зрачоку
		case "ones": return true; // одна точка зрения
		case "bg": return true; // фон зрачка
		case "bgColor": return "#eeb89c"; // цвет фона зрачка
		default: return 0;
	}
}

for (var i = 1; i<=getCfg("eyes"); i++) {
	var Eye = document.getElementById("eye"+i);
	Eye.style.width = getCfg("dotHeight");
	Eye.style.height = getCfg("dotHeight");
	Eye.innerHTML = "<img id='dot" + i + "' src='"+getCfg("dotImg")+"'>";
	
	if (getCfg("bg")) Eye.style.background = getCfg("bgColor");
	
	document.getElementById("dot"+i).style.height = getCfg("dotHeight");
}

function go(x,y,eye,dot) {
	var Eye = document.getElementById(eye);
	var Dot = document.getElementById(dot);
	
	var left = Eye.getBoundingClientRect().left;
	var right = Eye.getBoundingClientRect().right;
	var top = Eye.getBoundingClientRect().top;
	var bottom = Eye.getBoundingClientRect().bottom;
	var one = (left+right)/2;
	var two = (top+bottom)/2;
	
	if (getCfg("ones")) {
		var x_ = y_ = 0;
		var k = getCfg("eyes");
		for (var i = 1; i<=k; i++) {
			var Eye_ = document.getElementById("eye"+i);
			left = Eye_.getBoundingClientRect().left;
			right = Eye_.getBoundingClientRect().right;
			top = Eye_.getBoundingClientRect().top;
			bottom = Eye_.getBoundingClientRect().bottom;
			x_ = x_ + (left+right)/2;
			y_ = y_ + (top+bottom)/2;
		}
		one = x_/k;
		two = y_/k;
	}
	
	var difX = x-one;
	var difY = y-two;
	var sqrT = Math.sqrt(difX*difX+difY*difY);
	var sinus = difX/sqrT;
	var cosinus = difY/sqrT;
	Dot.style.marginLeft = getCfg("Hscope")*sinus;
	Dot.style.marginTop = getCfg("Vscope")*cosinus;
}
// Mouse:
function init() {
    if (document.layers) document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove=mousemove;
}
function mousemove(event) {
    var x = y = 0;
    if (document.attachEvent != null) {
        x = window.event.clientX;
        y = window.event.clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }
	for (var i = 1; i<=getCfg("eyes"); i++) go(x,y,"eye"+i,"dot"+i);
}
init()
