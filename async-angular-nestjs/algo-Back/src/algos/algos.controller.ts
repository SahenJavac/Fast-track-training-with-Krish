import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { AlgosService } from './algos.service';

@Controller('algos')
export class AlgosController {

    constructor(private algoService: AlgosService) {

    }

    @Post('anagram')
    checkAnagram(@Body('firstWord') firstWord: string, @Body('secondWord') secondWord: string) {

        const result = this.algoService.lengthMatch(firstWord, secondWord, this.algoService.characterMatch);
        return result;

    }

    @Post('reps')
    async occurranceCalculate(@Body('sentence') sentence: string) {
        let filtteredArray = await this.algoService.toArrayConvert(sentence);
        const charObj = await this.algoService.letterRepsCount(filtteredArray)
        return charObj;
    }

    @Post('numbers')
    getLargestNo(@Body('numberArray') numberString: string, @Body('num') nNo: number) {

        return this.algoService.findBiggestNo(numberString, nNo)
            .then((numArray) => { return numArray })
            .catch((e) => { return e })


    }




}

