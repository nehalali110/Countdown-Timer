
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
days.textContent = "00"
hours.textContent = "00"
minutes.textContent = "00"
seconds.textContent = "00"



setInterval(function countDown(){
    const endDate = new Date("2/4/2024 7:00 PM")
    const currentDate = new Date()
    const diff = Math.floor((endDate - currentDate)/1000) 

    if(diff<0){
        return

    }

    days.textContent = Math.floor(diff/3600/24)
    hours.textContent = Math.floor((diff/3600)%24)
    minutes.textContent = Math.floor((diff/60)%60)
    seconds.textContent = Math.floor(diff % 60)

    if(days.textContent<10){
        days.textContent = "0" + days.textContent
    }

    if(hours.textContent<10){
        hours.textContent = "0" + hours.textContent
    }

    if(minutes.textContent<10){
        minutes.textContent = "0" + minutes.textContent
    }

    if(seconds.textContent<10){
        seconds.textContent = "0" + seconds.textContent
    }
},1000)

