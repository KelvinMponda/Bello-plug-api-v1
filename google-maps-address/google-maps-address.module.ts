import { Module } from '@nestjs/common';
import { GoogleMapsAddressService } from './google-maps-address.service';
import { GoogleMapsAddressController } from './google-maps-address.controller';

@Module({
  controllers: [GoogleMapsAddressController],
  providers: [GoogleMapsAddressService]
})
export class GoogleMapsAddressModule {}
