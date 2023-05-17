import { PartialType } from '@nestjs/swagger';
import { CreateGoogleMapsAddressDto } from './create-google-maps-address.dto';

export class UpdateGoogleMapsAddressDto extends PartialType(CreateGoogleMapsAddressDto) {}
