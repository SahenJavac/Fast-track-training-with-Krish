import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.model';

@Injectable()
export class PetsService {

    constructor(
        @InjectRepository(Pet) private readonly petRepository: Repository<Pet>
    ) { }

    async create(petData: any): Promise<Pet> {
        return this.petRepository.save(petData)
    }

    async showAll(): Promise<Pet[]> {
        return await this.petRepository.find()
    }

    async update(id: number, petData: any) {
        await this.petRepository.update({ id }, petData)
        return await this.petRepository.findOne({ id })
    }

    async destroy(id:number):Promise<string>{
     await this.petRepository.delete({id})
     let statuscode:string = '205'
     return statuscode
        
    }

}
