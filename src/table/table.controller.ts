import { Body, Controller, Get, Post } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { ApiTags } from '@nestjs/swagger';


@Controller('table')
export class TableController {

  constructor(private tableService: TableService) {}

  @ApiTags('table')
  @Get()
  findAll(): Table[] {
    return this.tableService.findAll();
  }
  @ApiTags('table')
  @Post()
  create(@Body() CreateTableDto: CreateTableDto): Table {
    return this.tableService.create(CreateTableDto);
  }
}
