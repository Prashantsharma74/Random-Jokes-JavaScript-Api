const p=document.querySelector("p")
const button=document.querySelector("button")
const form=document.querySelector("form")


let getJoke = () =>{
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(data => data.json())
    .then(item => {
        p.innerText=item.joke
    })
}

getJoke();
button.addEventListener("click" , getJoke)
