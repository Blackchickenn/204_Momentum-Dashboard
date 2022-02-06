const pictureAuthor = document.getElementById("author")
const cryptoInfo = document.getElementById("crypto-info")



fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then (response => response.json())
.then (data => {
    document.body.style.backgroundImage = `url(${data.urls.full})` //added background image into CSS
    pictureAuthor.textContent = `By: ${data.user.name}`
})

.catch(err => {                     //default image if the API respond some error
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1583265555494-49aa9e8c80b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDM3MzUwNjA&ixlib=rb-1.2.1&q=80&w=1080)`
})

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
.then(response => response.json())
.then(data => {
    console.log(data)
    cryptoInfo.innerHTML = `
    <img src=${data.image.small}/>
    <span>${data.name}</span>
    `
    document.getElementById("crypto").innerHTML += `
    <p>🎯 : ${data.market_data.current_price.eur}€</p>
    <p>👆 : ${data.market_data.high_24h.eur}€</p>
    <p>👇 : ${data.market_data.low_24h.eur}€</p>
    `  
})
.catch(error => {
    document.getElementById("crypto").textContent = `${noAPI}`
})
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
});



// function updateTime(){   
// let currentTime = new Date()
// document.getElementById("current-time").textContent = currentTime.toLocaleTimeString("en-eu", {timeStyle: "short"})
// }
// setInterval(updateTime, 1000);