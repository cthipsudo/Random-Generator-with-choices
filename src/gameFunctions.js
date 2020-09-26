function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

function grabChoices(choiceList, charRace, charClass){
    // console.log(choiceList)
    // console.log(charRace);
    // console.log(charClass);
    const customChoices = [
        choiceList.race[charRace], 
        choiceList.class[charClass], 
        choiceList.default.choice3, 
        choiceList.default.choice4
    ];
    return customChoices;
}
export default {
    shuffle,
    grabChoices
};