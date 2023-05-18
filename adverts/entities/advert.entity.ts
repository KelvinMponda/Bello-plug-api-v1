import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/location/entities/location.entity";

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
    imageUrl: string;

    @Column({
        nullable: false
    })
    category: string;

    @Column({
        nullable: false,
        name: "Created_On"
    })
    date: Date;

    @ManyToOne(() => Location, location => location.adverts)
    location: Location;
}

