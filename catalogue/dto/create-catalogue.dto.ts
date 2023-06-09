import { IsBoolean, IsInt, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateCatalogueDto {

    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsNotEmpty()
    @IsString()
    productDescription: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsInt()
    price: number;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    imageUrl: string;

    @IsNotEmpty()
    @IsBoolean()
    availability: boolean;
}
