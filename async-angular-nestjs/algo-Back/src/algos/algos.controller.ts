import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { AlgosService } from './algos.service';

@Controller('algos')
export class AlgosController {

    constructor(private algoService: AlgosService) {

    }

    @Post('anagram')
    checkAnagram(@Body('firstWord') firstWord: string, @Body('secondWord') secondWord: string) {
        const result = this.algoService.anagramCheck(firstWord,secondWord);
        return {
            statusCode: HttpStatus.OK,
            message: 'Checking Sucessfull',
            result
        }
    }

    @Post('reps')
    occurranceCalculate(@Body('sentence') sentence: string) {
        return this.algoService.letterRepsCount(sentence);
    }

    @Post('numbers')
    getLargestNo(@Body('numberArray') numberArray:number[],@Body('num')nNo:number) {

       return this.algoService.findBiggestNo(numberArray,nNo);
        

    }




}

