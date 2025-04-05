const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
//1
document.getElementById("btn1").onclick = function(){
    count1++;
    document.getElementById("mention-1").textContent = count1;
}

document.getElementById("btn11").onclick = function(){
    count1--;
    document.getElementById("mention-1").textContent = count1;
}

document.getElementById("zero1").onclick = function(){
    count1 = 0;
    document.getElementById("mention-1").textContent = count1;
}

//2
document.getElementById("btn2").onclick = function(){
    count2++;
    document.getElementById("mention-2").textContent = count2;
}

document.getElementById("btn21").onclick = function(){
    count2--;
    document.getElementById("mention-2").textContent = count2;
}

document.getElementById("zero2").onclick = function(){
    count1 = 0;
    document.getElementById("mention-2").textContent = count1;
}
//3
document.getElementById("btn3").onclick = function(){
    count3++;
    document.getElementById("mention-3").textContent = count3;
}

document.getElementById("btn31").onclick = function(){
    count3--;
    document.getElementById("mention-3").textContent = count3;
}

document.getElementById("zero3").onclick = function(){
    count1 = 0;
    document.getElementById("mention-3").textContent = count1;
}
//4
document.getElementById("btn4").onclick = function(){
    count4++;
    document.getElementById("mention-4").textContent = count4;
}

document.getElementById("btn41").onclick = function(){
    count4--;
    document.getElementById("mention-4").textContent = count4;
}

document.getElementById("zero4").onclick = function(){
    count1 = 0;
    document.getElementById("mention-4").textContent = count1;
}
//5
document.getElementById("btn5").onclick = function(){
    count5++;
    document.getElementById("mention-5").textContent = count5;
}

document.getElementById("btn51").onclick = function(){
    count5--;
    document.getElementById("mention-5").textContent = count5;
}

document.getElementById("zero5").onclick = function(){
    count1 = 0;
    document.getElementById("mention-5").textContent = count1;
}