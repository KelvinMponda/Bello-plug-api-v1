import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/location/entities/location.entity";
import { Catalogue } from "src/catalogue/entities/catalogue.entity";

@Entity()
export class Advert {
    @PrimaryGeneratedColumn({
        name: "Ad_Id",
        type: "bigint"
    })
    id: number;

    @Column({
        name: "Ad_Name",
        nullable: false,
        default: ''
    })
    Advert_Name: string;

    @Column({
        nullable: false,
        name: "Ad_Description"
    })
    Advert_Description: string;

    @Column({
        nullable: false
    })
    category: string;

    @Column({
        type: 'timestamp'
    })
    date: Date;

    @ManyToOne(() => Catalogue, catalogue => catalogue.adverts)
    catalogue: Catalogue;

    @ManyToOne(() => Location, location => location.adverts)
    location: Location;
}

