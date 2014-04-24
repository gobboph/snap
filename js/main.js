


var svgElement=document.getElementById("svg"); 
var s = Snap(svgElement);

var bigCircle = s.circle(150,150,100)

bigCircle.attr({
	fill: "#bada55",
	stroke: "#000",
	strokeWidth: 10
});

var smallCircle = s.circle(100, 150, 70);

var discs = s.group(smallCircle, s.circle(200,150,70));

discs.attr({
	fill: "#fff"
});
bigCircle.attr({
	mask: discs
});

smallCircle.animate({r:50}, 1000);
discs.select("circle:nth-child(2)").animate({r: 50}, 1000);

var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
	fill: "none",
	stroke: "#bada55",
	strokeWidth: 5
});

p = p.pattern(0,0,10,10);
bigCircle.attr({
	fill: p
});

discs.attr({fill: "r()#fff-#000"});

discs.attr({fill: "R(150, 150, 100)#fff-#000"});

p.select("path").animate({stroke: "#f00"}, 1000);

Snap.load("img/states.svg", function (f) {
	f.attr({heigth: 100, width: 200});
	g = f.select("NY");
	s.append(f);
	g.drag;
});

//s.text(200, 100, "Snap.svg");

//var t = s.text(200, 120, ["Snap", ".", "svg"]);
//t.selectAll("tspan:nth-child(3)").attr({
//    fill: "#900",
//    "font-size": "20px"
//});
