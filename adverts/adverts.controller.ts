import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('adverts')
export class AdvertsController {
  constructor(private readonly advertsService: AdvertsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create/:id')
  create(@Param('id', ParseIntPipe) id: number ,@Body() createAdvertDto: CreateAdvertDto, @Param('id', ParseIntPipe) Locid: number) {
    return this.advertsService.create(id, createAdvertDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('available')
  findAll() {
    return this.advertsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.advertsService.findById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvertDto: UpdateAdvertDto) {
    return this.advertsService.update(+id, updateAdvertDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertsService.remove(+id);
  }
}
