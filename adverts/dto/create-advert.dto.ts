import { IsDate, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateAdvertDto {

    @IsNotEmpty()
    @IsString()
    Advert_Name: string;

    @IsNotEmpty()
    @IsString()
    Advert_Description: string;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    imageUrl: string;
    
    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsDate()
    date: Date;
}
