import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';

@Controller('catalogue')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}

  @Post('add')
  @UsePipes(ValidationPipe)
  create(@Body() createCatalogueDto: CreateCatalogueDto) {
    return this.catalogueService.createProduct(createCatalogueDto);
  }

  @Get('products')
  async findAll() {
    try{
      return this.catalogueService.findAll()

    }
    catch(error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Bad Request',
      }, HttpStatus.BAD_GATEWAY, {
        cause: error
      });
    }
   //return this.catalogueService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseIntPipe) id: number) 
    {
      try{
        return this.catalogueService.findById(id)
      }

      catch(error) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Cannot find Product',
        }, HttpStatus.BAD_GATEWAY, {
          cause: error
        });
      }
    
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogueDto: UpdateCatalogueDto) {
    return this.catalogueService.update(+id, updateCatalogueDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.catalogueService.remove(+id);
  }
}
