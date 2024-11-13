const fortunes = require('./fortunes.json');



const getFortune = () => {
    
    console.log(fortunes[(Math.floor(Math.random() * fortunes.length))])
}


module.exports = getFortune