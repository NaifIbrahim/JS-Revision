const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

const generateJokes = () => {
    fetch('https://dad-jokes.p.rapidapi.com/random/joke')
    .then((res) => {
      res.json()
    }).catch((error) => {
        console.log(error)
    })
}