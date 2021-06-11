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
        var wrd1aray = wordOne.split("").sort();
        var wrd2aray = wordTwo.split("").sort();

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
        charArray = sentence.replace(/[1234567890!@#$%^&*(),.?]/g, '').toLocaleLowerCase().split("");
        return charArray
    }
    //Put the array into a char Map(character as key and reps as value) and return
    async letterRepsCount(filteredArray: string[]) {

        let charMap = {};
        let ch, count;

        for (let i = 0; i < filteredArray.length; i++) {
            if (filteredArray[i] != ' ') {
                ch = filteredArray[i];
                count = charMap[ch];
                charMap[ch] = count ? count + 1 : 1;
            }
        }
        return charMap
    }






//Find largest nth number in array (Promise)
    //validate the array
    arrayValidation(numberArray: number[], largestNth: number) {

        return new Promise((resolve, reject) => {
            if (numberArray.length > 0) {
                resolve(this.arraySort(numberArray, largestNth))
            } else {
                reject('No Elements in array')
            }
        })
    }
    //callback method of promise
    arraySort(numberArray: number[], largestNth: number) {

        let uniqueArray = [];

        numberArray.sort((a, b) => a - b);

        numberArray.forEach((element, index) => {
            if (numberArray.indexOf(element) === index) {
                uniqueArray.push(element)
            }
        })
        return numberArray[largestNth - 1]
    }


}




