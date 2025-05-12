const clock = Array.from(document.querySelector('.clock').children)
setInterval(() => {
    let date = new Date()
    clock[1].innerText = date.getMonth() + " months"
    clock[2].innerText = (date.getDate()-1) + " days"
    clock[3].innerText = date.getHours() + " hours"
    clock[4].innerText = date.getMinutes() + " minutes"
    clock[5].innerText = date.getSeconds() + " seconds"
}, 1000)