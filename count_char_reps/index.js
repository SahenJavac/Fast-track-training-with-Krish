function countRepsOfChars(sentence) {

    var charMap = {};
    var ch, count;
    let charArr = sentence.toLowerCase().split("");
    

    for (let i = 0; i < charArr.length; i++) {

        if (charArr[i] != ' ') {

            ch = charArr[i];
            count = charMap[ch];
            charMap[ch] = count ? count + 1 : 1;
        }
    }

    for (ch in charMap) {
        console.log(ch + " count: " + charMap[ch]);
    }

}

var text = "This is the string which I use to test";
countRepsOfChars(text);
