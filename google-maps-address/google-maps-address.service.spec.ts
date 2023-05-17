import { Test, TestingModule } from '@nestjs/testing';
import { GoogleMapsAddressService } from './google-maps-address.service';

describe('GoogleMapsAddressService', () => {
  let service: GoogleMapsAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleMapsAddressService],
    }).compile();

    service = module.get<GoogleMapsAddressService>(GoogleMapsAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
