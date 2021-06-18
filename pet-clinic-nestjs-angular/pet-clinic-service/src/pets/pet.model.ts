import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pets')
export class Pet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string

    @Column()
    breed: string

    @Column()
    age: string

    @Column()
    diagnosis: string
}