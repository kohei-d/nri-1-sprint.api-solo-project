import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pref {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
