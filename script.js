var a = document.querySelector("button.no");
a.addEventListener("mousemove",change);
function change()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    a.style.left = i+"px";
    a.style.top = j+"px";
}