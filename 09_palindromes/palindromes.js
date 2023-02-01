const palindromes = function (a) {
    const characters = Array.from(
        a.toLowerCase().replace(/[^A-Za-z]/g,'').split('')
        );
    const reversedCharacters = Array.from(characters.reverse());
    return characters.every((character,index) => {
        // console.log(character);
        // console.log(reversedCharacters[((reversedCharacters.length -1)-index)]);
        return character === reversedCharacters[((reversedCharacters.length -1)-index)]})
};

// Do not edit below this line
module.exports = palindromes;
