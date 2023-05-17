import { Exclude, Expose } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id_pk'
    })
    id: number

    @Column({
        name: 'username',
        nullable: false
    })
    username: string

    @Column({
        name: 'email_address',
        nullable: false,
        default: ''
    })
    email: string

    @Exclude()
    @Column({
        nullable: false,
    })
    password: string

    @Column({
        nullable: true,
        default: ''
    })
    gender: string

    @Column({
        name: 'user_phonenumber',
        nullable: false
    })
    phonenumber: string

    constructor(partial: Partial<Users>) {
        Object.assign(this, partial);
    }

}