setInterval(data)
const hr = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')


function data(){
    const date = new Date()
    const seconds = date.getSeconds() / 60
    const minutes = (seconds + date.getMinutes()) / 60
    const hours = (minutes + date.getHours()) / 12

    rotation(sec, seconds)
    rotation(min, minutes)
    rotation(hr, hours)
}

function rotation(hand, ratio){
    hand.style.setProperty('--rotate', ratio * 360)
}


data()