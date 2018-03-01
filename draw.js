var clear = document.getElementById("clear");
var svg = document.getElementById("svg");
var started = false;
var x0, y0;

var draw = function(e){
    var rect = svg.getBoundingClientRect();
    var x = e.offsetX;
    var y = e.offsetY;
    if (started){
        var l1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        l1.setAttribute("stroke", "#FFFFFF");
        l1.setAttribute("x1", x0);
        l1.setAttribute("y1", y0);
        l1.setAttribute("x2", x);
        l1.setAttribute("y2", y);
        svg.appendChild(l1);
    }
    else {
        started = true;
    }
    x0 = x;
    y0 = y;
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 10);
    c1.setAttribute("stroke", "#FFFFFF");
    c1.setAttribute("fill", "lightsteelblue")
    svg.appendChild(c1);
}

var erase = function(){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
    started = false;
    console.log("cleared");
}

clear.addEventListener('click', erase);
svg.addEventListener('click', draw);