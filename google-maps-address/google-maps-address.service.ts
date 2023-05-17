import { Injectable } from '@nestjs/common';
import { CreateGoogleMapsAddressDto } from './dto/create-google-maps-address.dto';
import { UpdateGoogleMapsAddressDto } from './dto/update-google-maps-address.dto';

@Injectable()
export class GoogleMapsAddressService {
  create(createGoogleMapsAddressDto: CreateGoogleMapsAddressDto) {
    return 'This action adds a new googleMapsAddress';
  }

  findAll() {
    return `This action returns all googleMapsAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleMapsAddress`;
  }

  update(id: number, updateGoogleMapsAddressDto: UpdateGoogleMapsAddressDto) {
    return `This action updates a #${id} googleMapsAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleMapsAddress`;
  }
}
