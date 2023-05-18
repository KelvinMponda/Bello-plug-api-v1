import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, IsUrl, isNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    phonenumber: string;

    @IsNotEmpty()
    @IsString()
    DOB: string;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    imageUrl: string;
}
