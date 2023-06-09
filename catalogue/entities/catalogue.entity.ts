import { IsBoolean } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/location/entities/location.entity";
import { Advert } from "src/adverts/entities/advert.entity";

@Entity()
export class Catalogue {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'product_ID'
    })
    id: number;

    @Column({
        nullable: false
    })
    productName: string;

    @Column({
        nullable: false
    })
    productDescription: string;

    @Column({
        nullable: false
    })
    category: string;

    @Column({
        nullable: false
    })
    price: number;

    @Column({
        nullable: false,
    })
    imageUrl: string;

    @Column({
        nullable: false
    })
    availability: boolean;

    @OneToMany(() => Advert, advert => advert.catalogue)
    adverts: Advert[];
}