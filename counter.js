let count=0;
const btn1 = document.getElementById("inc");
const btn2 = document.getElementById("dec");
const btn3 = document.getElementById("res");
btn1.addEventListener('click',function(){
    count++;
    document.getElementById('count').innerText=count
})
btn2.addEventListener('click',function(){
    count--;
    document.getElementById('count').innerText=count
})
btn3.addEventListener('click',function(){
    count=0;
    document.getElementById('count').innerText=count
})