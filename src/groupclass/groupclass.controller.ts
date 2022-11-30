import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupclassService } from './groupclass.service';
import { CreateGroupclassDto } from './dto/create-groupclass.dto';
import { UpdateGroupclassDto } from './dto/update-groupclass.dto';

@Controller('groupclass')
export class GroupclassController {
  constructor(private readonly groupclassService: GroupclassService) {}

  @Post()
  create(@Body() createGroupclassDto: CreateGroupclassDto) {
    return this.groupclassService.create(createGroupclassDto);
  }

  @Get()
  findAll() {
    return this.groupclassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupclassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupclassDto: UpdateGroupclassDto) {
    return this.groupclassService.update(+id, updateGroupclassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupclassService.remove(+id);
  }
}
