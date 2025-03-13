import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a cat.';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  // METHOD-1 to get the params
  @Get('cat/:id')
  findOne(@Param() params: any): string {
    return `This action returns cat #${params.id}`;
  }

  /* METHOD-2 to get the params
  @Get('cat/:id')
  findOne(@Param('id') id: number): string {
    return `This action returns cat #${id}`;
  } */

  @Put('/cat/:id')
  update(@Param('id') id: number, @Body() createCatDto: CreateCatDto) {
    return `This action updates cat #${id}`;
  }

  @Delete('/cat/:id')
  remove(@Param('id') id: number) {
    return `This action removes cat ${id}`;
  }
}
