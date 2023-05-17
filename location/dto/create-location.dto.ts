import { IsNotEmpty, IsString } from "class-validator";

export class CreateLocationDto {
    @IsNotEmpty()
    @IsString()
    locationName: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}
