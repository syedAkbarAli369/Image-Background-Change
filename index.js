var imgBox = document.querySelector(".imgBox");
var imgWrap = document.querySelector(".imgWrap");
var leftSpace = imgBox.offsetLeft;
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");


originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}