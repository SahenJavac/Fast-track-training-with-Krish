import { Injectable } from '@nestjs/common';

@Injectable()
export class AlgosService {

    anagramCheck(wordOne: string, wordTwo: string) {

        if (wordOne.length != wordTwo.length) {
            return false;
        } else {

            var wrd1aray = wordOne.split("").sort();
            var wrd2aray = wordTwo.split("").sort();

            for (let i = 0; i < wordOne.length; i++) {

                if (wrd1aray[i] != wrd2aray[i]) {
                    return false
                }
            }
            return true;
        }
    }


    //Letter Repetition count
    letterRepsCount(sentence: string) {

        var charMap = {};
        var ch, count;
        let charArray = sentence.toLowerCase().split("");

        for (let i = 0; i < charArray.length; i++) {

            if (charArray[i] != ' ') {
                ch = charArray[i];
                count = charMap[ch];
                charMap[ch] = count ? count + 1 : 1;
            }
        }
        return charMap
    }



    //Find largest nth number in array using promise
    findBiggestNo(numberArray: number[], largestNth: number) {

        return new Promise((resolve, reject) => {
            if (numberArray.length > 0) {
                resolve(this.arraySort(numberArray, largestNth))
            } else {
                reject('No Elements in array')
            }
        })
    }

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




