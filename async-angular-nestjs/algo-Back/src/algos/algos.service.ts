import { Injectable } from '@nestjs/common';

@Injectable()
export class AlgosService {

    //Anagram check

    //compare the length of two words
    lengthMatch(wordOne: string, wordTwo: string, callBack) {

        if (wordOne.length != wordTwo.length) {
            return false
        } else {
            return callBack(wordOne, wordTwo);
        }
    }
    //compare each character of two words
    characterMatch(wordOne: string, wordTwo: string) {

        var wrd1aray = wordOne.toLowerCase().split("").sort();
        var wrd2aray = wordTwo.toLowerCase().split("").sort();

        for (let i = 0; i < wordOne.length; i++) {

            if (wrd1aray[i] != wrd2aray[i]) {
                return false
            }
        }
        return true
    }






    //Letter Repetition count

    //filter and put character into an array (async)
    async toArrayConvert(sentence: string) {
        let charArray = [];
        charArray = sentence.replace(/[1234567890!@#$%^&*(),.?]/g, '').toUpperCase().split("");
        return charArray
    }

    //Put the array into a char Map(character as key and reps as value) and return
    async letterRepsCount(filteredArray: string[]) {

        let charObj = {};
        let ch, count;

        for (let i = 0; i < filteredArray.length; i++) {
            if (filteredArray[i] != ' ') {
                ch = filteredArray[i];
                count = charObj[ch];
                charObj[ch] = count ? count + 1 : 1;
            }
        }
        return charObj
    }









    //Find largest nth number in array (Promise)
    findBiggestNo(numberStr: string, largestNth: number) {

        return new Promise((resolve, reject) => {
            if (numberStr.length > 0) {
                resolve(this.arraySort(numberStr, largestNth))
            } else {
                reject('No Elements in array')
            }
        })
    }
    //callback method of promise
    arraySort(numberStr: string, largestNth: number) {

        let uniqueArray = [];
        let numberArray = numberStr.split(',').map(Number)

        numberArray.sort((a, b) => a - b);
        
        numberArray.forEach((element, index) => {
            if (numberArray.indexOf(element) === index) {
                uniqueArray.push(element)
            }
        })
        return uniqueArray[largestNth - 1]
    }


}




