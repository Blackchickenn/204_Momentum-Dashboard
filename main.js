const pictureAuthor = document.getElementById("author")
const cryptoInfo = document.getElementById("crypto-info")


fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=animals")
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

    })
 
    // .catch(error => {
    //     document.getElementById("crypto").textContent = `${noAPI}`
    // })