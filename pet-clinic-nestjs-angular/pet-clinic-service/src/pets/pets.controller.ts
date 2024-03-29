import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Post()
    async createPet(
        @Body('type') type: string,
        @Body('breed') breed: string,
        @Body('age') age: string,
        @Body('diagnosis') diagnosis: string
    ) {
        return  await this.petsService.create({
            type, breed, age, diagnosis
        })
    }

    @Get()
    async petView() {
        return await this.petsService.showAll()
    }

    @Put(':id')
    async updatePet(@Param('id') id: number,
        @Body('type') type: string,
        @Body('breed') breed: string,
        @Body('age') age: string,
        @Body('diagnosis') diagnosis: string) {

        return await this.petsService.update(id, { id, type, breed, age, diagnosis })
    }

    @Delete(':id')
    async removePet(@Param('id') id: number) {
        return await this.petsService.destroy(id)
    }
}
