var CHARACTER_URL = 'https://rickandmortyapi.com/api/character/'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNewCharacter() {
    let randomInteger = getRandomInt(826);

    var myResponseText;
    fetch(CHARACTER_URL + randomInteger)
        .then(res => res.json())
        .then(data => {
            myResponseText = data;
        })
        .then(() => {
            // console.log(myResponseText);
            // console.log(myResponseText.name);
            // console.log(myResponseText.id);
            // console.log(myResponseText.status);

            document.getElementById("character_image").src = myResponseText.image;
            document.getElementById("text_info").innerHTML = `<p>Name: ${myResponseText.name}</p> <p>Status: ${myResponseText.status}</p>`;

        });
}