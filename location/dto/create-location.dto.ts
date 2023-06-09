import { IsLatitude, IsLongitude, IsNotEmpty, IsString } from "class-validator";

export class CreateLocationDto {
    @IsNotEmpty()
    @IsString()
    @IsLatitude()
    latitude: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    @IsLongitude()
    longtude: string;
    
}
