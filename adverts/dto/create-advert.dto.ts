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
    category: string;
}
