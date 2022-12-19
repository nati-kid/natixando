let hour = document.getElementById('hour')
let mun = document.getElementById('minutes')
let sec = document.getElementById('Second')
let ampm = document.getElementById('ampm')
function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if( h > 12){
        h = h - 12
        ampm = "PM"
    }
    h = h < 10 ?  "0" + h : h;
    m = m < 10 ?  "0" + m : m;
    s = s < 10 ?  "0" + s : s;
    hour.innerText = h ;
    mun.innerText = m ;
    sec.innerText = s ;
    ampm, (innerText = ampm) ;
    setTimeout(()=> {
        updateClock();
    }, 1000)
}
updateClock();

let num = document.getElementById('num')
// console.log(num);
let form = document.getElementById('adder')
let result = document.getElementById('result')
form.onsubmit = function(e){
    e.preventDefault()
    if(isNaN(num.value )){
        console.log("please enter years only");
        result.textContent = "please enter yeonly"
    }    else if ((num.value) % 4 === 0){
        result.textContent = 'ዘመነ ዮሐንስ'
    }
    else if ((num.value)% 4 === 1){
        result.textContent = 'ዘመነ ማቴዎስ'
    }
    else if ((num.value) % 4 === 2){
        result.textContent = 'ዘመነ ማርቆስ'
    }
    else  {
        result.textContent = 'ዘመነ ሉቃስ'
    }
}

