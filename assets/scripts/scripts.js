var CHARACTER_URL = 'https://rickandmortyapi.com/api/character/'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNewCharacter() {
    let randomInteger = getRandomInt(826);
    var myResponseText;
    fetch(CHARACTER_URL + randomInteger)
        .then(res => res.json())
        .then(out =>
            myResponseText = out)
        .catch(err => { throw err });

    console.log(myResponseText);

    // console.log(myResponseText.name);
    // console.log(myResponseText.id);
    // console.log(myResponseText.status);
}