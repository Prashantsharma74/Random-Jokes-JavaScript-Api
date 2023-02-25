const p=document.querySelector("p")
const button=document.querySelector("button")
const form=document.querySelector("form")


let getJoke = () =>{
    fetch("https:hindi-jokes-api.onrender.com/jokes?api_key=bc096dabd89150ce166e9b592690")
    .then(data => data.json())
    .then(item => {
        p.innerText=item.jokeContent
    })
}

getJoke();
button.addEventListener("click" , getJoke)
