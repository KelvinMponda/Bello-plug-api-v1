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
    locationName: string;

    @Column({
        name: 'Address',
        nullable: false
    })
    address: string;

    @Column({
        nullable: false
    })
    city: string;

    @OneToMany(() => Catalogue, catalogue => catalogue.location)
    catalogues: Catalogue[];

    @OneToMany(() => Advert, advert => advert.location)
    adverts: Advert[];
}

