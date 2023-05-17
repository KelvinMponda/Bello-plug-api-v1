import { Test, TestingModule } from '@nestjs/testing';
import { GoogleMapsAddressController } from './google-maps-address.controller';
import { GoogleMapsAddressService } from './google-maps-address.service';

describe('GoogleMapsAddressController', () => {
  let controller: GoogleMapsAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleMapsAddressController],
      providers: [GoogleMapsAddressService],
    }).compile();

    controller = module.get<GoogleMapsAddressController>(GoogleMapsAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
