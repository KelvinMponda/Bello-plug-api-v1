import { Advert } from "src/adverts/entities/advert.entity";
import { Catalogue } from "src/catalogue/entities/catalogue.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'locationId'
    })
    id: number;

    @Column({
        nullable: false
    })
    @Column({
        nullable: false
    })
    latitude: string;

    @Column({
        nullable: false
    })
    longitude: string;

    @Column({
        nullable: false
    })
    city: string;

    @OneToMany(() => Advert, advert => advert.location)
    adverts: Advert[];
}

