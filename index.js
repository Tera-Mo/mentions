const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
//mentions
document.getElementById("mention1").onclick = function(){
    document.getElementById("h1").textContent = "اللهم صل و سلم على سيدنا محمد";
}
document.getElementById("mention2").onclick = function(){
    document.getElementById("h1").textContent = "سبحان الله";
}
document.getElementById("mention3").onclick = function(){
    document.getElementById("h1").textContent = "الحمدلله";
}
document.getElementById("mention4").onclick = function(){
    document.getElementById("h1").textContent = "الله أكبر";
}