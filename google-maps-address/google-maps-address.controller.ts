import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoogleMapsAddressService } from './google-maps-address.service';
import { CreateGoogleMapsAddressDto } from './dto/create-google-maps-address.dto';
import { UpdateGoogleMapsAddressDto } from './dto/update-google-maps-address.dto';

@Controller('google-maps-address')
export class GoogleMapsAddressController {
  constructor(private readonly googleMapsAddressService: GoogleMapsAddressService) {}

  @Post()
  create(@Body() createGoogleMapsAddressDto: CreateGoogleMapsAddressDto) {
    return this.googleMapsAddressService.create(createGoogleMapsAddressDto);
  }

  @Get()
  findAll() {
    return this.googleMapsAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.googleMapsAddressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoogleMapsAddressDto: UpdateGoogleMapsAddressDto) {
    return this.googleMapsAddressService.update(+id, updateGoogleMapsAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.googleMapsAddressService.remove(+id);
  }
}
