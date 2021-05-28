function anagramCheck(wrd1, wrd2) {

    var wrdOneLength = wrd1.length;
    var wrdtwoLength = wrd2.length;

    if (wrdOneLength != wrdtwoLength) {
        return false;
    } else {

        var wrd1aray = wrd1.split("").sort();
        var wrd2aray = wrd2.split("").sort();

        for (let i = 0; i < wrdOneLength; i++) {

            if (wrd1aray[i] != wrd2aray[i]) {
                return false
            }
        }
        return true;
    }

}

var firstWord = 'sahenrf';
var secondWord = 'hensara';
var isAnagram = anagramCheck(firstWord, secondWord);
if (isAnagram == true) {
    console.log(firstWord + " and " + secondWord + " are Anagrams")
} if (isAnagram == false) {
    console.log(firstWord + " and " + secondWord + " are not Anagrams")
}